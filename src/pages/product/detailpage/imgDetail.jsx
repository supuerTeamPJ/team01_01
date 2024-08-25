
import React from "react"
import styled from "styled-components";
import { flex } from "../../../styled/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";


const ImgDeatil = ({productDetail}) =>{


  const { imgURL, subimg = {} } = productDetail || {};
  const subimgArray = Object.values(subimg);

  return(
    <>
      <div>
        <MainImg>
          <img src={imgURL} alt="이미지" />
        </MainImg>
        <SlideImg>
          <PreBtn> 
          <FontAwesomeIcon icon={faArrowLeft} />
          </PreBtn>
          {subimgArray.length > 0 ? (
          subimgArray.map((item, index) => (
            <SubImg key={index}>
              <img src={item} alt='' />
            </SubImg>
          ))
        ) : (
          <SubImg></SubImg>
        )}
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
    display: block;
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
  width: 69px;
  height: 105px;

  img{
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`
const NextBtn = styled.button`
  width: 70px;
  height: 105px;
  border: 1px solid grey;
`