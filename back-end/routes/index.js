var express = require('express');
var router = express.Router();
const models = require('../models');

var cors = require('cors');
var app = express();
app.use(cors())

//设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Content-Type, Accept, Authorization, X-Requested-With, Origin, Accept-With");
  res.header('Access-Control-Allow-Credentials', 'false')
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


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
// GET api/v1/majors/[id]
router.get("/api/v1/majors/:id", async (req, res, next) => {

  let subjId = req.params.id - 1;
  if (subjId != 0) { res.status(400); }

  var subjectsList = ["資訊工程", "國際貿易", "經濟", "機械工程", "日語文學", "英語文學", "設計", "心理學"]

  let result = []
  try {
    const majors = await models.majors.findAll({ where: { subj: subjectsList[subjId] } });

    for (let i = 0; i < majors.length; i++) {
      result.push(
        {
          id: i + 1,
          name: majors[i].major,
          desription: majors[i].description
        }
      );
    }
    res.status(200);
    res.json(result);

  } catch (error) {
    console.log("err=>", error);
    res.status(400);
  }
});


// 查詢科系OpenCourse內容API api/v1/courses/id
// GET api/v1/courses/id
router.get("/api/v1/course/:id", async (req, res) => {

  let majorsList = ["程式基礎", "崁入式系統", "網路應用", "人工智慧", "數據分析"]
  let majorId = req.params.id - 1; //前端預設為1開始，所以減1

  // console.log(await models.opencourse_infos.findAll({ where: { major: majorsList[majorId]} }));
  let subList = [];
  let major = majorsList[majorId];
  try {
    const items = await models.opencourse_infos.findAll({ where: { major: major }, group: 'sub_major' });
    items.forEach(e => { subList.push(e.sub_major); });
  } catch (error) {
    console.log("xxx => ", error);
    res.status(400);
  }

  //搜尋sub_major 的所有課程
  let courses = []
  for (let i = 0; i < subList.length; i++) {

    let tmp = {};
    let children = [];
    tmp.id = i + 1;
    tmp.name = subList[i];

    try {
      const items = await models.opencourse_infos.findAll({ where: { sub_major: subList[i] } });

      for (let j = 0; j < items.length; j++) {
        children.push({
          id: j + 1,
          name: items[j].dataValues.title,
          desc: items[j].dataValues.desription,
          link: items[j].dataValues.link
        })
      }
      tmp.children = children;
      courses.push(tmp);

    } catch (error) {
      console.log("sub_major => ", error);
      res.status(400);
    }
  }

  res.json(courses);

});


module.exports = router;
