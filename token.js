const jwt = require('jsonwebtoken');
require('dotenv').config();
const testPayload = {
  id: 1,
  user_type: 'admin'
};
const token = jwt.sign(testPayload, process.env.JWT_SECRET);
console.log('Permanent Test Token:', token);
