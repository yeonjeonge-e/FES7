import { useState } from "react"
import { appAuth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    // 에러정보를 관리합니다.
    const [error, setError] = useState(null);

    // 통신 상태를 관리합니다.
    const [isPending, setIsPending] = useState(false);

    const {dispatch} = useAuthContext();

    const signup = (email, password, displayName) => {

      console.log(createUserWithEmailAndPassword);

      // 비밀번호 설정으로 유저 정보를 등록
      // 회원가입 처리 함수
        createUserWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);

                // 유저정보가 왔는데 아무런 정보가 없을 경우 예외처리
                if (!user) {
                  throw new Error('회원 정보를 불러올 수 없습니다.');
                }

                // 파이어베이스는 사용자가 회원가입에 성공하면 자동으로 로그인이 됨
                // 현재 로그인 되어있는 유저 정보를 로그인
                // 회원 정보 업데이트 함수.
                updateProfile(appAuth.currentUser, { displayName })
                .then(() => {
                  dispatch({ type: "login", payload: user });
                  setError(null);
                  setIsPending(false);
                })
                .catch(() => {
                  setIsPending(false);
                  console.log(error);
                });
            })
            .catch((err) => {
              setError(err.message);
              setIsPending(false);
              console.log(error);
            });
    };

  return { error, isPending, signup };
};