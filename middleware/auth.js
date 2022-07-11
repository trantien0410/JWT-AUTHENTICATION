const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);

  try {
    console.log("token", token);
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log(decoded);

    req.userId = decoded.id;
    next();
  } catch (error) {
    console.log(Error);
    return res.sendStatus(403);
  }
};

module.exports = verifyToken;
