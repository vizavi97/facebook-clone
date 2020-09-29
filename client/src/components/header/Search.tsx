import React from 'react'
import {Box, Flex, Icon, Input, InputGroup, InputLeftElement} from "@chakra-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";

interface SearchProps {

}

export const Search :React.FC<SearchProps> = () => {
  return (
  <>
    <Flex alignItems="center">
      <Box color="blue.600" fontSize={"2.5rem"} bg={"blue"}>
        <FontAwesomeIcon icon={faFacebook}/>
      </Box>
      <Box pl={2}>
        <InputGroup height={12}>
          <InputLeftElement height={12} children={<Icon name="search" color="gray.500" />} />
          <Input backgroundColor="gray.50" _placeholder={{color: "#65676b"}} borderRadius={200}  height={12} type="phone" placeholder="Поиск по Facebook" />
        </InputGroup>
      </Box>
    </Flex>
  </>
  )
}
