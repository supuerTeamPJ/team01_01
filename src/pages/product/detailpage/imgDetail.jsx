
import React from "react"
import mainImg from '/image/img_best_tab01_07.jpg'
import styled from "styled-components";
import { flex } from "../../../styled/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";


const ImgDeatil = () =>{
  return(
    <>
      <div>
        <MainImg>
          <img src={mainImg} alt="" />
        </MainImg>
        <SlideImg>
          <PreBtn> 
          <FontAwesomeIcon icon={faArrowLeft} />
          </PreBtn>
          <SubImg></SubImg>
          <NextBtn>
          <FontAwesomeIcon icon={faArrowRight} />
          </NextBtn>
        </SlideImg>
      </div>
    </>
  )
}

export default ImgDeatil;

const MainImg = styled.div`
  width: 447px;
  height: 657px;
  border: 1px solid grey;
  margin-bottom: 15px;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const SlideImg = styled.div`
  width: 447px;
  ${flex};
`
const PreBtn = styled.button`
  width: 70px;
  height: 105px;
  border: 1px solid grey;
`
const SubImg = styled.div`
  border: 1px solid grey;  
  width: 70px;
  height: 105px;
`
const NextBtn = styled.button`
  width: 70px;
  height: 105px;
  border: 1px solid grey;
`