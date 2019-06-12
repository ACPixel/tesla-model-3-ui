import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import QuickControls from './pages/quickControls'
import styled from '@emotion/styled';

const Main = styled.div`
padding: 25px;
padding-top: 50px;
position: absolute;
top: 0px;
display: inline-block;
`

function AppRouter() {
  return (
    <Main>
        <Switch>
        <Route path="/settings/quickControls" exact>
            <QuickControls />
        </Route>
        <Route path="/settings/lights" exact>
            lights
        </Route>
        </Switch>
    </Main>
  );
}

export default AppRouter;
