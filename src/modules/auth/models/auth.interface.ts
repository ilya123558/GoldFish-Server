export interface IConfirmEmail {
  activationEmailString: string,
  email: string
}

export interface ILogin {
  email: string,
  password: string
}

export interface IRegistration {
  name: string,
  lastName: string,
  email: string,
  password: string
}