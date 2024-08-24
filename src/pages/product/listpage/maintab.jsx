
import React, { useEffect, useState } from "react"
import Container from "../../../components/container"
import styled from "styled-components"
import { flex } from "../../../styled/common"



const Maintab = ({setCategory}) =>{

// 전달받은 셋상태를 변경해 부모가 업데이트하게 한다. 

  const [tabcolor, setTabColor ] = useState(true);

  const handleTabChange = (e) => {
    const innerText = e.target.innerText;


    if(innerText === 'premium'){
      setTabColor(true)
      setCategory(innerText);

    } else{
      setTabColor(false)
      setCategory(innerText);
    }
  }

    //state는 상태 변화가 비동기 , 
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