// server.js
const jsonServer = require("json-server");
const auth = require("json-server-auth");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "data.json"));
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

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

server.listen(port, () => {
  console.log("JSON Server is running");
});
