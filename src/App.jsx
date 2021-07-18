import React, { Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import LoginPage from "./page/login/loginMain";
import mainPage from "./page/home/homeMain";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback="loading...">
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/main" component={mainPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
