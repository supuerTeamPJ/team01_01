
import PageTop from "./listpage/pagetop"
import Content from "./listpage/content/content"
import Pagenation from "./listpage/pagenation"
import styled from "styled-components"
import { useContext, useEffect } from "react"
import { ProductStore } from "../../context/productcontext"

const ProductList = () =>{
    //저장소 불러오기 
    const {product} = useContext(ProductStore);
    
    useEffect(() => {
      console.log(product);
    })


  // 상대를 두개 만들기 / 펜일때 와 펜슬일때를담아준다. 
  // set상태를 페이지탑에게 넘겨준다. 
  // 상태의 값이 펜일경우 펜의 데이터를 불러와 , 컨텐트로 전달하며, 
  // 펜슬일경우 펜슬을 불러와 컨텐트로 전달한다. 

  return(
    <>
      <Wrapper>
        <PageTop/>
        <Content/>
        <Pagenation/>
      </Wrapper>
    </>
  )
}

export default ProductList



const Wrapper = styled.div`
  padding-top: 150px;
`