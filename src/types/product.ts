export type ProductCategory =
  | 'basket'
  | 'cat'
  | 'corporate'
  | 'gift'

export interface Product {
  id: number
  name: string
  price: string
  image: string
  alt: string
  badge: 'CÓ SẴN' | 'THEO YÊU CẦU'
  badgeType: 'available' | 'custom'
  categories: ProductCategory[]
}
