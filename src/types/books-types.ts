export interface BooksTypes {
  items: ItemBooks[]
}

export interface ItemBooks {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: VolumeInfo
}

export interface VolumeInfo {
  title: string
  authors?: string[]
  publisher: string
  publishedDate: string
  description?: string
  pageCount?: number
  printType: string
  categories: string[]
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  language: string
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
  subtitle?: string
}
