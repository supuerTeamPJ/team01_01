
import React from "react"
import PageTop from "./listpage/pagetop"
import Maintab from "./listpage/maintab"
import Content from "./listpage/content/content"
import Pagenation from "./listpage/pagenation"
import styled from "styled-components"

const ProductList = () =>{
  return(
    <>
      <Wrapper>
        <PageTop/>
        <Maintab/>
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