import React from "react";
import {useLocation, useSearchParams} from 'react-router-dom'

function View(props){
    const location =  useLocation();
    console.log(location)
    const [serchparams, setSerchparams] = useSearchParams();
    console.log(serchparams.get("name"));
    console.log(serchparams.get("color"));

    //변수에 userserchparams 값 담기
    const name= serchparams.get("name");
    const color= serchparams.get("color");
    return(
        <div>
            <h2>상세보기</h2>
            <p>상세보기 페이지 입니다.</p>
            <p>name 값은: {name}</p>
            <p>color 값은: {color}</p>
        </div>
    )
}

export default View;