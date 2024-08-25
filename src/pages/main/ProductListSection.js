import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BestProduct } from "../../styled/main";


const ProductListSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productData = [
      {
        href: "/product/product_view.php?idx=248&ccode=005005",
        imgSrc: "/image/img_best_tab01_01.jpg",
        category: "프리미엄 펜",
        name: "프러스펜 3000 프라임",
      },
      {
        href: "/product/product_view.php?idx=248&ccode=005005",
        imgSrc: "/image/img_best_tab01_02.jpg",
        category: "프리미엄 펜",
        name: "프러스펜 3000 프라임",
      },
      {
        href: "/product/product_view.php?idx=248&ccode=005005",
        imgSrc: "/image/img_best_tab01_03.jpg",
        category: "프리미엄 펜",
        name: "프러스펜 3000 프라임",
      },
      {
        href: "/product/product_view.php?idx=248&ccode=005005",
        imgSrc: "/image/img_best_tab01_04.jpg",
        category: "프리미엄 펜",
        name: "프러스펜 3000 프라임",
      },
      {
        href: "/product/product_view.php?idx=248&ccode=005005",
        imgSrc: "/image/img_best_tab01_05.jpg",
        category: "프리미엄 펜",
        name: "프러스펜 3000 프라임",
      },
      {
        href: "/product/product_view.php?idx=248&ccode=005005",
        imgSrc: "/image/img_best_tab01_06.jpg",
        category: "프리미엄 펜",
        name: "프러스펜 3000 프라임",
      },
      {
        href: "/product/product_view.php?idx=248&ccode=005005",
        imgSrc: "/image/img_best_tab01_07.jpg",
        category: "프리미엄 펜",
        name: "프러스펜 3000 프라임",
      },
      {
        href: "/product/product_view.php?idx=248&ccode=005005",
        imgSrc: "/image/img_best_tab01_08.jpg",
        category: "프리미엄 펜",
        name: "프러스펜 3000 프라임",
      },
      {
        href: "/product/product_view.php?idx=248&ccode=005005",
        imgSrc: "/image/img_best_tab01_09.jpg",
        category: "프리미엄 펜",
        name: "프러스펜 3000 프라임",
      },
      {
        href: "/product/product_view.php?idx=248&ccode=005005",
        imgSrc: "/image/img_best_tab01_10.jpg",
        category: "프리미엄 펜",
        name: "프러스펜 3000 프라임",
      },
      {
        href: "/product/product_view.php?idx=248&ccode=005005",
        imgSrc: "/image/img_best_tab01_11.jpg",
        category: "프리미엄 펜",
        name: "프러스펜 3000 프라임",
      },
      // 다른 제품 데이터 추가
    ];
    setProducts(productData);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <BestProduct>
      <div className="tit">BEST PRODUCT</div>
      <p className="tit_btm">언제 어디서나 생활 속에 함께하는 모나미</p>
      <div className="p_tabs">
        <ul>
          <li className="on"><a href="/index.php?ccode=005#our_product">프리미엄 펜</a></li>
          <li><a href="/index.php?ccode=003#our_product">펜·펜슬</a></li>
          <li><a href="/index.php?ccode=004#our_product">마카·컬러링</a></li>
          <li><a href="/index.php?ccode=002#our_product">노트·사무용품</a></li>
        </ul>
      </div>
      <div className="p_lists">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="product-item">
              <a href={product.href}>
                <div className="thum">
                  <img src={product.imgSrc} alt={product.name} />
                </div>
                <div className="info">
                  <div className="cate">{product.category}</div>
                  <div className="name">{product.name}</div>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
      <div class="p_info">
        <div class="wrap">
          <span class="arr1"><img src="/image/p_arr1.gif" alt="드래그 화살표 1" /></span>
          <span class="arr2"><img src="/image/p_arr2.gif" alt="드래그 화살표 2" /></span>
          <div class="ds">
            <div><img src="/image/p_cursor.gif" alt="드래그 커서" /></div>
            DRAG &amp; SCROLL
          </div>
        </div>
      </div>
    </BestProduct>
  );
};

export default ProductListSection;
