import React from "react";
import Switcher from "./components/switcher";
import Toggle from "./components/toggle";
import Switch from "./components/switch";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  overflow-y: auto;
  max-height: 850px;
  padding-bottom: 50px;
`;

const Head = styled.div`
  height: 75px;
  width: 100%;
  background: #999;
  display: flex;
  align-items: center;
  position: relative;
`;

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

const Spacer = styled.div`
  display: block;
  height: 100px;
`;

function AppRouter() {
  return (
    <Wrapper>
      <SubHeader>Exterior</SubHeader>
      <Header>Headlights</Header>
      <Switcher current={3} options={["OFF", "PARKING", "ON", "AUTO"]} />
      <Toggle start={true}>FRONT FOG</Toggle>
      <Spacer />
      <SubHeader>Interior</SubHeader>
      <Header>Dome Lights</Header>
      <Switcher current={2} options={["OFF", "ON", "AUTO"]} />
      <Toggle start={true}>AMBIENT LIGHTS</Toggle>
      <Spacer />
      <Switch>Auto High Beam</Switch>
      <Switch>Headlights after Exit</Switch>
      <Switch>Steering Wheel Lights</Switch>
      <Spacer />
    </Wrapper>
  );
}

export default AppRouter;
