import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BestProduct } from "../../styled/main";
import BestImage01 from '../../image/img_best_tab01_01.jpg'
import BestImage02 from '../../image/img_best_tab01_02.jpg'
import BestImage03 from '../../image/img_best_tab01_03.jpg'
import BestImage04 from '../../image/img_best_tab01_04.jpg'
import BestImage05 from '../../image/img_best_tab01_05.jpg'
import BestImage06 from '../../image/img_best_tab01_06.jpg'
import BestImage07 from '../../image/img_best_tab01_07.jpg'
import BestImage08 from '../../image/img_best_tab01_08.jpg'
import BestImage09 from '../../image/img_best_tab01_09.jpg'
import BestImage10 from '../../image/img_best_tab01_10.jpg'
import BestImage11 from '../../image/img_best_tab01_11.jpg'
import DragArr1 from '../../image/p_arr1.gif'
import DragArr2 from '../../image/p_arr2.gif'
import DragImage from '../../image/p_cursor.gif'


const ProductListSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productData = [
      {
        href: "/product/product_view.php?idx=248&ccode=005005",
        imgSrc: `${BestImage01}`,
        category: "프리미엄 펜",
        name: "프러스펜 3000 프라임",
      },
      {
        href: "/product/product_view.php?idx=248&ccode=005005",
        imgSrc: `${BestImage02}`,
        category: "프리미엄 펜",
        name: "프러스펜 3000 프라임",
      },
      {
        href: "/product/product_view.php?idx=248&ccode=005005",
        imgSrc: `${BestImage03}`,
        category: "프리미엄 펜",
        name: "프러스펜 3000 프라임",
      },
      {
        href: "/product/product_view.php?idx=248&ccode=005005",
        imgSrc: `${BestImage04}`,
        category: "프리미엄 펜",
        name: "프러스펜 3000 프라임",
      },
      {
        href: "/product/product_view.php?idx=248&ccode=005005",
        imgSrc: `${BestImage05}`,
        category: "프리미엄 펜",
        name: "프러스펜 3000 프라임",
      },
      {
        href: "/product/product_view.php?idx=248&ccode=005005",
        imgSrc: `${BestImage06}`,
        category: "프리미엄 펜",
        name: "프러스펜 3000 프라임",
      },
      {
        href: "/product/product_view.php?idx=248&ccode=005005",
        imgSrc: `${BestImage07}`,
        category: "프리미엄 펜",
        name: "프러스펜 3000 프라임",
      },
      {
        href: "/product/product_view.php?idx=248&ccode=005005",
        imgSrc: `${BestImage08}`,
        category: "프리미엄 펜",
        name: "프러스펜 3000 프라임",
      },
      {
        href: "/product/product_view.php?idx=248&ccode=005005",
        imgSrc: `${BestImage09}`,
        category: "프리미엄 펜",
        name: "프러스펜 3000 프라임",
      },
      {
        href: "/product/product_view.php?idx=248&ccode=005005",
        imgSrc: `${BestImage10}`,
        category: "프리미엄 펜",
        name: "프러스펜 3000 프라임",
      },
      {
        href: "/product/product_view.php?idx=248&ccode=005005",
        imgSrc: `${BestImage11}`,
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
          <span class="arr1"><img src={DragArr1} alt="드래그 화살표 1" /></span>
          <span class="arr2"><img src={DragArr2} alt="드래그 화살표 2" /></span>
          <div class="ds">
            <div><img src={DragImage} alt="드래그 커서" /></div>
            DRAG &amp; SCROLL
          </div>
        </div>
      </div>
    </BestProduct>
  );
};

export default ProductListSection;
