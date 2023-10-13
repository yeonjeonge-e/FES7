import { createContext, useEffect, useReducer } from "react";
import { appAuth } from "../firebase/config";

const AuthContext = createContext();

// 리듀서 함수
const authReducer = ( state, action ) => {
  // 리덕스의 리듀스에는 actions, stats가 들어있어서 액션에 타입에 따라 받아오는게 다름
  switch (action.type) {
    case 'login':
      return { ...state, user: action.payload }
    case 'logout':
      return { ...state, user: null }
    case 'authIsReady':
      return { ...state, user: action.payload, isAuthReady:true }
    default:
      return state
      // 아무런 타입이 안들어오면 기본값인 state 출력
  }
}

const AuthContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(authReducer, { user: null, isAuthReady:false })
  // dispatch : 리듀서를 호출하는 역할
  // dispatch가 실행되면 authReducer 함수가 실행됨
  // { user: null } 기존 정보에 action.payload 값이 추가됨

  // console.log('context state: ', state);

  useEffect(() => {
    const unsubscribe = appAuth.onAuthStateChanged(function (user) {
      // 유저 정보가 있을때만 authIsReady 값이 되므로, 컴포넌트 랜더링이 되지 않는다
      // if (user) {
        dispatch({ type: 'authIsReady', payload: user });
      // }
    });

    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {/* dispatch 역할 : 유저 정보 실행 */}
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }