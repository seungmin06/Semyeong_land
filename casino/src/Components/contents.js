import React from "react";

import { useState, useRef } from "react";
import "../Styles/contents.css";

// contents(게임 선택)
function Contents() {
  const contents_card_DATA = [
    {
      title: "카드",
      ex: "카드게임이다 ㅋㅋ",
    },
    {
      title: "주식",
      ex: "주식임 ㅎㅎ ㅋㅋ",
    },
    {
      title: "세명의마블",
      ex: "카드게임이다 ㅋㅋ",
    },
    {
      title: "세명고수",
      ex: "카드게임이다 ㅋㅋ",
    },
    {
      title: "플래피버드",
      ex: "카드게임이다 ㅋㅋ",
    },
    {
      title: "룰렛",
      ex: "카드게임이다 ㅋㅋ",
    },
    {
      title: "오목",
      ex: "카드게임이다 ㅋㅋ",
    },
  ];

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0); // 스크롤 위치 저장용 상태

  const contentsBoxRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(contentsBoxRef.current.scrollLeft); // 마우스 다운 시 스크롤 위치 저장
    cancelAnimationFrame(rafRef.current);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const x = e.clientX;
    const walk = (x - startX) * 0.2;

    contentsBoxRef.current.scrollLeft = scrollLeft - walk;

    rafRef.current = requestAnimationFrame(() => {
      handleMouseMove(e);
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    cancelAnimationFrame(rafRef.current);
  };

  return (
    <div className="contents_wrap">
      <div
        ref={contentsBoxRef}
        className="contents_box"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        style={{
          overflowX: "scroll",
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        {contents_card_DATA.map((contents_card_DATA, index) => (
          <div className="contents_card" key={index}>
            <div className="contents_card-image"></div>
            <div className="contents_card-category">#카테고리</div>
            <div>
              <h2 className="contents_card-title">
                {contents_card_DATA.title}
              </h2>
              <span className="contents_card-ex">{contents_card_DATA.ex}</span>
            </div>
            <div className="contents_card-play">플레이하기</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contents;
