import React from "react";
import Switcher from "./components/switcher";
import Toggle from "./components/toggle";
import SubMenu from "./components/subMenu";
import Slider from "./components/slider";
import styled from "@emotion/styled";
import Switch from "./components/switch";

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
      <Header>Acceleration</Header>
      <Switcher
        current={2}
        options={["CHILL", "STANDARD", "SPORT", "LUDICROUS"]}
      />
      <Header>Steering Mode</Header>
      <Switcher current={1} options={["COMFORT", "STANDARD", "SPORT"]} />
      <Header>Regenerative Breaking</Header>
      <Switcher current={1} options={["STANDARD", "LOW"]} />
      <Spacer />
      <Switch>Creep</Switch>
      <Switch def={true}>Slip Start</Switch>
      <Spacer />
    </Wrapper>
  );
}

export default AppRouter;
