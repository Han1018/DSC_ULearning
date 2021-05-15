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
  var subjectsList = ["資訊工程", "國際貿易", "經濟", "機械工程", "日語文學", "英語文學", "設計", "心理學"]
  var result = []

  for (let i = 0; i < subjectsList.length; i++) {
    result.push(
      {
        id: i + 1,
        major: subjectsList[i]
      }
    );
  }
  res.json(result);
});


// 建立course tree api 
// GET api/v1/majors
router.get("/api/v1/majors/:id", (req, res, next) => {
  let majorsList = ["程式基礎", "崁入式系統", "網路應用", "人工智慧", "數據分析"]
  var result = []
  if (req.params.id != 1) { res.json({}) }
  for (let i = 0; i < majorsList.length; i++) {
    result.push(
      {
        id: i + 1,
        name: majorsList[i],
        desription: "wiki"
      }
    );
  }
  res.json(result);
});


// 查詢科系OpenCourse內容API api/v1/courses/id
// GET api/v1/courses/id
router.get("/api/v1/course/:id", async (req, res) => {
  let majorsList = ["程式基礎", "崁入式系統", "網路應用", "人工智慧", "數據分析"]
  let majorId = req.params.id - 1; //前端預設為1開始，所以減1

  // console.log(await models.opencourse_infos.findAll({ where: { major: majorsList[majorId]} }));
  const subList = await models.opencourse_infos.findAll({ where: { major: majorsList[majorId] }, group: 'sub_major', raw: true })
    .then(items => {
      let result = [];
      items.forEach(e => { result.push(e['sub_major']); });
      return (result);
    })
    .catch(err => {
      console.log("xxx => ", err);
      res.status(400)
    });

  //搜尋sub_major 的所有課程
  let courses = []
  for (let i = 0; i < subList.length; i++) {
    const result = await models.opencourse_infos.findAll({ where: { sub_major: subList[i] } })
      .then(items => {
        let tmp = {};
        let children = [];
        tmp.id = i + 1;
        tmp.name = subList[i];

        for (let j = 0; j < items.length; j++) {
          children.push({
            id: j + 1,
            name: items[j].dataValues.title,
            desc: items[j].dataValues.desription,
            link: items[j].dataValues.link
          })
        }
        tmp.children = children;
        return tmp;
      })
      .catch(err => {
        console.log("sub_major => ", err);
        res.status(400)
      })
    courses.push(result);
  }

  res.json(courses);
});


module.exports = router;
