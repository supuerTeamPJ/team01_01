import styled from "styled-components";


export const MainConwrap = styled.div`
  position: relative;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;

export const MainVisual = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-bottom: 31.85%;

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .textarea {
    position: absolute;
    left: 50%;
    top: 0;
    width: 1400px;
    height: 100%;
    margin-left: -700px;
    z-index: 4;
  }

  .textarea h3 {
    font-size: 50px;
    color: #fff;
    line-height: 120%;
    font-weight: 200;
    margin: 0 0 0 120px;
  }
  .textarea h3:before {
    display: block;
    content: "";
    width: 80px;
    height: 1px;
    background: #fff;
    margin: 157px 0 10px 0;
  }
  .textarea p {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.8);
    line-height: 140%;
    font-weight: 300;
    margin: 30px 0 0 120px;
  }
`;

export const NewArrival = styled.div`
  padding: 75px 0 90px;
  background-color: #fff;
  .tit {
    position: absolute;
    left: 0;
    top: 0;
  }
  .tit h2 {
    height: 90px;
    font-family: "Montserrat", sans-serif;
    font-size: 32px;
    font-weight: 600;
    letter-spacing: 2px;
    color: #000;
    line-height: 120%;
  }
  .tit h2:after {
    content: "";
    display: block;
    width: 26px;
    height: 4px;
    margin: 10px 0 0;
    background: #c40f39;
  }
  .tit p {
    font-size: 13px;
    color: #6e6e6e;
    margin-top: 10px;
  }
  .toparea {
    overflow: hidden;
    margin: 13px 0 22px;
  }
  .toparea .box {
    float: left;
  }
  .toparea .box:nth-child(1) {
    margin: 155px 22px 0 0;
  }

  /* 240612(s) */
  .toparea .box a img,
  .btmarea .box a img {
    border-radius: 20px;
  }
  /* //240612(e) */
  .btmarea {
    overflow: hidden;
  }
  .btmarea .box {
    float: left;
  }
  .btmarea .box:nth-child(1),
  .btmarea .box:nth-child(2) {
    margin: 0 22px 0 0;
  }

  .box {
    position: relative;
  }
  .box .ondiv {
    display: table;
    position: absolute;
    left: 15px;
    top: 15px;
    background: #c40f39;
    text-align: center;
    opacity: 0;
    transition: all 0.6s;
    /* 240612(s) */
    border-radius: 24px;
    /* //240612(e) */
  }
  .box:hover .ondiv {
    opacity: 1;
    transition: all 0.6s;
  }
  .box .ondiv .align {
    display: table-cell;
    vertical-align: middle;
  }
  .box .ondiv .cate {
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    letter-spacing: 3px;
    color: #eec7d0;
  }
  .box .ondiv .name {
    font-size: 21px;
    color: #fff;
  }
  .box .ondiv .plus {
    position: relative;
    width: 30px;
    height: 30px;
    margin: 45px auto 0;
    transform: rotateZ(180deg);
    transition: all 0.4s 0.2s;
  }
  .box:hover .ondiv .plus {
    transform: rotateZ(0deg);
    transition: all 0.4s 0.2s;
  }
  .box .ondiv .plus div:nth-child(1) {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.6);
  }
  .box .ondiv .plus div:nth-child(2) {
    position: absolute;
    left: 50%;
    top: 0;
    width: 1px;
    height: 100%;
    background: rgba(255, 255, 255, 0.6);
  }

  .toparea .box:nth-child(1) .ondiv {
    width: 362px;
    height: 175px;
  }
  .toparea .box:nth-child(2) .ondiv {
    width: 756px;
    height: 330px;
  }
  .btmarea .box:nth-child(1) .ondiv {
    width: 362px;
    height: 262px;
  }
  .btmarea .box:nth-child(2) .ondiv {
    width: 420px;
    height: 409px;
  }
  .btmarea .box:nth-child(3) .ondiv {
    width: 284px;
    height: 262px;
  }
`;

export const BestProduct = styled.div`
  overflow: hidden;
  padding: 70px 0;
  background: #eee;
  text-align: center;

  .tit {
    font-family: "Montserrat", sans-serif;
    font-size: 32px;
    font-weight: 600;
    letter-spacing: 2px;
    color: #000;
    line-height: 120%;
  }
  .tit:after {
    content: "";
    display: block;
    width: 26px;
    height: 4px;
    margin: 10px auto;
    background: #c40f39;
  }
  .p_tabs {
    margin: 40px 0;
  }
  .p_tabs ul {
  }
  .p_tabs ul li {
    display: inline-block;
    margin: 0 2px;
  }
  .p_tabs ul li a {
    display: block;
    width: 153px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    font-size: 14px;
    color: #898989;
    border: 2px solid #bcbcbc;
    border-radius: 50px;
    transition: all ease-in-out 0.3s;
  }
  .p_tabs ul li:hover a {
    border: 2px solid #c40f39;
    color: #c40f39;
  }
  .p_tabs ul li.on a {
    border: 2px solid #c40f39;
    color: #c40f39;
  }

  .product-item {
    padding: 10px;
    box-sizing: border-box;
  }

  .product-item img {
    width: 100%;
    height: auto;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    max-height: 390px;
  }

  .p_lists .info {
    overflow: hidden;
    background: #fff;
    text-align: left;
    padding: 0 30px 20px 30px;
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    width: 100%;
    height: 115px;
    box-sizing: border-box;
  }
  .p_lists .info .cate {
    margin: 33px 0 5px;
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    color: #b3b3b3;
  }
  .p_lists .info .name {
    font-family: "Montserrat";
    font-size: 15px;
    color: #000;
    font-weight: 600;
  }
  .p_info {
    margin-top: 60px;
    width: 100%;
    border-top: 1px dotted #ccc;
  }
  .p_info .wrap {
    width: 850px;
    margin: 0 auto;
    position: relative;
  }
  .p_info .wrap .arr1 {
    position: absolute;
    left: 0;
    top: 14px;
  }
  .p_info .wrap .arr2 {
    position: absolute;
    right: 0;
    top: 14px;
  }
  .p_info .wrap .ds {
    width: 100px;
    margin: 0 auto;
    margin-top: -20px;
    background: #eee;
    font-size: 12px;
  }
  .p_info .wrap .ds div {
    margin-bottom: 25px;
  }
`;

export const VideoWrap = styled.div`
  display: table;
  width: 100%;
  height: 570px;
  text-align: center;
  background: url(/images/main/bg_video.jpg) no-repeat center;
  background-attachment: fixed;
  /* Video Test */
  .bgvid {
    width: 100% !important;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    background-size: cover;
    margin: 0 0 0 0;
  }
  .bgvid_2 {
    width: 1024px !important;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    background-size: cover;
    margin: 0 0 0 0;
  }
`;

export const BbsWrap = styled.div`
  background: #f8f8f8;
  border-bottom: 1px solid #ddd;
  

  .conwrap {
    display: flex;
    justify-content: flex-end;
  }

  .news {
    padding-right: 66px;
    padding-top: 45px;
    border-right: 1px solid #ddd;
    
  }
  .news .tit {
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
  }
  .news .tit h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #000;
    line-height: 120%;
    position: relative;
  }
  .news .tit a {
    font-size: 11px;
    height: 14px;
    color: #3d3e38;
    letter-spacing: 1px;
    border-bottom: 1px solid #3d3e38;
  }
  .news .tit h2:after {
    content: "";
    display: block;
    width: 26px;
    height: 4px;
    margin: 5px 0 0;
    background: #c40f39;
  }
  .news .news_lists {
  }
  .news .news_lists li {
    position: relative;
  }
  .news .news_lists li a {
    color: #555;
    font-size: 13.5px
  }
  .news .news_lists li .date {
    position: absolute;
    right: 0;
    top: 0;
    color: #888;
    font-size: 13.5px
  }

  .news .news_lists li.first {
    overflow: hidden;
    border-bottom: 1px solid #bbb;
    padding: 10px 0 20px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
  }
  .news .news_lists li.first .thum {
  }
  .news .news_lists li.first .txt {
    width: 456px;
    margin-top: 5px;
    padding-left: 20px;
    line-height: 1;
  }
  .news .news_lists li.first .txt .sbj {
    font-size: 21px;
    color: #000;
    margin-bottom: 5px;
    line-height: 1;
  }
  .news .news_lists li.first .txt p {
    font-size: 14px;
    color: #555;
    margin-bottom: 15px;
    word-break: keep-all;
    line-height: 1.2;
  }
  .news .news_lists li.first .date {
    position: static;
    float: right;
    color: #888;
  }

  .inquiry {
    width: 349px;
    height: 355px;
    background: url(https://www.monami.com/images/main/inquiry_bg.jpg) no-repeat;
    border-right: 1px solid #ddd;
    text-align: center;
  }
  .inquiry .tit {
    margin: 65px 0 0;
    padding-top: 75px;
    background: url(https://www.monami.com/images/main/inquiry_tit_bg.png) no-repeat center 2px;
  }
  .inquiry .tit h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #000;
    line-height: 120%;
  }
  .inquiry .tit:after {
    content: "";
    display: block;
    width: 26px;
    height: 4px;
    margin: 10px auto;
    background: #c40f39;
  }
  .inquiry p {
    color: #6a6a6a;
    line-height: 160%;
    margin-bottom: 45px;
  }
  .inquiry a {
    display: block;
    width: 167px;
    height: 35px;
    margin: 0 auto;
    text-align: center;
    line-height: 35px;
    font-family: "Montserrat", sans-serif;
    color: #c40f39;
    font-weight: 500;
    border: 2px solid #c40f39;
    transition: all 0.6s;
    border-radius: 50px;
  }
  .inquiry a:hover {
    color: #fff;
    border: 2px solid #c40f39;
    background: #c40f39;
    transition: all 0.6s;
  }
  .shop {
    width: 349px;
    height: 355px;
    background: url(https://www.monami.com/images/main/shop_bg.png) no-repeat;
    border-right: 1px solid #ddd;
    text-align: center;
  }
  .shop .tit {
    margin: 65px 0 0;
    padding-top: 75px;
    background: url(https://www.monami.com/images/main/shop_tit_bg.png) no-repeat center 0px;
  }
  .shop .tit h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #000;
    line-height: 120%;
  }
  .shop .tit:after {
    content: "";
    display: block;
    width: 26px;
    height: 4px;
    margin: 10px auto;
    background: #c40f39;
  }
  .shop p {
    color: #6a6a6a;
    line-height: 160%;
    margin-bottom: 45px;
  }
  .shop a {
    display: block;
    width: 167px;
    height: 35px;
    margin: 0 auto;
    text-align: center;
    line-height: 35px;
    font-family: "Montserrat", sans-serif;
    color: #c40f39;
    font-weight: 500;
    border: 2px solid #c40f39;
    transition: all 0.6s;
    /* 240612(s) */
    border-radius: 50px;
    /* //240612(e) */
  }
  .shop a:hover {
    color: #fff;
    border: 2px solid #c40f39;
    background: #c40f39;
    transition: all 0.6s;
  }
`;
