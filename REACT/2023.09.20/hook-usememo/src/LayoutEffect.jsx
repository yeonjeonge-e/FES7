import React, { useState, useEffect } from 'react'

export default function LayoutEffect() {
    const [num, setNum] = useState(0);

    useEffect(() => {
        setNum((prev) => prev + 1); //사실은 엄청 오래걸리고 어려운 로직
    }, [num]);

    return (

        <h1>{num}</h1>

    )
}