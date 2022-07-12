const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  
  const token = authHeader && authHeader.split(" ")[1]; //check the authHeader, if it have authHeader then split to get the token that in the array is in position 1
  if (!token) return res.sendStatus(401);

  try {
    console.log("token", token);
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET); // create the access token secret in other file to secure 
    console.log(decoded);

    req.userId = decoded.id;
    next();
  } catch (error) {
    console.log(Error);
    return res.sendStatus(403);
  }
};

module.exports = verifyToken; // exports to use in other files
