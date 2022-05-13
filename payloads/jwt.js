// createJwtToken.js
var jwt = require('jsonwebtoken')

const payload = {"username": "vulnlabAdmin"}
console.log(jwt.sign(payload, "secret"))