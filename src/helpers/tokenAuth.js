const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

class TokenAuth {
  static tokenGenerator(data) {
    const token = jwt.sign(data, process.env.JWTKEY, { expiresIn: "1d" });

    return token;
  }
  //decoding a token so that to get data from token

  static getDataFromToken(token) {
    const data = jwt.verify(token, process.env.JWTKEY);
    return data;
  }
}
module.exports = TokenAuth;
