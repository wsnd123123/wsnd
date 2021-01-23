const express = require('express');

// 得到一个路由
let router = express.Router()


// 引入模块
const controller = require('./controller');


router.get('/abult', controller.abult)

router.get('/index', controller.form)

router.get('/index2', controller.form2)

router.get('/index3', controller.form3)

// 获取数据库信息
router.post('/data', controller.data)

// 删除数据
router.post('/romet', controller.romet)

// 编辑数据
router.get('/bianji', controller.bianji)


// 暴露路由
module.exports = router;