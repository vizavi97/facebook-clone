import React, {InputHTMLAttributes} from 'react'
import {FormControl, FormErrorMessage, FormLabel, Input} from "@chakra-ui/core/dist";
import {useField} from "formik";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  name: string
  size?: any
}

export const InputField :React.FC<InputFieldProps> = ({label,size = "lg",...props}) => {
  const [field,{error}] = useField(props)
  return (
    <FormControl isInvalid={!!error}>
      {label ? <FormLabel htmlFor={field.name}>{label}</FormLabel> : null}
      <Input {...field} size={size} value={field.value} {...props} id={field.name} placeholder={props.placeholder}/>
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  )
}
