import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/app";

import About from "./pages/about.js";
import SubmitProverb from "./pages/proverbs/submit/";
import ProverbsList from "./pages/proverbs/";
import ProverbDetail from "./pages/proverbs/details/";
import HomeIndex from "./components/index_home";
import UserLogin from "./components/user/login";
import UserLogout from "./components/user/logout";
import UserRegister from "./components/user/register";
import UserProfile from "./components/user/profile";
import ResetPassword from "./components/user/reset_password";
import requireAuth from "./utils/authenticated";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeIndex} />
    <Route path="/about" component={About} />
    <Route path="/login" component={UserLogin} />
    <Route path="/logout" component={UserLogout} />
    <Route path="/register" component={UserRegister} />
    <Route path="/reset" component={ResetPassword} />
    <Route path="/proverbs/" component={ProverbsList} />
    <Route path="/proverbs/details/:id" component={ProverbDetail} />
    <Route
      path="/proverbs/submit"
      component={SubmitProverb}
      onEnter={requireAuth}
    />
    <Route path="/profile" component={UserProfile} onEnter={requireAuth} />
  </Route>
);
