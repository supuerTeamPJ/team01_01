
import PageTop from "./listpage/pagetop"
import Content from "./listpage/content/content"
import Pagenation from "./listpage/pagenation"
import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import { ProductStore } from "../../context/productcontext"

const ProductList = () =>{
    //저장소 불러오기 
    const {product} = useContext(ProductStore);

     //필터링된데이터 담는 상태 
  const [filterProduct, setfilterProduct] = useState([]);
  const [selectSub, setSelctSub ] = useState(true);

    // 필터링할 카테고리명을 관리할 상태 
    const [category, setCategory] = useState('All');

    
    useEffect(() => {
      const filteredProducts = category === 'All'
          ? product
          : product.filter(item => 
              item.category === category || 
              item.subcategory === category
          );

      setfilterProduct(filteredProducts);
  }, [category, product]);



  return(
    <>
      <Wrapper>
        <PageTop setCategory={setCategory}/>
        <Content filterProduct = {filterProduct} setfilterProduct={setfilterProduct} setCategory={setCategory} />
        <Pagenation/>
      </Wrapper>
    </>
  )
}

export default ProductList



const Wrapper = styled.div`
  padding-top: 150px;
`