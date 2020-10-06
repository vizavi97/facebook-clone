import React from 'react'
import {Flex} from "@chakra-ui/core";
import {Search} from "./Search";
import {NavBar} from "./NavBar";
import HeaderProfile from "./HeaderProfile";
interface HeaderProps {}


export const Header :React.FC<HeaderProps> = () => {
  return (
    <header>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Search/>
        <NavBar/>
        <HeaderProfile/>
      </Flex>
    </header>
  )
}
