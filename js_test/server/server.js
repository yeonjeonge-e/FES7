/**
  const http = require("http");
  //  http 패키지를 사용하겠다 라는 코드
  //  require : 해당 패키지를 불러와서 사용할 수 있게끔 하는 역할을 함
  
  // 서버를 만드는 코드
  http.createServer((req, res) => {
    //  req : 요청 보낼 때 정보가 담김
    //  res : 응답 보낼 때 정보가 담김
    res.writeHead(200, { "Content-Type": "text/html" });
    //  응답을 보낼 때 헤더 값을 통해 상태코드와 어떤 타입인지를 보냄
    //  200 : 응답이 잘 됨
    //  404 : 응답이 정상적으로 이루어지지 않음
    res.end("<p>Hello disend</p>");
  })
    .listen(3000, () => {
      console.log("3000번 포트 서버 접속 완료");
      // 서버가 완료가 되면 문구 출력
    });
  
*/



// 구글창에 localhost:3000 검색해서 잘 출력되는지 확인
//  localhost : 현재 컴퓨터의 내부 주소 
//  127.0.0.1 : IP (Internet Protocol)
//  포트 : 서버 내의 프로세스를 구분하는 번호



const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200);
      res.end("main url");
    } else if (req.method === "/upload") {
      res.writeHead(200);
      res.end("upload url");
    } else if (req.method === "/delete") {
      res.writeHead(200);
      res.end("delete url");
    } else {
      res.writeHead(200);
      res.end("Not found");
    }
  })
  .listen(3000, () => {
    console.log("3000번 포트 서버 접속 완료");
  });



  //  http : 다른 개발자가 만들어 놓은 패키지 사용
  //  - 방대한 패키지를 모아서 설치/관리 해줘야 하지 않을까?
  //    해서 만들어 진 것이 npm

  //  npm
  //  node package manager
  //  Node.js로 만들어진 패키지를 설치하고 관리해주는 툴

  //  하지만 패키지를 설치하다 보면 100개 이상의 패키지를 설치 할 수도 있음
  // 그러면 서로 의존되는 패키지들이 존재하게 되며
  //  패키지의 버전마자 기능이 다를 수 있는 문제가 발생하게 됨

  //  이러한 설치한 패키지 버전을 관리해주는 파일 ?
  //  package.json 임