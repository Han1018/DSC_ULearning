var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// 建立course tree api
router.get("/api/v1/courses", (req, res, next) => {

  res.json(
    [
      {
        id: 4,
        name: "資料庫 ",
        descption: "wiki",
      },
      {
        id: 5,
        name: "人工智慧 :",
        descption: "wiki",
      },
    ]
  );
});
module.exports = router;
