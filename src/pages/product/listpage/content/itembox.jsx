import React from "react";
import styled from "styled-components";
import itemimg from '/image/img_product_view_16_2.jpg'


const ItemBox = () => {
  // 전달받은 값을토대로 구현한다.
  return (
    <>
      <Box>
        <ImgBox>
          <img src={itemimg} alt="" />
          <Overlay></Overlay>
          <Icon>+</Icon>
        </ImgBox>
        <TextBox>
            <span>유성볼펜</span>
            153 클립 파스텔
          </TextBox>
      </Box>
    </>
  );
};

export default ItemBox;

const Box = styled.div`
  width: 270px;
  height: 490px;
  border: 1px solid grey;
  margin-top: 40px;
  cursor: pointer;
`;

const Overlay = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
  transition: opacity 3s ease;
`
const Icon = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 72px;
  height: 72px;
  background-color: white;
  color: #c40f39;
  font-size: 60px;
  font-weight: 10;
  text-align: center;
  line-height: 60px;

`


const ImgBox = styled.div`
  width: auto;
  height: 390px;
  position: relative;
  

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover ${Overlay} {
    display: block;
  }

  &:hover ${Icon} {
    display: block;
  }
`;



const TextBox = styled.div`
  span{
    display: block;
    margin-bottom: 8px;
    font-size: 12px;
    color: grey;
  }
  padding: 30px;
  font-weight: 600;
`