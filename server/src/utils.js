const jwt = require('jsonwebtoken');
const APP_SECRET = env("APP_SECRET");


function getTokenPayload(token) {
    return jwt.verify(token, APP_SECRET);
  }