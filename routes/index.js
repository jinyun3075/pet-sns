var express = require('express');
var router = express.Router();
const authRouter = require('./auth');
const postRouter = require('./posts')
const postCtr = require('../controller/postCtr');
router.get('/',postCtr.list);

//router.use 메소드 상관없이 모든 요청을 받는다.
router.use('/auth',authRouter);
router.use('/posts',postRouter);
module.exports = router;
