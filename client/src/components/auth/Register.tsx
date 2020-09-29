import React from 'react'
import {InputField} from "../../utils/inputField";
import {Box, Button, Flex, Text, Radio, RadioGroup, Select} from "@chakra-ui/core";
import {Form, Formik} from "formik";
import {monthNames} from "../../config/config";
import {connect} from "react-redux";
import {register} from "../../redux/action/userActions";

interface RegisterProps {}

export const Register :React.FC<RegisterProps> = (props:any) => {
  return (
      <Formik initialValues={{
        name: '',
        surname: '',
        emailOrPhoneNumber: null,
        password: '',
        date: {
          day: new Date().getUTCDate(),
          month: new Date().getMonth(),
          year: new Date().getUTCFullYear()
        },
        sex: 1
      }}
        onSubmit={(values:RegisterProps) => props.register(values)}>
        {({isSubmitting}) => {
          return (
            <Form>
              <Box>
                <Flex>
                  <Box as="span" pr={1}>
                    <InputField
                      name='name'
                      placeholder="Имя"
                      disabled={isSubmitting}
                    />
                  </Box>
                  <Box as="span" pl={1}>
                  <InputField
                    name='surname'
                    placeholder="Фамилия"
                    disabled={isSubmitting}
                  />
                  </Box>
                </Flex>
                <Box py={2}>
                  <InputField
                    name='emailOrPhoneNumber'
                    placeholder="Электронный адрес или номер телефона"
                    disabled={isSubmitting}
                  />
                </Box>
                <Box py={2}>
                  <InputField
                      name='password'
                      placeholder="Пароль"
                      disabled={isSubmitting}
                      type="password"
                    />
                </Box>

                <Flex py={2}>
                  <Select>
                    { new Array(31).fill('').map((_day,i) => {
                      i++
                      if(i === new Date().getUTCDate()) {
                        return <option value={i} selected>{i}</option>
                      }
                      return <option value={i}>{i}</option>
                    })}
                  </Select>
                  <Select name='date.day'>
                    { monthNames.map((m,i)=> {
                      if(i === new Date().getUTCMonth() + 1) {
                        return <option value={i} selected>{m}</option>
                      }
                      return <option value={i}>{m}</option>
                    })}
                  </Select>
                  <Select>
                    { new Array(120).fill('').map((_y,i) => {
                      return <option value={new Date().getUTCFullYear() - i}>{new Date().getUTCFullYear() - i}</option>
                    })}
                  </Select>
                </Flex>
                <RadioGroup display={"flex"} justifyContent={"space-evenly"} name="sex" defaultValue="1" isInline py={3}>
                  <Radio value="1" isChecked>Мужчина</Radio>
                  <Radio value="2">Женщина</Radio>
                  <Radio value="3">Оно</Radio>
                </RadioGroup>
              </Box>
              <Box>
                <Text fontSize={12} fontWeight={400}>
                  Нажимая кнопку Регистрация, вы принимаете Условия,
                  Политику использования данных и Политику в отношении файлов cookie.
                  Вы можете получать от нас SMS-уведомления, отказаться от которых можно в любой момент.</Text>
              </Box>
              <Button
                type='submit' variant="outline" isLoading={isSubmitting}
                w={"100%"} my={2} size={'lg'} borderRadius={8} bg={"green.400"} color={"white"}
                _hover={{backgroundColor: "green.600",boxShadow: "0 0 10px 2px rgba(115,115,115,.2)"}}
              >
                Вход
              </Button>
            </Form>
          )
        }}
      </Formik>
  )
}

export default connect(null, {register})(Register)
