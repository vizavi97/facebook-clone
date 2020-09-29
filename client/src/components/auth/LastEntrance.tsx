import React from 'react'
import fbText from '../../assets/images/facebook_text.svg'
import me from '../../assets/images/meBig.jpg'
import {Box, Flex, Heading, Image, Text} from "@chakra-ui/core";
import {LastEntranceBox} from "./LastEntranceBox";

interface LastEntranceProps {

}

export const LastEntrance :React.FC<LastEntranceProps> = () => {
  return (
  <>
    <Flex flex="1 0 0" flexDirection={"column"}>
      <Box>
        <Image ml={"-20px"} w={200} src={fbText} aria-label={'facebook'}/>
      </Box>
      <Box>
        <Heading as={"h5"} fontSize={"1.75rem"} fontWeight={500}>
          Недавние входы
        </Heading>
        <Text>Нажмите на изображение или добавьте аккаунт.</Text>
      </Box>
      <Flex align='center' margin={"1rem -.5rem"}>
        <Flex width='calc(100%/3 - 1rem)' p={2}>
          <LastEntranceBox isNotEmpty img={me} name={'tim tim'}/>
        </Flex>
        <Flex width='calc(100%/3 - 1rem)' p={2}>
          <LastEntranceBox/>
        </Flex>
      </Flex>
    </Flex>
  </>
  )
}
