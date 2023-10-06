import { useState } from "react"

function LoginPage({handlePage}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async (email, password)=>{
        // async() 안에 email, password 값이 없으면
        // loginData 함수가 실행되어야만 사용가능하므로 
        // 위의 코드는 외부의 값인 email, password를 함수 내부에서 직접 불러오기 때문에 외부 환경에 의존적일 수 밖에 없다. (외부에 email,password가 없으면 함수 실행이 안됨) 따라서 이를 파라미터로 하여 인자로 입력받을 수 있도록 바꾸어 사용하면 함수의 재사용성을 높일 수 있다.
        const baseUrl = "https://api.mandarin.weniv.co.kr";
        const reqPath = "/user/login";
        const reqUrl = baseUrl+reqPath
        
        const loginData = {
            "user":{
                "email":email,
                "password":password
            }
        };

        try {
        // 로그인해서 token꺼내기~!
        const res = await fetch(reqUrl,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(loginData)
        });
        const json = await res.json();
        console.log(json);
        // 객체에 user가 없는 경우 == 로그인 실패했을 때
        // if (!json.user) {
        //     return
        // }
        const token = json.user.token;
        console.log(token);
        // 로컬스토리지에 토큰 저장하기
        // 로컬스트리지?
        // key value 값 저장되는 곳
        localStorage.setItem("token",token);
        }
        catch (error) {
            alert("로그인에 실패했습니다!")
        }
    }

    const inputEmail = (e)=>{
        setEmail(e.target.value);
    }
    const inputPassword = (e)=>{
        setPassword(e.target.value);
    }
    const submitLogin = (e)=>{
        e.preventDefault();
        login(email, password)
    }
    return(
        <>
            <h1>로그인</h1>
            <section>
                <h2>이메일, 비밀번호 입력하는곳</h2>
                <form onSubmit={submitLogin}>
                    <input type="text" placeholder="이메일입력" onChange={inputEmail} value={email}/>
                    <input type="text" placeholder="비밀번호입력" onChange={inputPassword} value={password}/>
                    <button>로그인</button>
                    <button type="button" onClick={handlePage}>회원가입</button>
                </form>
            </section>
        </>
    )
}

export default LoginPage