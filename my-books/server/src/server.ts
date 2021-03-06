import fs from "fs";
import bodyParser from "body-parser";
import jsonServer from "json-server";
import jwt from "jsonwebtoken";
import cors from "cors";

const server = jsonServer.create();
const router = jsonServer.router("./database.json");
const userdb = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
const PORT = 5000;
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());
server.use(cors({ origin: true, credentials: true }));

const SECRET_KEY = "123456789";

const expiresIn = "1h";
declare module "jsonwebtoken" {
  export interface UserPayload extends jwt.JwtPayload {
    username: string;
  }
}

// Create a token from a payload
function createToken(payload: string) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// // Verify the token
// function verifyToken(token: string) {
//   return jwt.verify(token, SECRET_KEY, (err, decode) =>
//     decode !== undefined ? decode : err
//   );
// }

// Check if the user exists in database
// @ts-ignore
function isAuthenticated({ email, password }) {
  return (
    userdb.users.findIndex(
      // @ts-ignore
      (user) => user.email === email && user.password === password
    ) !== -1
  );
}

// Register New User
server.post("/auth/register", (req, res) => {
  console.log("register endpoint called; request body:");
  console.log(req.body);
  const { email, password } = req.body;
  // @ts-ignore
  if (isAuthenticated({ email, password }) === true) {
    const status = 401;
    const message = "Email and Password already exist";
    res.status(status).json({ status, message });
    return;
  }
  // @ts-ignore
  fs.readFile("./users.json", (err, user) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }

    // Get current users data
    // @ts-ignore
    let data = JSON.parse(user.toString());

    // Get the id of last user
    // @ts-ignore
    let last_item_id = data.users[data.users.length - 1].id;

    //Add new user
    // @ts-ignore
    data.users.push({ id: last_item_id + 1, email: email, password: password }); //add some data
    let writeData = fs.writeFile(
      "./users.json",
      JSON.stringify(data),
      // @ts-ignore
      (err, result) => {
        // WRITE
        if (err) {
          const status = 401;
          const message = err;
          res.status(status).json({ status, message });
          return;
        }
      }
    );
  });

  // Create token for new user
  // @ts-ignore
  const access_token = createToken({ email, password });
  console.log("Access Token:" + access_token);
  res.status(200).json({ access_token });
});

// Login to one of the users from ./users.json
server.post("/auth/login", (req, res) => {
  console.log("login endpoint called; request body:");
  console.log(req.body);
  const { email, password } = req.body;

  if (isAuthenticated({ email, password }) === false) {
    const status = 401;
    const message = "Incorrect email or password";
    console.log(message);
    res.status(status).json({ status, message });
    return;
  }
  // @ts-ignore
  const access_token = createToken({ email, password });
  console.log("Access Token:" + access_token);
  res.status(200).json({ access_token });
});

//Verify Token
// @ts-ignore
function verifyToken(req, res, next) {
  //Auth header value = > send token into header

  const bearerHeader = req.headers["authorization"];
  //check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    //split the space at the bearer
    const bearer = bearerHeader.split(" ");
    //Get token from string
    const bearerToken = bearer[1];

    //set the token
    req.token = bearerToken;

    //next middleweare
    next();
  } else {
    //Fobidden
    res.sendStatus(403);
  }
}

server.get("/books", verifyToken, (req, res) => {
  // @ts-ignore
  jwt.verify(req.token, SECRET_KEY, (err, authData) => {
    if (err) res.sendStatus(403);
    else {
      const { email } = authData;
      const index = userdb.users.findIndex((user: any) => user.email === email);
      const userIndex = userdb.users[index];
      console.log("????????????");
      const { books } = userIndex;
      console.log(books);
      res.json({ books });
    }
  });
});

//server.use(router);
server.listen(PORT, () => {
  console.log("Running fake api json serve");
});
