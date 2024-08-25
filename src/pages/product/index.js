import PageTop from "./listpage/pagetop";
import Content from "./listpage/content/content";
import Pagenation from "./listpage/pagenation";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { ProductStore } from "../../context/productcontext";

const ProductList = () => {
  //저장소 불러오기
  const { product } = useContext(ProductStore);

  //필터링된데이터 담는 상태
  const [filterProduct, setfilterProduct] = useState([]);

  // 필터링할 카테고리명을 관리할 상태
  const [category, setCategory] = useState("All");

  const [current, setCurrent] = useState(1);
  const itemNumber = 10;

  useEffect(() => {
    const filteredProducts =
      category === "All"
        ? product
        : product.filter(
            (item) =>
              item.category === category || item.subcategory === category
          );

    setfilterProduct(filteredProducts);
    setCurrent(1);
  }, [category, product]);

  const totalPage = Math.ceil(filterProduct.length / itemNumber);

  const currentItem = filterProduct.slice(
    (current - 1) * itemNumber,
    current * itemNumber
  );

  return (
    <>
      <Wrapper>
        <PageTop setCategory={setCategory} />
        <Content
          filterProduct={currentItem}
          setfilterProduct={setfilterProduct}
          setCategory={setCategory}
        />
        <Pagenation
          currentPage={current}
          totalPages={totalPage}
          setCurrentPage={setCurrent}
        />
      </Wrapper>
    </>
  );
};

export default ProductList;

const Wrapper = styled.div`
`;
