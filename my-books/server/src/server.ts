import express from "express";
import * as argon2 from "argon2";
import jwt from "jsonwebtoken";
import cookiesParser from "cookie-parser";
import { validUser } from "./middleware/auth";
import cors from "cors";

import { database } from "./data";
import { Props } from "./type";

const app = express();

app.use(express.json());
app.use(cookiesParser());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

const SECRET_KEY = "123456789";

const expiresIn = "1h";

app.get("/books", (req, res) => {
  res.send(database);
});

app.get("/secure_data", validUser, (req, res) => {
  res.send("인증된 사용자만 쓸 수 있는 API");
});

app.post("/auth/register", async (req, res) => {
  const { username, password, age, birthday }: Props = req.body;
  const hash = await argon2.hash(password);
  database.push({
    username,
    password: hash,
    age,
    birthday: birthday,
  });

  const access_token = jwt.sign({ username }, "secure");
  console.log(access_token);
  res.send("success");
});

function verifyToken(token: any) {
  return jwt.verify(token, SECRET_KEY, (err: any, decode: any) =>
    decode !== undefined ? decode : err
  );
}

function isAuthenticated({ username, password }: any) {
  return (
    database.findIndex(
      (user) => user.username === username && user.password === password
    ) !== -1
  );
}

function createToken(payload: any) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

app.post("/auth/login", async (req, res) => {
  console.log("login endpoint called; request body:");
  console.log(req.body);
  const { username, password } = req.body;
  if (isAuthenticated({ username, password }) === false) {
    const status = 401;
    const message = "Incorrect email or password";
    res.status(status).json({ status, message });
    return;
  }
  const access_token = createToken({ username, password });
  console.log("Access Token:" + access_token);
  res.status(200).json({ access_token });
});

app.listen(5000, () => {
  console.log("server on!");
});
