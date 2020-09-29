import React from 'react'
import {
  Box,
  Button, Heading, Link, Modal, Text,
  ModalBody, ModalContent, ModalHeader,
  ModalOverlay, useDisclosure, Divider
} from "@chakra-ui/core";
import Login from "../../components/auth/Login";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import Register from "../../components/auth/Register";

export const Auth :React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
  <>
    <Box w={"396px"} pt={16} ml={4} >
      <Box p={4} backgroundColor={"white"} boxShadow="0 0 10px 2px rgba(115,115,115,.2)" >
        <Login/>
          <Divider/>
        <Box py={2} textAlign={"center"}>
          <Button variantColor={"green"} onClick={onOpen} fontWeight={600} fontSize={"1.25rem"}>Создать аккаунт</Button>
        </Box>
      </Box>
    </Box>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader p={"1rem 1.5rem .5rem"}>
          <Heading as="h4" fontWeight={500}>Регистрация</Heading>
          <Text color={"gray.500"} fontSize={14}>Быстро и легко</Text>
          <Link position={"absolute"} right={5} top={8} onClick={onClose}>
              <FontAwesomeIcon icon={faTimes}/>
          </Link>
        </ModalHeader>
        <ModalBody>
          <Register/>
        </ModalBody>
      </ModalContent>
    </Modal>
  </>
  )
}
