import styled from "styled-components";

// Header 전체
export const HeaderContainer = styled.header`
  width: 100%;
  .head {
    position: relative;
  }
`;

// 상단 링크 및 메뉴
export const HeadTop = styled.div`
  background-color: #fff;
  padding: 14px 0;
  border-bottom: 1px solid #eaeaea;
`;

export const Conwrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
`;

export const Lang = styled.div`
  margin-right: 13px;
  width: 86px;
  height: 30px;
  overflow: hidden;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  padding-left: 10px;
  transition: all 0.3s;
`;

export const ThisLang = styled.div`
  a {
    display: block;
    font-size: 11px;
    line-height: 28px;
    color: #000;
  }
  ul {
    display: none;
  }
`;

export const Sns = styled.div`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
  }

  li {
    margin-left: 7px;
  }

  a {
    text-decoration: none;
  }
`;

export const TopMenu = styled.div`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
  }

  li {
    margin-left: 10px;
    padding-left: 12px;
    position: relative;
  }

  li:after {
    content: "";
    display: block;
    width: 1px;
    height: 7px;
    background-color: #9b9a9a;
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -4px;
  }

  li:first-child:after {
    display: none;
  }

  a {
    text-decoration: none;
    font-size: 11px;
    color: #9b9a9a;
    display: block;
  }
`;

// 네비게이션 바
export const Gnb = styled.div`
  background-color: #fff;
  position: relative;
`;

export const Logo = styled.h1`
  margin: 0;
  width: 162px;
  a {
    display: inline-block;
  }
`;

export const Nav = styled.nav`
  width: calc(100% - 162px - 66px);

  ul.depth1 {
    display: flex;
    justify-content: center;
    position: relative;
    position: relative; /* ::before의 기준이 되는 상대적인 위치 */
    margin: 0 auto; /* ul 자체를 중앙에 배치 */
    padding: 0;
  }

  ul.depth1:hover:before {
    content: "";
    width: calc(100% + 450px + 450px);
    height: 425px;
    position: absolute;
    top: 90px; /* 원하는 위치에 맞게 조정 */
    left: -489px;
    background: rgba(255, 255, 255, 0.95);
    border-bottom: 1px solid #e8e8e8;
    border-top: 1px solid #e8e8e8;
    z-index: 5;
  }

  ul.depth1 > li {
    width: calc(100% / 7);
    position: relative;
  }

  ul.depth1 > li > a {
    display: block;
    height: 89px;
    line-height: 89px;
    font-size: 17px;
    color: #303030;
    text-align: center;
    transition: all 0.3s;
    position: relative;
  }

  ul.depth1 > li:hover > a {
    color: #c40f39;
    transition: all 0.3s;
  }

  ul.depth1 > li:hover > a::before {
    content: "";
    width: 100%;
    height: 2px;
    background-color: #c40f39;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  ul.depth2 {
    position: absolute;
    right: 0;
    left: 0;
    padding-top: 10px;
    visibility: hidden;
    opacity: 0;
    z-index: 10;
  }

  ul.depth1:hover ul.depth2 {
    visibility: visible;
    opacity: 1;
  }

  ul.depth2 li {
    border-bottom: 1px solid #e1e1e1;
  }

  ul.depth2 a {
    display: block;
    text-align: center;
    height: 49px;
    line-height: 49px;
    font-size: 14px;
    color: #676767;
    transition: all 0.3s;
  }

  ul.depth2 li:hover a {
    color: #c40f39;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  .btn_all {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    overflow: hidden;
    width: 19px;
    height: 18px;
    justify-content: space-between;
    margin-left: 28px;
  }

  .btn_all div {
    width: 100%;
    height: 2px;
    background: #303030;
    transition: all 0.4s;
  }

  .btn_all > div:nth-child(3) {
  }
  .btn_all.openmenu > div:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }
  .btn_all.openmenu > div:nth-child(2) {
    opacity: 0;
  }
  .btn_all.openmenu > div:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }

  .nav_search {
    display: flex;
    align-items: center;
    margin-left: 20px;

    input {
      padding: 5px;
    }

    a {
      margin-left: 10px;
    }
  }
`;

// 전체 메뉴
export const AllMenu = styled.div`
  position: absolute;
  left: 50%;
  top: 100%;
  z-index: 100;
  width: 100%;
  transform: translateX(-50%);
  /* overflow:hidden; */
  /* background:rgba(255,255,255,0.9); */
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1), 0 1px 0 #ddd inset;

  .allmenu_in {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  /* //240612(e) */
  .menubox {
    width: 16.66%;
    padding: 50px 1%;
    /* 240612(s) */
    height: 480px;
    /* //240612(e) */
    box-shadow: -1px 0px 0px #e9e9e9 inset;
  }
  /* 240612(s) */
  .menubox:last-child {
    box-shadow: none;
  }
  /* //240612(e) */
  .menubox h2 {
    height: 50px;
    margin-bottom: 20px;
    /* 240612(s) */
    font-size: 18px;
    /* //240612(e) */
    color: #303030;
    font-weight: 500;
  }
  .menubox h2 a {
    color: #303030;
  }
  .menubox:nth-child(1) h2 {
    /*background:url(/images/common/all_bg1.png) no-repeat right 8px;*/
  }
  .menubox:nth-child(2) h2 {
    /*background:url(/images/common/all_bg2.png) no-repeat right 2px;*/
  }
  .menubox:nth-child(3) h2 {
    /*background:url(/images/common/all_bg3.png) no-repeat right 5px;*/
  }
  .menubox:nth-child(4) h2 {
    /*background:url(/images/common/all_bg5.png) no-repeat right 5px;*/
  }
  .menubox:nth-child(5) h2 {
    /*background:url(/images/common/all_bg4.png) no-repeat right 5px;*/
  }
  .menubox h2:after {
    display: block;
    content: "";
    width: 19px;
    height: 2px;
    margin: 20px 0;
    background: #c40f39;
  }
  .menubox ul {
  }
  .menubox ul li {
    margin-bottom: 15px;
  }
  .menubox ul li:last-child {
    margin-bottom: 0px;
  }
  .menubox ul li a {
    display: block;
    /* 240612(s) */
    font-size: 16px;
    /* //240612(e) */
    color: #6e6e6e;
    font-weight: 400;
  }
  .menubox ul li a:hover {
    /* 240612(s) */
    font-size: 16px;
    /* //240612(e) */
    color: #c40f39;
    font-weight: 400;
  }
`;

export const FooterContainer = styled.div`
  background: #111;
  padding: 60px 0 65px;

  .footer {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
  }
`;

export const FootTop = styled.div`
  width: 100%;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  :after {
    display: block;
    content: "";
    clear: both;
  }
  h1 {
    float: left;
  }
  .fm {
    overflow: hidden;
    float: right;
  }
  .fm li {
    float: left;
    padding-right: 11px;
    margin-right: 10px;
    background: url(/images/common/fm_bar.gif) no-repeat right center;
  }
  .fm li:last-child {
    margin: 0;
    padding: 0;
    background: 0;
  }
  .fm li a {
    color: rgba(255, 255, 255, 0.5);
  }
  .fm li a.privacy_pop {
    color: #fff;
    font-size: 14px;
  }
`;

export const FootBottom = styled.div`
  width: 100%;
  padding-top: 25px;
  :after {
    display: block;
    content: "";
    clear: both;
  }
  .tit {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    color: #fff;
    margin-bottom: 10px;
  }

  .info {
    float: left;
    margin-right: 55px;
  }
  .info address {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.3);
    font-weight: 300;
  }
  .info address span {
    display: inline-block;
    padding: 0 10px;
    margin-bottom: 3px;
  }
  .info .copy {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.3);
    font-weight: 300;
  }
  .cc {
    float: left;
  }
  .cc_tel {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    color: rgba(255, 255, 255, 0.5);
  }
  .foot_btm .fam_site {
    float: right;
    position: relative;
    width: 242px;
    height: 34px;
    text-align: left;
    border: 1px solid rgba(255, 255, 255, 0.3);
    /* 240612(s) */
    border-radius: 5px;
    /* //240612(e) */
  }
  .foot_btm .fam_site > .btn_site {
    display: block;
    padding: 0 13px;
    height: 34px;
    line-height: 34px;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.4);
    /* 240612(s) */
    /* background:url(https://www.monami.com/images/common/family_arr.png) no-repeat 95% center;*/
    position: relative;
    /* 240612(e) */
  }
  /* 240612(s) */
  .foot_btm .fam_site > .btn_site::after {
    content: "";
    display: block;
    width: 9px;
    height: 5px;
    background: url(https://www.monami.com/images/common/family_arr.png)
      no-repeat 95% center;
    background-size: contain;
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%) rotate(180deg);
  }
  .foot_btm .fam_site.on {
    border-radius: unset;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .foot_btm .fam_site.on a::after {
    transform: translateY(-50%) rotate(0deg);
  }
  /* 240612(e) */
  .foot_btm .fam_site ul {
    background: rgba(0, 0, 0, 1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-bottom: 0;
    position: absolute;
    left: -1px;
    bottom: 100%;
    width: 242px;
    /* 240612(s) */
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    /* //240612(e) */
  }
  .foot_btm .fam_site ul li {
  }
  .foot_btm .fam_site ul li a {
    display: block;
    padding: 0 13px;
    height: 34px;
    line-height: 34px;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.6);
  }

  .foot_btm .btn_kakao {
    display: inline-block;
    width: 155px;
    height: 32px;
    line-height: 31px;
    margin-top: 15px;
    color: #dfdfdf;
    text-align: center;
    border: 1px solid #878787;
    background: #4a4a4a;
    /* 240612(s) */
    border-radius: 6px;
    /* //240612(e) */
    font-size: 13.5px;
  }
  .foot_btm .btn_kakao:after {
    display: inline-block;
    content: "";
    width: 9px;
    height: 5px;
    margin: 0 0 2px 5px;
    background: url(https://www.monami.com/images/common/family_arr.png) no-repeat;
    background-size: cover;
    transform: rotate(-450deg);
  }

  .fam_site {
    float: right;
    position: relative;
    width: 242px;
    height: 34px;
    text-align: left;
    border: 1px solid rgba(255, 255, 255, 0.3);
    /* 240612(s) */
    border-radius: 5px;
    /* //240612(e) */
  }
  .fam_site > a {
    display: block;
    padding: 0 13px;
    height: 34px;
    line-height: 34px;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.4);
    /* 240612(s) */
    /* background:url(https://www.monami.com/images/common/family_arr.png) no-repeat 95% center;*/
    position: relative;
    /* 240612(e) */
  }
  /* 240612(s) */
  .fam_site > a::after {
    content: "";
    display: block;
    width: 9px;
    height: 5px;
    background: url(https://www.monami.com/images/common/family_arr.png) no-repeat 95% center;
    background-size: contain;
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%) rotate(180deg);
  }
`;
