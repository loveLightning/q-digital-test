export interface MyBooksTypes {
  data: MyBookTypes[]
  status: boolean
}

export interface MyBookTypes {
  id: number
  user_id: number
  title: string
  description: string
  authors: string
  uid: string
  favorite: number
}
