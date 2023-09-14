import React, { useState, useEffect } from 'react';


function App() {
    const [arr, setArr] = useState([]);
    // const [arr, setArr] = useState();
    // 위와 같이 useState()에 초기화를 안해주면 undefined 로 오류 발생함
    // 꼭 꼭 useState()에서 초기화 해줘야함

    useEffect(()=>{
        setArr([1,2,3,4,5])// 10초정도걸림
    },[])
    
  return (
    <div>
        {arr.map(item=><div>{item}</div>)}
    </div>
  );
}

export default App;