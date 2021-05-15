var express = require('express');
var router = express.Router();
const _db = require("../models");
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// 建立course tree api
router.get("/api/v1/courses", (req, res, next) => {
  var courseList = ["計算機組織", "資料庫", "資料結構", "人工智慧", "數據分析"]
  var result = []
  for (let i = 0; i < courseList.length; i++) {
    result.push(
      {
        id: i,
        name: courseList[i],
        desription: "wiki"
      }
    );
  }
  res.json(result);
});
module.exports = router;
