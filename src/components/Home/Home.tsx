import React, { FC, useEffect } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Step1 from "../Step1/Step1";

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
      </Switch>
    </BrowserRouter>
  );
};

export default Home;
