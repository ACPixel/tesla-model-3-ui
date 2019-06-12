import React from 'react';
import Switcher from './components/switcher'
import Toggle from './components/toggle'
import styled from '@emotion/styled'

const Header = styled.div`
    font-size: 16px;
    margin: 10px;
    font-weight: bold;
`

function AppRouter() {
  return (
    <div>
        <Header>Exterior Lights</Header>
        <Switcher current={3} options={["OFF", "PARKING", "ON", "AUTO"]} />
        <Toggle start={true}>FRONT FOG</Toggle>
        <Header>Adjustments</Header>
        <Toggle start={false}>FOLD</Toggle>
        <Header>Windows</Header>
        <Toggle start={false}>WINDOW LOCK</Toggle>
    </div>
  );
}

export default AppRouter;
