// server.js
const fs = require("fs");
const jsonServer = require("json-server");
const auth = require("json-server-auth");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const server = jsonServer.create();
const path = require("path");
const middlewares = jsonServer.defaults();

const userdb = JSON.parse(fs.readFileSync(__dirname, "user.json", "utf-8"));
const router = jsonServer.router(path.join(__dirname, "data.json"));
const port = process.env.PORT || 4000;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

//미들웨어
server.use(auth);
server.use(middlewares);

//라우트
const customRouter = jsonServer.rewriter({
  "/api/*": "/$1",
  "/:resource/:id/show": "/:resource/:id",
  "/posts/:category": "/posts?category=:category",
  "/articles\\?id=:id": "/posts/:id",
});

server.use(router);
server.use(customRouter);

//token
const SECRET_KEY = "72676365";

const expiresIn = "1h";
const createToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

const isAuthenticated = ({ email, password }) => {
  return (
    userdb.users.findIndex(
      (user) => user.email === email && user.password === password
    ) !== -1
  );
};

server.post("/api/auth/register", (req, res) => {
  const { email, password } = req.body;
  if (isAuthenticated({ email, password })) {
    const status = 401;
    const message = "email, password already exist";
    res.status(status).json({ status, message });
    return;
  }
  fs.readFile("./users.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }
    let data = JSON.parse(data.toString());
    let last_item_id = data.users[data.users.length - 1].id;
    data.users.push({ id: last_item_id + 1, email: email, password });
    let writeData = fs.writeFile(
      "./users.json",
      JSON.stringify(data),
      (err, result) => {
        if (err) {
          const status = 401;
          const message = err;
          res.status(status).json({ status, message });
          return;
        }
      }
    );
  });
  const access_token = createToken({ email, password });
  res.status(200).json({ access_token });
});

server.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  if (isAuthenticated({ email, password })) {
    const status = 401;
    const message = "incorrect Email or Password";
    res.status(status).json({ status, message });
    return;
  }
});

server.listen(port, () => {
  console.log("JSON Server is running");
});
