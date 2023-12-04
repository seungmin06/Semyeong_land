import React from "react";
import "../Styles/footer.css";

// footer(카테고리 선택)
function Footer() {
  return (
    <div className = "Footer_wrap">
      <div className="footer_footer">      
        <ul className="footer_ul">
          <li className="footer_li"><a href="/HOME">새로운</a></li>
          <li className="footer_li"><a href="/INTRODUCE">인기있는</a></li>
          <li className="footer_li"><a href="/GAMES">카드게임</a></li>
          <li className="footer_li"><a href="/VIP">운빨게임</a></li>
          <li className="footer_li"><a href="/RANKING">피지컬게임</a></li>
          <li className="footer_li"><a href="/SHOP">PVP</a></li>
          <li className="footer_li"><a href="/SHOP">PVE</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
