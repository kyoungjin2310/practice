import express, { Application } from "express";
import sequelize from "./sequelize";
import session from "express-session";
import routes from "./routes";

const FileStore = require("session-file-store")(session);

const app: Application = express();

const sessionMiddleware = session({
  secret: "cacaonibs",
  saveUninitialized: true,
  cookie: { secure: false },
  resave: false,
  store: new FileStore(),
});

app.use(sessionMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
sequelize.sync({ force: true });

app.use("/", routes);

app.listen(8000, () => {
  console.log("start");
});
