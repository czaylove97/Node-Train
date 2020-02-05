const express = require('express');
const router = express.Router();
const articleControllers = require('../controllers/articles');

router.get('/', articleControllers.get_all_articles);

router.get('/:articlesid',articleControllers.get_id_articles);

router.post('/',articleControllers.post_articles);

router.put('/:articlesid',articleControllers.put_articles);

router.delete(':/articlesid',articleControllers.delete_articles);
module.exports = router;