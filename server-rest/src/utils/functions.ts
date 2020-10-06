import jwt from 'jsonwebtoken'
import {JWT_ACCESS_LIFE, JWT_REFRESH_LIFE, JWT_REFRESH_SECRET, JWT_SECRET} from "../config/const";

interface UsernamePasswordInput {
  emailOrPhoneNumber: string,
  password: string
}
interface emailOrPhoneNumberInput {
  emailOrPhoneNumber: string,
}

export const validateRegister = (options:UsernamePasswordInput) =>{
  if (options.emailOrPhoneNumber.includes('@')) {
    if (options.emailOrPhoneNumber.length <= 3) {
      return [{
        field: "password",
        message: "length must be greater than 7"
      }]
    }
    if (options.password.length <= 3) {
      return [{
        field: "password",
        message: "length must be greater than 3"
      }]
    }
  }
  if (options.emailOrPhoneNumber.includes('+')) {
    if (options.emailOrPhoneNumber.length <= 7) {
      return [{
        field: "password",
        message: "length must be greater than 7"
      }]
    }
    if (options.password.length <= 3) {
      return [{
        field: "password",
        message: "length must be greater than 3"
      }]
    }
  }
  if (!options.emailOrPhoneNumber.includes('+') && !options.emailOrPhoneNumber.includes('@')) {
    return [{
      message: "Incorrect field"
    }]
  }
  return false
}

export const registerTypes = (options:emailOrPhoneNumberInput) => {
  if (options.emailOrPhoneNumber.includes('@')) {
    return "EMAIL"
  }
  return "NUMBER"
};

export const generateAccessToken = (user:any) => {
  const data =  {
    id: user.id
  };
  return jwt.sign(data,JWT_SECRET, {
    algorithm: "HS256",
    expiresIn: JWT_ACCESS_LIFE
  });
}

export const generateRefreshToken = (user:any) => {
  const data =  {
    id: user.id
  };
  return jwt.sign(data,JWT_REFRESH_SECRET, {
    algorithm: "HS256",
    expiresIn: JWT_REFRESH_LIFE
  });
}

export const verifyToken = (token:string) => {
  const accessToken = jwt.verify(token,JWT_SECRET)
  return accessToken
}
