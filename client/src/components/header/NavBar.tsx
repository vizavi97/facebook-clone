import React from 'react'
import {Flex, List} from "@chakra-ui/core";
import {faHome, faTv, faUserFriends, faUsers} from '@fortawesome/free-solid-svg-icons'
import {faFantasyFlightGames} from "@fortawesome/free-brands-svg-icons";
import {TopLink} from "./utils/TopLink";

interface NavBarProps {

}

export const NavBar :React.FC<NavBarProps> = () => {
  return (
    <Flex>
        <List display={"flex"} styleType="none">
          <TopLink route='/'  icon={faHome}/>
          <TopLink route='/friends/' icon={faUserFriends}/>
          <TopLink route='/watch/' icon={faTv}/>
          <TopLink route='/groups/' icon={faUsers}/>
          <TopLink route='/games/' icon={faFantasyFlightGames}/>
        </List>
    </Flex>
  )
}
