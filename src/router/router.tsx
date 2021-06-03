import * as React from "react";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "../pages/home";
import UserDetailPage from "../pages/user-detail";

const AppRouter: React.FC = () => {
  return (
    <Switch>
      <Route path="/edit/:id">
        <UserDetailPage />
      </Route>
      <Route path="/view/:id">
        <UserDetailPage />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};
export default AppRouter;
