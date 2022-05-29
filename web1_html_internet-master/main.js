var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
  var url = request.url;
  if(request.url == '/'){
    url = '/index.html';
  }
  if(request.url == '/favicon.ico'){
    response.writeHead(404);
    response.end();
    return;
  }
  response.writeHead(200);
  console.log(__dirname + url);// /Users/deok-yongkim/workspace(지우면안됨)/nodejs/nodejs_project/web1_html_internet-master/index.html  -> 현재 실행한 파일의 경로가 저장됨  
  response.end(fs.readFileSync(__dirname + url)); // __dirname + url 경로에 있는 파일을 읽어서 사용자에게 전송할 데이터를 보내주는 부분 ( 사용자가 화면에서 보는 부분임 )
  //response.end("deok : " + url); -> 이렇게 하면 url창에 localhost:3000/3.html 이라고 쳤다면 화면에 deok : 3.html 이게 나온다.

});
app.listen(3000);