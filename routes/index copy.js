
// 必要なモジュールを読み込みます。
// var socketIO = require("socket.io");
var fs = require("fs");
var express = require('express');
var router = express.Router();
// var http = require('http');

/* GET home page. */
//通常get処理
router.get('/',
function(req, res, next) {
  res.render('index', {
    title: 'sync canvas'
  })
})




/*
// node.jsでWebServerを作ります。
// アクセスされたら、クライアントに表示するsyncCanvas.htmlを返します。
var server = http.createServer(function (req, res) {
res.writeHead(200, {"Content-Type":"text/html"});
var output = fs.readFileSync("./syncCanvas.html", "utf-8");
res.end(output);
});
*/


// socket.IOを用いたリアルタイムWebを実装します。
// var io = socketIO(http);




module.exports = router;
