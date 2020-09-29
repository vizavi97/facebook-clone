import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {Box, Flex, Image, Link, Text} from "@chakra-ui/core";

interface LastEntranceBoxProps {
  isNotEmpty?: boolean,
  img?: string,
  name?: string
}

export const LastEntranceBox :React.FC<LastEntranceBoxProps> = (props) => {
  return (
  <>
    <Link d={"block"} w={"100%"} borderRadius={12} boxShadow="0 0 0 1px #dddfe2" overflow="hidden" _hover={{boxShadow: "0 1px 8px 5px #dddfe2"}}>
      <Flex justifyContent={"center"} align={'center'}  height={"160px"} bg='#f5f6f7'>
        {props.isNotEmpty
          ? <Image src={props.img} objectFit='cover' h='100%' w="100%" />
          : <Box borderRadius="50%" bg='#1976f2' padding={"1rem 1.1875rem"}>
            <FontAwesomeIcon size={"2x"} color={"white"} icon={faPlus}/>
        </Box>}
      </Flex>
      <Flex justifyContent={"center"} align={'center'}  bg='#fff' minHeight={"60px"}>
        {props.isNotEmpty ? <Text color='black'>{props.name}</Text> : <Text color='#1976f2'>Добавить аккаунт</Text>}
      </Flex>
    </Link>
  </>
  )
}

LastEntranceBox.defaultProps = {
  isNotEmpty: false
}
