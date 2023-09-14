import { BrowserRouter, Routes, Route, Link, useLocation, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name='licat' />}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three/*" element={<Outlet />}>
          {/* Outlet : 라우터가 중첩이 되어 넣을 수 있을 때 많이 사용 */}
          {/* /* : 뒤에 오는 내용 전체를 불러옴 */}
          {/* /three/에 대한 라우트 */}
              <Route path="" element={<HojunIndex/>}/>
                {/* /three/HojunIndex/에 대한 라우트 */}
              <Route path="hojunone/" element={<HojunOne/>}/>
                {/* /three/HojunOne/에 대한 라우트 */}
              <Route path="hojuntwo/" element={<HojunTwo/>}/>
                {/* /three/HojunTwo/에 대한 라우트 */}
        </Route>
        <Route path="/blog/:id" element={<Blog />}/>
        {/* id 값으로 blog를 불러옴 */}
      </Routes>
    </BrowserRouter>
  );
}

function Index(){
  return <h1>hello world0</h1>
}

function One({name}){
  return <h1>{name} world1</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

function Blog(){
    const location = useLocation();
  console.log(location)
  return <h1>hello Blog</h1>
}

function HojunIndex(){
    const location = useLocation();
  console.log(location)
  return <h1>hello Hojun index</h1>
}

function HojunOne(){
    const location = useLocation();
  console.log(location)
  return <h1>hello Hojun 1</h1>
}

function HojunTwo(){
    const location = useLocation();
  console.log(location)
  return <h1>hello Hojun 2</h1>
}

export default App;



// 자식에 path=''가 없으면 three/로는 아무것도 안나오나요?
// 정답 !