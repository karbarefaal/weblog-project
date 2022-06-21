const { Router } = require("express");

const blogController = require('../controllers/blogController');

const router = new Router();

// @desc Weblog Index Page
// @ route GET / 
router.get("/", blogController.getIndex);

// @desc Weblog Page Page
// @ route GET /post/:id
router.get("/post/:id", blogController.getSinglePost);

// @desc Weblog Contact Page
// @ route GET /contact
router.get("/contact", blogController.getContactPage);

// @desc Weblog Numeric Captcha
// @ route GET /captcha.png
router.get("/captcha.png", blogController.getCaptcha);

// @desc Handle Contact Page
// @ route POST /contact
router.post("/contact", blogController.handleContactPage);

// @desc Handle Search
// @ route POST /search
router.post("/search", blogController.handleSearch);

// @desc Comment
// @ route POST /comment:postId
router.post("/comment/:postId", blogController.addComment);


module.exports = router;