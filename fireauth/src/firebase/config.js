import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyB_z_pgaYBxWG13ktt_JT_ye3oRGIgAAWY",
//   authDomain: "fir-react-app-5a46a.firebaseapp.com",
//   projectId: "fir-react-app-5a46a",
//   storageBucket: "fir-react-app-5a46a.appspot.com",
//   messagingSenderId: "594851825939",
//   appId: "1:594851825939:web:5ed552538c347f358b32e6"
// };

// firebaseConfig 안에 있는 내용들은 남한테 보여주면 안되는 파일
// 내 개인정보 유출이 될 수 있음
// 위 코드에서 env 파일을 이용해서 아래처럼 변경함

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firestore 초기화
const appFireStore = getFirestore(app);

// firebase 인증 초기화
const appAuth = getAuth();

export { appFireStore, appAuth };
// 밖에서 사용할 수 있게 적어줌