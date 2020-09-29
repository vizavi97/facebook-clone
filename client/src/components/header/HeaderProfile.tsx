import React from 'react'
import {Avatar, Flex, List, Text} from "@chakra-ui/core";
import {BrowserRouter as Router, Link} from "react-router-dom";
import {DropDown} from "./utils/DropDown";
import {TestComponent} from "../testComponent";
import {faBell, faCaretDown, faPlus} from "@fortawesome/free-solid-svg-icons";
import {faFacebookMessenger} from "@fortawesome/free-brands-svg-icons";

interface HeaderProfileProps {

}

export const HeaderProfile :React.FC<HeaderProfileProps> = () => {
  return (
  <>
    <Flex>
      <Router>
          <Link to={'/profile'}>
            <Flex>
              <Flex alignItems="center">
                <Avatar w={36} h={36} name="Тимур Файзиев" src="https://scontent-cph2-1.xx.fbcdn.net/v/t31.0-1/cp0/c0.8.50.50a/p50x50/28828003_102912533881105_7362856084649154345_o.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=fusMmx3gHBUAX_lw9uU&_nc_ht=scontent-cph2-1.xx&oh=b6e2f64a0a33554ed7ce4e868208277f&oe=5F88C2FA"/>
                <Text pl={2} fontWeight={600}>Тимур</Text>
              </Flex>
              <List pl={2} display={"flex"} alignItems={"center"}>
                <DropDown icon={faPlus} component={TestComponent}/>
                <DropDown icon={faFacebookMessenger} component={TestComponent}/>
                <DropDown icon={faBell} component={TestComponent}/>
                <DropDown icon={faCaretDown} component={TestComponent}/>
              </List>
            </Flex>
          </Link>
      </Router>
    </Flex>
  </>
  )
}
