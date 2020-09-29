import jwt from 'jsonwebtoken'

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

export const generateToken = (user:any) => {
  const data =  {
    id: user.id
  };
  const signature = '79peajiucm_vizavi97';
  const expiration = '3h';
  return jwt.sign(data, signature, { expiresIn: expiration });
}
