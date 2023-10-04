import { render, screen, fireEvent } from '@testing-library/react';
// fireEvent 추가 3
import App from './App';

// test : 제스트에서는 글로벌 함수로 표현됨
// test에 대한 설명 : renders learn react link
test('renders learn react link', () => {
  // test : 제스민의 디스크라이브 함수라고 생각하면 됨
  render(<App />);
  // render : 인자로 받는 js(App)의 가상돔을 생성
  
  // 2023.10.4 주석처리 수정
  // const linkElement = screen.getByText(/learn react/i);
  // screen : 가상 돔에 접근하기 위한 전역 객체
  // getByText : 인자로 정규표현식 코드를 전달하고 있음
  // 정규표현식 : 문자열을 탐색하는 또 다른 프로그래밍 언어라고 생각하면됨
  // /learn react/ 라는 문자열을 screen에서 검색하는 것
  // /learn react/i : i 대소문자 구분 없이 검색하겠다

  // 2023.10.4 주석처리 수정
  // expect(linkElement).toBeInTheDocument();
  // 나는 learn react 라는 문자열이 document에 있기를 기대해 라는 뜻

  // 2023.10.4 주석처리 수정 후 코드 추가 1
  const button = screen.getByRole('button', {name: 'change to blue!'});
  // App 컴포넌트 안에서 버튼의 역할을 하는 요소를 찾게 됨
  // {name: ''} : 찾고자 하는 요소 안에 이 텍스트가 있는지

  // 2023.10.4 주석처리 수정 후 코드 추가 4
  expect(button).toHaveStyle({ backgroundColor: 'red' });

  // 2023.10.4 주석처리 수정 후 코드 추가 5
  fireEvent.click(button);  

  // 2023.10.4 주석처리 수정 후 코드 추가 6
  expect(button.textContent).toBe('change to red!');

  // 만일 실행에 실패하게 한다면 ?
  // learn react 라는 문자열이 App.js에 없어야 함
});
