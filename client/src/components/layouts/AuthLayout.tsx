import React from 'react'
import {Box, Flex} from "@chakra-ui/core";
import {LastEntrance} from "../auth/LastEntrance";

interface AuthLayoutProps {

}

export const AuthLayout :React.FC<AuthLayoutProps> = (props) => {
  return (
  <>
      <Box padding={"5rem 0 2rem"} maxW={980} m={"auto"}>
        <Flex>
        <LastEntrance/>
        {props.children}
        </Flex>
      </Box>
  </>
  )
}
