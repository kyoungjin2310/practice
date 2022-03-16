const { database } = require("../../server");
const validUser = (req, res, next) => {
  const { access_token } = req.cookies;
  if (!access_token) {
    res.status(401).send("access token이 없습니다.");
  }
  try {
    const { username } = jwt.verify(access_token, "secure");
    const userInfo = database.find((data) => data.username === username);
    if (!userInfo) {
      throw "user info가 없습니다";
    }
    next();
  } catch (e) {
    res.status(401).send("유효한 access token이 아닙니다.");
  }
};