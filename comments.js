// Create web server for comment
// ====================================================

// Import module
var express = require('express');
var router = express.Router();
var commentController = require('../controllers/commentController.js');

// Handle request
router.get('/', commentController.comment_list);                // get all comments
router.get('/:id', commentController.show);                     // get one comment by id
router.get('/create', commentController.comment_create_get);    // create comment get
router.post('/create', commentController.comment_create_post);  // create comment post
router.put('/:id', commentController.comment_update_put);       // update comment
router.delete('/:id', commentController.comment_delete);        // delete comment

// Export module
module.exports = router;