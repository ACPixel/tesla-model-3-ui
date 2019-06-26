import React, { useState } from "react";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";

const Wrapper = styled.div`
  height: 25px;
  border-radius: 25px;
  background: #aaa;
  position: relative;
  display: inline-block;
`;

function Selection({ state }) {
  const props = useSpring({ left: state ? 25 : 0 });
  return (
    <animated.div
      style={{
        ...props,
        position: "absolute",
        zIndex: 5,
        background: "white",
        width: 21,
        height: 21,
        top: 0,
        borderRadius: 25,
        margin: 2
      }}
    />
  );
}

export default ({ def, children }) => {
  const [state, setState] = useState(def);
  return (
    <div style={{ display: "flex", alignItems: "center", marginTop: 50 }}>
      <Wrapper
        style={{
          width: 50,
          background: state ? "#24f" : "#aaa",
          transition: "all 0.2s ease"
        }}
        onClick={() => {
          setState(!state);
        }}
      >
        <Selection state={state} />
      </Wrapper>
      <span style={{ marginLeft: 50 }}>{children}</span>
    </div>
  );
};
