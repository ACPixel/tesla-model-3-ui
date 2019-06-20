import React from "react";
import Switcher from "./components/switcher";
import Toggle from "./components/toggle";
import SubMenu from "./components/subMenu";
import Slider from "./components/slider";
import styled from "@emotion/styled";

const SubHeader = styled.div`
  font-size: 16px;
  margin: 10px;
  font-weight: bold;
  color: #888;
`;

const Header = styled.div`
  font-size: 24px;
  margin: 10px;
  font-weight: bold;
`;

function AppRouter() {
  return (
    <div>
      <SubHeader>Exterior</SubHeader>
      <Header>Headlights</Header>
      <Switcher current={3} options={["OFF", "PARKING", "ON", "AUTO"]} />
      <Toggle start={true}>FRONT FOG</Toggle>
      <SubHeader>Interior</SubHeader>
      <Header>Dome Lights</Header>
      <Switcher current={2} options={["OFF", "ON", "AUTO"]} />
      <Toggle start={true}>AMBIENT LIGHTS</Toggle>
    </div>
  );
}

export default AppRouter;
