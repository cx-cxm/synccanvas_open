
// 必要なモジュールを読み込みます。///
// var socketIO = require("socket.io");

var express = require('express');
var router = express.Router();
// 選択肢を決定するため、data.jsonファイルの読み込み
var fs = require("fs");
var json = fs.readFileSync("./upload/data.json")
var data = JSON.parse(json)


// 選択肢を変更する際のファイル読み込み処理
var os = require('os')
const multer  = require('multer');
// const upload = multer({ dest: os.tmpdir() }); // ファイル生成しない
// const upload = multer({ dest: 'upload/' })　// ファイル生成する。ファイル名はランダム


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })


var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

router.post('/upload', upload.single('file'), function(req, res) {


  json = fs.readFileSync("./upload/data.json")
  data = JSON.parse(json)



  console.log(req.file)
  const upfile = fs.readFileSync(req.file.path)
  const updata = JSON.parse(upfile)
  console.log(updata.player)

/*
  res.render('index', {
    title: 'sync canvas',
    player1: req.app.get('player1'),
    hole1: req.app.get('hole1'),
    shot1: req.app.get('shot1'),
    type1: req.app.get('type1'),
    player2: req.app.get('player2'),
    hole2: req.app.get('hole2'),
    shot2: req.app.get('shot2'),
    type2: req.app.get('type2'),
    message: req.app.get('message'),
    count: req.app.get('count'),
    data_player: updata.player,
    data_hole: updata.hole,
    data_shot: updata.shot,
    data_type: updata.type,
  })
  */

  res.sendStatus(200);
});






/* GET home page. */
//通常get処理
router.get('/',
function(req, res, next) {
  res.render('index', {
    title: 'sync canvas',
    player1: req.app.get('player1'),
    hole1: req.app.get('hole1'),
    shot1: req.app.get('shot1'),
    type1: req.app.get('type1'),
    player2: req.app.get('player2'),
    hole2: req.app.get('hole2'),
    shot2: req.app.get('shot2'),
    type2: req.app.get('type2'),
    message: req.app.get('message'),
    count: req.app.get('count'),
    data_player: data.player,
    data_hole: data.hole,
    data_shot: data.shot,
    data_type: data.type,
  })
})




module.exports = router;
