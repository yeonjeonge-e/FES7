import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One />}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three" element={<Three />}/>
        {/* path : 경로 */}
        {/* "/" : props */}
      </Routes>
    </BrowserRouter>
  );
}

function Index(){
  return <h1>hello world0</h1>
}

function One(){
  return <h1>hello world1</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

export default App;



// 주소창 : http://localhost:3000/
// 슬래시(/) 뒤에 two, three 라고 추가해주면
// hello world2, hello world3 이런 식으로 변경됨
// === 이런 것이 라우팅

// 어떤 페이지, 어떤 주소를 가던 index.html 파일을 거치고 감