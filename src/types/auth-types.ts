export interface RegisterTypes {
  status: boolean
  type: string
  errors: Errors
  status_code: number
}

export interface Errors {
  name: string[]
  email: string[]
}
