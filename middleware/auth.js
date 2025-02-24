const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();
exports.verifyAdmin = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header) {
      return res.status(401).json({ message: 'No token provided' });
    }
    const token = header.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);
    if (!user) {
      return res.status(401).json({ message: 'Invalid user' });
    }
    if (user.user_type !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token', error: error.message });
  }
};
exports.verifyRole = (role) => {
  return async (req, res, next) => {
    try {
      const header = req.headers.authorization;
      if (!header) {
        return res.status(401).json({ message: 'No token provided' });
      }
      const token = header.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findByPk(decoded.id);
      if (!user) {
        return res.status(401).json({ message: 'Invalid user' });
      }
      if (user.user_type !== role) {
        return res.status(403).json({ message: 'Access denied' });
      }
      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Invalid token', error: error.message });
    }
  };
};
