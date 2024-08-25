
import React  from "react"
import styled from "styled-components";
import {flexCenter } from "../../../../styled/common";


const Subtab = ({ setCategory, filterProduct,}) => {



  const handleSubFilter = (e) => {
    const innerSubtext = e.target.innerText
    setCategory(innerSubtext); 

  };


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
