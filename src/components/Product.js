import React from "react";
import {useParams} from 'react-router-dom';

const data={
    product1:{
        title: "아이폰",
        price:" 160만원",
        desc:"비싸고 예뻐요"
    },
    product2:{
        title: "갤럭시",
        price:" 60만원",
        desc:"싸고 예뻐요"
    }
}

function Products(props){
    //Param 객체 리턴하기\ {productname : "product1"}
    const {productname} = useParams();
    const product = data[productname];
    return(
        <div>
            <h2>제폼 제이지</h2>
            <p>제품 페이지 입니다.</p>
            
            {product?<div>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <p>{product.desc}</p>
            </div>: 
            <p>상품이 존재하지 않습니다.</p>}
        </div>
    )
}

export default Products;