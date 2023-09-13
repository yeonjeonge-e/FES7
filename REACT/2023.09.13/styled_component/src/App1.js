import { createGlobalStyle } from "styled-components"
import Example from "./Components/Example"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle
// 아래 코드는 백틱 안에 입력함 ``
`
    ${reset}
    
    span {
    color: red;
    font-size: 12px;
    }

    a{
        text-decoration : none;
        color : inherit;
    }

    button{
        border : none;
        cursor : pointer;
    }

    * {
    box-sizing: border-box;
    }
`

function App() {

  // 어렵고 이해가 안갈 땐 모든지 콘솔 찍어서 확인
  // 콘솔 찍어도 모르겠다면 일단 넘어가고 다음에서 이해
  console.log(reset);

  return (
    <>
      <GlobalStyle/>
      <h1>hello world 1</h1>
      <span>hello world 2</span>
      <Example/>
    </>
  );
}

export default App;