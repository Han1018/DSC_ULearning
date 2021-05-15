var express = require('express');
var router = express.Router();
const models = require('../models');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// 科系分類API 
// GET api/v1/subjects
router.get("/api/v1/subjects", (req, res, next) => {
  var majorList = ["資訊工程", "國際貿易", "經濟", "機械工程", "日語文學", "英語文學", "設計", "心理學"]
  var result = []

  for (let i = 0; i < majorList.length; i++) {
    result.push(
      {
        id: i + 1,
        major: majorList[i]
      }
    );
  }
  res.json(result);
});


// 建立course tree api 
// GET api/v1/majors
router.get("/api/v1/majors/:id", (req, res, next) => {
  var courseList = ["計算機組織", "資料庫", "資料結構", "人工智慧", "數據分析"]
  var result = []
  if (req.params.id != 1) { res.json({}) }
  for (let i = 0; i < courseList.length; i++) {
    result.push(
      {
        id: i + 1,
        name: courseList[i],
        desription: "wiki"
      }
    );
  }
  res.json(result);
});


// 查詢科系OpenCourse內容API api/v1/courses/id
// GET api/v1/courses/id
router.get("/api/v1/majors/test", async (req, res) => {

  try {

    const r = await models.opencourse_infos.findOne({ where: { id: 1 } })
      .then(t => { return t['dataValues']['description']; })
      .catch(err => { console.log('err1'); res.status = 400 });

    console.log(r);
    res.send(r);
  } catch (error) {
    console.log("sxxxx", error);
    res.status(400);
  }
});


module.exports = router;
