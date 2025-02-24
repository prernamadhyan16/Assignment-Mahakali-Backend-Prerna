const express = require('express');
const router = express.Router();
const controller = require('../controllers/pageBanner.controller');
const { verifyAdmin } = require('../middleware/auth');
const upload = require('../middleware/upload');
router.post('/', verifyAdmin, upload.single('image'), controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/:id', verifyAdmin, upload.single('image'), controller.update);
router.delete('/:id', verifyAdmin, controller.delete);
module.exports = router;
