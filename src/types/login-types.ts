export interface LoginTypes {
  status: boolean
  type: string
  data: TokenTypes
}

export interface TokenTypes {
  access_token: string
  token_type: string
  expires_at: string
}
