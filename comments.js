// Create web server

// Import modules
const express = require('express');
const router = express.Router();

// Import controllers
const commentsController = require('../controllers/comments');

// Import middlewares
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

// Define routes
router.post('/', auth, multer, commentsController.createComment);
router.get('/', auth, commentsController.getAllComments);
router.get('/:id', auth, commentsController.getOneComment);
router.put('/:id', auth, multer, commentsController.modifyComment);
router.delete('/:id', auth, commentsController.deleteComment);

// Export module
module.exports = router;