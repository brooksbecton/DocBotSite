import React, { Component } from "react";
import { Route, IndexRoute, Switch } from "react-router-dom";
import App from "./components/app";

import About from "./pages/about.js";
import SubmitProverb from "./pages/proverbs/submit/";
import ProverbsList from "./pages/proverbs/";
import ProverbDetail from "./pages/proverbs/details/";
import Home from "./pages/Home";
import UserLogin from "./components/user/login";
import UserLogout from "./components/user/logout";
import UserRegister from "./components/user/register";
import UserProfile from "./components/user/profile";
import ResetPassword from "./components/user/reset_password";
import requireAuth from "./utils/authenticated";

const Routes = () =>
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={UserLogin} />
      <Route exact path="/logout" component={UserLogout} />
      <Route exact path="/register" component={UserRegister} />
      <Route exact path="/reset" component={ResetPassword} />
      <Route exact path="/proverbs/" component={ProverbsList} />
      <Route exact path="/proverbs/details/:id" component={ProverbDetail} />
      <Route
        exact
        path="/proverbs/submit"
        component={SubmitProverb}
        onEnter={requireAuth}
      />
      <Route path="/profile" component={UserProfile} onEnter={requireAuth} />
    </Switch>
  </div>;

export default Routes;
