import React, {useEffect} from 'react'
import './assets/styles/style.scss'
import {useRoutes} from "./utils/routes";
import {BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {me} from "./redux/action/userActions";


const App :React.FC = (props:any) => {
  useEffect(() => {
    const token = props.user.token
    props.me(token)
  },[])
  const routes = useRoutes(props.user.isAuthorization)
  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  )
}


export default connect(state => state, {me})(App)
