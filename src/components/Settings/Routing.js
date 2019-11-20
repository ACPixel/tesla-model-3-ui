import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import QuickControls from "./pages/quickControls";
import Lights from "./pages/lights";
import Locks from "./pages/locks";
import Display from "./pages/display";
import Driving from "./pages/driving";

import styled from "@emotion/styled";

const Main = styled.div`
  padding: 25px;
  padding-top: 50px;
  position: absolute;
  top: 0px;
  display: inline-block;
  background: #eee;
  min-width: 100%;
  min-height: 100%;
`;

function AppRouter() {
  return (
    <Main>
      <Switch>
        <Route path="/settings/quickControls" exact>
          <QuickControls />
        </Route>
        <Route path="/settings/lights" exact>
          <Lights />
        </Route>
        <Route path="/settings/locks" exact>
          <Locks />
        </Route>
        <Route path="/settings/display" exact>
          <Display />
        </Route>
        <Route path="/settings/driving" exact>
          <Driving />
        </Route>
      </Switch>
    </Main>
  );
}

export default AppRouter;
