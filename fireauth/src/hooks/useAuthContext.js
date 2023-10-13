import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"

// Context에 접근하기 위한 hook : useContexthook
export const useAuthContext = () => {
  //useContext를 통해 전역 context에 접근합니다.
  const context = useContext(AuthContext);

  // 이제 context안에는 AuthContext에서 반환하는 state 값(user), dispatch 함수 두 가지가 들어있습니다.
  return context;
};



// useAutnContext는 단순히 리듀서 함수 쓰기 위한 목적
// & hook으로 코드를 줄이기 위함
// & context에 접근하기 위한 코드