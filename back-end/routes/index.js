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

  for (let i = 1; i < courseList.length + 1; i++) {
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

router.get("/api/v1/majors", (req, res, next) => {
  var majorList = ["資訊工程", "國際貿易", "經濟", "機械工程", "日語文學", "英語文學", "設計", "心理學"]
  var result = []

  for (let i = 1; i < majorList.length + 1; i++) {
    result.push(
      {
        id: i,
        major: majorList[i]
      }
    );
  }
  res.json(result);
});




module.exports = router;
