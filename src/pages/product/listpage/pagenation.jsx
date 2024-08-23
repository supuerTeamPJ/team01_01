


import React from "react"
import styled from "styled-components"
import { flexCenter } from "../../../styled/common"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";


const Pagenation = () =>{
  return(
    <>
      <PageNationDiv>
        <PreButton> 
          <FontAwesomeIcon icon={faArrowLeft} />
        </PreButton>
        <NumButton>1</NumButton>
        <NextButton>
          <FontAwesomeIcon icon={faArrowRight} />
        </NextButton>
      </PageNationDiv>
    </>
  )
}

export default Pagenation


const PageNationDiv = styled.div`
  margin-top: 80px;
  ${flexCenter};
  margin-bottom: 200px;
`
const PreButton = styled.button`
  width: 38px;
  height: 38px;
  border: 1px solid grey;
  background: transparent;
`
const NumButton = styled.button`
    width: 38px;
  height: 38px;
  border: 1px solid grey;
  background: transparent;
  margin: 0 15px;
`

const NextButton = styled.button`
  width: 38px;
  height: 38px;
  border: 1px solid grey;
  background: transparent;
`