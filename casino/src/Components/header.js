import React from "react";
import "../Styles/header.css";

// header, 네비게이션,, 로그인/회원가입
function Header() {
  return (
    <div className = "Header_wrap">
      <div className="nav">      
        <ul className="nav_ul">
          <li className="nav_li"><a href="/HOME">홈</a></li>
          <li className="nav_li"><a href="/INTRODUCE">소개</a></li>
          <li className="nav_li"><a href="/GAMES">게임</a></li>
          <li className="nav_li"><a href="/VIP">VIP</a></li>
          <li className="nav_li"><a href="/RANKING">랭킹</a></li>
          <li className="nav_li"><a href="/SHOP">상점</a></li>
        </ul>
      </div>

      <div className="login">
        <ul className="login_ul">
            <li className="login_li"><a href="/SIGNIN">회원가입</a></li>
            <li className="login_li"><a href="/LOGIN">로그인</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
