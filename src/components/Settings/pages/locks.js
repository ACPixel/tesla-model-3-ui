import React from "react";
import Switcher from "./components/switcher";
import Toggle from "./components/toggle";
import SubMenu from "./components/subMenu";
import Slider from "./components/slider";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  overflow-y: auto;
  max-height: 850px;
  padding-bottom: 50px;
`;

const Header = styled.div`
  font-size: 24px;
  margin: 10px;
  font-weight: bold;
`;

const SubHeader = styled.div`
  font-size: 16px;
  margin: 10px;
  font-weight: bold;
  color: #888;
  width: 100%;
`;

const KeyBox = styled.div`
  border-radius: 10px;
  height: 500px;
  width: 700px;
  background: #ddd;
`;

const Spacer = styled.div`
  display: block;
  height: 100px;
`;

function AppRouter() {
  return (
    <Wrapper>
      <Header>Keys</Header>
      <KeyBox />
      <div style={{ display: "flex" }}>
        <Toggle>Window Lock</Toggle>
        <Toggle>Child Lock</Toggle>
      </div>
    </Wrapper>
  );
}

export default AppRouter;
