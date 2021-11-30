const jwt = require("jsonwebtoken");

const generateJwt = (id) => {
  return new Promise((resolve, reject) => {
    
    jwt.sign(
      {id},
      "aklfjssd1423afldskjasdf",
      { expiresIn: "4h" },
      (err, token) => {
        if (err) reject(err);
        else resolve(token);
      }
    );
  });
};

module.exports = {generateJwt};