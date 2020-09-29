import React from 'react'
import {BrowserRouter} from "react-router-dom";
import {Header} from "../header/Header";
interface MainLayoutProps {}

export const MainLayout :React.FC<MainLayoutProps> = (props) => {
  return (
  <>
    <BrowserRouter>
      <Header/>
      <main>
        {props.children}
      </main>
    </BrowserRouter>
  </>
  )
}
