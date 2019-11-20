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

const Spacer = styled.div`
  display: block;
  height: 100px;
`;

function AppRouter() {
  return (
    <Wrapper>
      <Header>Display Mode</Header>
      <Switcher current={2} options={["DAY", "NIGHT", "AUTO"]} />
      <Header>Display Brightness</Header>
      <Slider current={100} />
      <Spacer />

      <Toggle start={false}>SCREEN CLEAN MODE</Toggle>
      <Spacer />
      <Header>Time Format</Header>
      <Switcher current={0} options={["12 HOUR", "24 HOUR"]} />
      <Header>Energy Display</Header>
      <Switcher current={0} options={["ENERGY", "DISTANCE"]} />
      <Header>Distance</Header>
      <Switcher current={1} options={["KILOMETERS", "MILES"]} />
      <Header>Temperature</Header>
      <Switcher current={1} options={["C", "F"]} />
      <Header>Tire Pressure</Header>
      <Switcher current={1} options={["BAR", "PSI"]} />
      <Spacer />
    </Wrapper>
  );
}

export default AppRouter;
