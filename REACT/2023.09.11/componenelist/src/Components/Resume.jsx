import React, { useState } from 'react';

function Resume (props) {
    // let like = 0;

    // console.log("useState : ", useState(0));
    let [like, setLike] = useState(0);
    let [text, setText] = useState(" Like");

    function clickLike() {
        // like += 1;
        setLike(like + 1);
        // console.log(like);

        if (text === ""){
            setText(" Like");
        } else {
            setText("");
        }
    }

    return (
        <>
            <div style={{width:"fit-content", border:"1px solid black"}}>
                <h1>{props.name} 자기소개서</h1>
                <h2>{props.hello}</h2>
                <h3>취미 : {props.hobby}</h3>
                <h3>좋아하는 음식 : {props.food}</h3>
                <h3>좋아하는 색 : <span style={{color:'blue', fontWeight:'bolder'}}>{props.color}</span></h3>
                <button onClick={clickLike}>like <span>{like}</span></button>
                <span>{text}</span>
            </div>
        </>
    )
}

export default Resume;