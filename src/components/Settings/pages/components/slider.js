import React, { useState, useEffect, useRef } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { IoIosSunny } from "react-icons/io";

const Wrapper = styled.div`
  height: 50px;
  border-radius: 25px;
  background: #aaa;
  display: felx;
  align-items: center;
  position: relative;
`;

const Option = styled.div`
  width: 450px;
  display: inline-block;
  z-index: 10;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

function Selection({ offset, perc }) {
  return (
    <div
      unselectable="on"
      style={{
        left: offset,
        position: "absolute",
        zIndex: 5,
        background: "white",
        width: 146,
        height: 46,
        top: 0,
        borderRadius: 25,
        margin: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none"
      }}
    >
      {perc}%
    </div>
  );
}

export default ({ current }) => {
  const [pos, setPos] = useState((current / 100) * 300);
  const [perc, setPerc] = useState(current);
  const [clicked, setClicked] = useState(false);
  const container = useRef(null);

  const mouseMove = e => {
    if (clicked) {
      let off = e.clientX - container.current.getBoundingClientRect().x - 75;
      if (off < 0) {
        off = 0;
      }
      if (off > 300) {
        off = 300;
      }
      setPerc(Math.floor((off / 300) * 100));
      setPos(off);
      document.body.style.opacity = (off <= 15 ? 15 : off) / 300;
    }
  };
  return (
    <Wrapper
      style={{ width: 450 }}
      ref={container}
      onMouseDown={e => {
        setClicked(true);
        mouseMove(e);
      }}
      onMouseUp={e => {
        setClicked(false);
        mouseMove(e);
      }}
      onMouseMove={e => {
        mouseMove(e);
      }}
    >
      <IoIosSunny
        style={{ marginLeft: 10, color: "white", fontSize: 24, marginTop: 3 }}
      />
      <Selection offset={pos} perc={perc} />
    </Wrapper>
  );
};
