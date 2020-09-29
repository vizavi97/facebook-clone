import {Redirect, Route, Switch} from "react-router-dom";
import {Main} from "../pages/main";
import {Friends} from "../pages/friends";
import {Watch} from "../pages/watch";
import {Groups} from "../pages/groups";
import {Games} from "../pages/games";
import React from "react";
import {Auth} from "../pages/auth/Auth";
import {MainLayout} from "../components/layouts/MainLayout";
import {AuthLayout} from "../components/layouts/AuthLayout";


export const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return(
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/friends/' component={Friends}/>
          <Route path='/watch/' component={Watch}/>
          <Route path='/groups/' component={Groups}/>
          <Route path='/games/' component={Games}/>
          <Redirect to='/'/>
        </Switch>
      </MainLayout>
    )
  }
  return(
    <AuthLayout>
      <Switch>
        <Route exact path='/' component={Auth}/>
        <Redirect to="/"/>
      </Switch>
    </AuthLayout>
  )
}
