import * as React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/home";
import UserDetailPage from "../pages/user-detail";
import UserEditPage from "../pages/user-edit";
import NewUser from "../pages/user-new";

const AppRouter: React.FC = () => {
  return (
    <Switch>
      <Route path="/new">
        <NewUser />
      </Route>
      <Route path="/edit/:id">
        <UserEditPage />
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
