const express = require("express");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const cookiesParser = require("cookie-parser");
const { validUser } = require("./src/middleware/auth");
const app = express();

const database = [{ id: 1, username: "abc", password: "abc" }];

app.use(express.json());
app.use(cookiesParser());
app.use(express.urlencoded({ extended: false }));

app.get("/users", (req, res) => {
  res.send(database);
});

app.get("/secure_data", validUser, (req, res) => {
  res.send("인증된 사용자만 쓸 수 있는 API");
});

app.post("/signup", async (req, res) => {
  const { username, password, age, birthday } = req.body;
  const hash = await argon2.hash(password);
  database.push({
    username,
    password: hash,
    age,
    birthday,
  });

  const access_token = jwt.sign({ username }, "secure");
  console.log(access_token);
  res.send("success");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = database.filter((user) => {
    return user.username === username;
  });
  if (user.length === 0) {
    res.status(403).send("해당하는 id가 없습니다.");
  }

  if (!(await argon2.verify(user[0].password, password))) {
    res.status(403).send("패스워드가 틀립니다.");
  }
  res.send("로그인 성공!");
});

app.listen(3000, () => {
  console.log("server on!");
});
