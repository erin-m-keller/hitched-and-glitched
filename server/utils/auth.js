// initialize variables
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;
const expiration = "5h";

module.exports = {
  generateAuthToken: ({ username, email, _id }) => jwt.sign({ data: { username, email, _id } }, secret, { expiresIn: expiration }),
  authMiddleware: ({ req }) => {
    let token = req.body.token || req.query.token || req.headers.authorization;
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }
    if (!token) {
      return req;
    }
    try {
      req.user = jwt.verify(token, secret);
    } catch (err) {
      //console.log("Token verification error:", err.message);
    }
    return req;
  },
};