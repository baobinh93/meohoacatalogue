import type { Product } from '../types/product'

/**
 * PRODUCT DATA
 * -----------------------------------------
 * Hiện tại là mock data bóc tách từ bản Canva.
 *
 * Sau này fetch API chỉ cần thay:
 *   const products = await fetchProducts()
 *
 * Các component không cần sửa.
 */
export const products: Product[] = [
  {
    id: 1,
    name: 'Giỏ quà An Nhiên',
    price: 'Từ 399.000đ',
    image: 'https://images.pexels.com/photos/33327309/pexels-photo-33327309.jpeg',
    alt: 'Giỏ hoa cúc hồng và trắng có ruy băng',
    badge: 'CÓ SẴN',
    badgeType: 'available',
    categories: ['basket', 'gift'],
  },
  {
    id: 2,
    name: 'Giỏ quà thanh lịch',
    price: 'Từ 599.000đ',
    image: 'https://images.pexels.com/photos/27393960/pexels-photo-27393960.jpeg',
    alt: 'Giỏ quà sang trọng với champagne và chocolate',
    badge: 'CÓ SẴN',
    badgeType: 'available',
    categories: ['basket', 'gift'],
  },
  {
    id: 3,
    name: 'Mèo thần tài pastel',
    price: 'Từ 299.000đ',
    image: 'https://images.pexels.com/photos/6441613/pexels-photo-6441613.jpeg',
    alt: 'Mèo thần tài màu vàng trên nền hồng pastel',
    badge: 'CÓ SẴN',
    badgeType: 'available',
    categories: ['cat', 'gift'],
  },
  {
    id: 4,
    name: 'Set quà doanh nghiệp',
    price: 'Từ 699.000đ',
    image: 'https://images.pexels.com/photos/10757836/pexels-photo-10757836.jpeg',
    alt: 'Hộp quà doanh nghiệp gồm sổ tay và ly',
    badge: 'CÓ SẴN',
    badgeType: 'available',
    categories: ['corporate'],
  },
  {
    id: 5,
    name: 'Hộp quà yêu thương',
    price: 'Từ 349.000đ',
    image: 'https://images.pexels.com/photos/13976059/pexels-photo-13976059.jpeg',
    alt: 'Hộp quà trắng đỏ có ruy băng và hoa hồng',
    badge: 'CÓ SẴN',
    badgeType: 'available',
    categories: ['gift'],
  },
  {
    id: 6,
    name: 'Giỏ quà chúc mừng',
    price: 'Từ 499.000đ',
    image: 'https://images.pexels.com/photos/17878238/pexels-photo-17878238.jpeg',
    alt: 'Giỏ quà gồm nhiều món ăn nhẹ và đồ ngọt',
    badge: 'CÓ SẴN',
    badgeType: 'available',
    categories: ['basket', 'gift'],
  },
  {
    id: 7,
    name: 'Mèo thần tài chiêu tài',
    price: 'Từ 459.000đ',
    image: 'https://images.pexels.com/photos/6691725/pexels-photo-6691725.jpeg',
    alt: 'Mèo thần tài vàng cùng thỏi vàng may mắn',
    badge: 'CÓ SẴN',
    badgeType: 'available',
    categories: ['cat'],
  },
  {
    id: 8,
    name: 'Set quà theo yêu cầu',
    price: 'Liên hệ',
    image: 'https://images.pexels.com/photos/33636463/pexels-photo-33636463.jpeg',
    alt: 'Túi quà pastel có nơ hồng',
    badge: 'THEO YÊU CẦU',
    badgeType: 'custom',
    categories: ['gift', 'corporate'],
  },
]
