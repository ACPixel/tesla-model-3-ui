import React from "react";
import Switcher from "./components/switcher";
import Toggle from "./components/toggle";
import SubMenu from "./components/subMenu";
import Slider from "./components/slider";
import styled from "@emotion/styled";

const Header = styled.div`
  font-size: 24px;
  margin: 10px;
  font-weight: bold;
`;

function AppRouter() {
  return (
    <div>
      <Header>Exterior Lights</Header>
      <Switcher current={3} options={["OFF", "PARKING", "ON", "AUTO"]} />
      <Toggle start={true}>FRONT FOG</Toggle>
      <Header>Adjustments</Header>
      <div>
        <SubMenu>MIRRORS</SubMenu>
        <SubMenu>STEERING WHEEL</SubMenu>
      </div>
      <Toggle start={false}>FOLD</Toggle>
      <Header>Windows</Header>

      <Toggle start={false}>WINDOW LOCK</Toggle>

      <Header>Display Brightness</Header>
      <Slider current={100} options={["OFF", "PARKING", "ON", "AUTO"]} />
    </div>
  );
}

export default AppRouter;
