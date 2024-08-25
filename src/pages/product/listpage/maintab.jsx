
import React, { useEffect, useState } from "react"
import Container from "../../../components/container"
import styled from "styled-components"
import { flex } from "../../../styled/common"
import {  useMatch, useNavigate } from "react-router-dom";



const Maintab = ({setCategory}) =>{

  const isDetailPage = useMatch("/product/:id");
  
  const [tabcolor, setTabColor ] = useState(true);
  const navigate = useNavigate();


  const handleTabChange = (e) => {
    
    if(!isDetailPage){
      const innerText = e.target.innerText;
      if(innerText === 'premium'){
        setTabColor(true)
        setCategory(innerText);
  
      } else{
        setTabColor(false)
        setCategory(innerText);
      }
    }else{
      navigate("/product");
    }
  }

  useEffect(() => {
    console.log(tabcolor)
  }, [tabcolor])

  return(
    <>
      <Container>
        <Flexbox>
          <TabBox 
          textColor = {tabcolor ? '#fff': '#333'}
          color={tabcolor ? '#c40f39' : '#fff'} 
          onClick={(e)=> handleTabChange(e)}>premium</TabBox>

          <TabBox 
          textColor = {tabcolor ? '#333': '#fff'}
          color={tabcolor ? '#fff' : '#c40f39'}
          onClick={(e) => handleTabChange(e)}>pen</TabBox>
        </Flexbox>
      </Container>
    </>
  )
}

export default Maintab


const TabBox = styled.div`
    width: 700px;
    height: 58px;
    border: 1px solid grey;
    text-align: center;
    line-height: 58px;
    cursor: pointer;
    background-color: ${ ({color}) => color};
    color: ${({textColor})=> textColor};
    transition: 0.2s;
`

const Flexbox = styled.div`
  ${flex};
`