import React, { FC, useEffect } from "react";

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";
import Step3 from "../Step3/Step3";
import Step4 from "../Step4/Step4";

interface TitleProps {
  title: string;
}
const Home: FC<TitleProps> = ({ title }) => {

  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Step1 title="" />
        </Route>
        <Route exact path="/step2">
          <Step2 title="" />
        </Route>
        <Route exact path="/step3">
          <Step3 title="" />
        </Route>
        <Route exact path="/step4">
          <Step4 title="" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Home;
