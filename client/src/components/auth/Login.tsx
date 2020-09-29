import React from 'react'
import {Box, Button, Link} from "@chakra-ui/core";
import {Form, Formik} from "formik";
import {InputField} from "../../utils/inputField";
import {connect} from "react-redux";
import {login} from "../../redux/action/userActions";

interface LoginProps {
  emailOrPhoneNumber: string | number,
  password: string
}

const Login :React.FC = (props:any) => {
  return (
  <>
      <Formik initialValues={{emailOrPhoneNumber: '',password: ''}}
              onSubmit={(values:LoginProps) => props.login(values)}
      >
        {({isSubmitting}) => {
          return (
            <Form>
              <Box mb={5}>
                <InputField
                  name='emailOrPhoneNumber'
                  placeholder="Электронный адрес или номер телефона"
                />
              </Box>
              <Box mb={5}>
                <InputField
                  name='password'
                  placeholder="Введите пароль"
                  type='password'
                />
              </Box>
              <Button
                type='submit' variant="outline" isLoading={isSubmitting}
                w={"100%"} size={'lg'} borderRadius={8} bg={"blue.400"} color={"white"}
                _hover={{backgroundColor: "blue.600",boxShadow: "0 0 10px 2px rgba(115,115,115,.2)"}}
              >
                Вход
              </Button>
            </Form>
          )
        }}
      </Formik>
      <Box py={2} textAlign={"center"}>
        <Link color='blue.700'> Забыли пароль</Link>
      </Box>
  </>
  )
}
export default connect(null, {login})(Login)
