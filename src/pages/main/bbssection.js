import React from "react";
import { 
  BbsWrap,
  MainConwrap
} from "../../styled/main";


const NewsItem = ({ href, imgSrc, title, description, date }) => (
  <li className="first">
    <div className="thum">
      <a href={href}><img src={imgSrc} alt={title} width="164" height="116" /></a>
    </div>
    <div className="txt">
      <a href={href}>
        <div className="sbj">{title}</div>
        <p>{description}</p>
        <span className="date">{date}</span>
      </a>
    </div>
  </li>
);

const NewsLinkItem = ({ href, title, date }) => (
  <li>
    <a href={href}>{title}</a>
    <span className="date">{date}</span>
  </li>
);

const BbsSection = () => {
  return (
    <BbsWrap>
      <MainConwrap className="conwrap">
        <div className="news">
          <div className="tit">
            <h2>MONAMI NEWS</h2>
            <a href="/board/board.php?bo_table=bodo">MORE</a>
          </div>
          <ul className="news_lists">
            <NewsItem
              href="/board/board.php?bo_table=bodo&idx=180"
              imgSrc="https://dfrkkcv2hg1jc.cloudfront.net/data/board/bodo/b_file_1722840818cni1034hd4.png"
              title="모나미, 라이엇 게임즈와 컬래버 신제품 출시"
              description="LoL, TFT 게임 속 캐릭터를 볼펜으로 만나보세요!모나미, 라이엇 게임즈와 컬래버 신제품 출시- 컬래버레이션 전략.."
              date="2024-08-05"
            />
            <NewsLinkItem
              href="/board/board.php?bo_table=bodo&idx=179"
              title="-모나미, 브랜드 서포터즈 ‘펜클럽(Pen Club)’ 7기 모집"
              date="2024-07-22"
            />
            <NewsLinkItem
              href="/board/board.php?bo_table=bodo&idx=178"
              title="-모나미, 프러스펜 수채화 드로잉 원데이클래스 개최!"
              date="2024-06-27"
            />
            <NewsLinkItem
              href="/board/board.php?bo_table=bodo&idx=173"
              title="-모나미, 가정의 달 맞이 신제품 프로모션 진행..."
              date="2024-05-16"
            />
          </ul>
        </div>
        <div className="inquiry">
          <div className="tit">
            <h2>INQUIRY</h2>
          </div>
          <p>언제나 소중한 의견에 귀 기울이겠습니다.<br />궁금한 사항은 문의하세요.</p>
          <a href="/customer/inquiry.php">INQUIRY NOW</a>
        </div>
        <div className="shop">
          <div className="tit">
            <h2>모나미 네이버 브랜드스토어</h2>
          </div>
          <p>모나미 공식 쇼핑몰입니다.<br />공식몰만의 다양한 혜택을 만나보세요.</p>
          <a href="https://brand.naver.com/monami" target="_blank" rel="noopener noreferrer">BUY NOW</a>
        </div>
      </MainConwrap>
    </BbsWrap>
  );
};

export default BbsSection;