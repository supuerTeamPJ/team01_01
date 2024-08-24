
import React from "react"
import styled from "styled-components";
import {flexCenter } from "../../../../styled/common";

const Subtab = ({ setCategory, filterProduct,}) => {

  

  const handleSubFilter = (e) => {
    const innerSubtext = e.target.innerText
    setCategory(innerSubtext); // 선택된 서브카테고리를 부모 컴포넌트에 전달

  };

  // 고유한 서브카테고리를 가져오기 위해 중복을 제거한 배열을 만듦
  const uniqueSubcategories = Array.from(new Set(filterProduct.map(item => item.subcategory)));

  return (
    <Wraaper>
      {
              uniqueSubcategories.map((item, index) => (
                <TabItem
                  key={index}
                  onClick={handleSubFilter}
                >
                  {item}
                </TabItem>
              ))
      }
      
    </Wraaper>
  );
};

export default Subtab;

const Wraaper = styled.div`
  ${flexCenter}
  width: auto;
`

const TabItem = styled.a`
  width: 130px;
  height: 34px;
  line-height: 34px;
  border-bottom: 1px solid grey;
  color: black;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  margin: 0 10px;
  

`
