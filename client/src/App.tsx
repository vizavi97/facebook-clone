import React from 'react'
import './assets/styles/style.scss'
import {useRoutes} from "./utils/routes";
import {BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";


const App :React.FC = (props:any) => {
  const routes = useRoutes(props.user.isAuthorization)
  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  )
}

const mapStateToProps = (state:any) => {
  return state
}


export default connect(mapStateToProps,null)(App)
