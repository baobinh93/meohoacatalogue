import type { Product } from '../types/product'
import { ProductCard } from './ProductCard'

interface ProductGridProps {
  products: Product[]
  onContact: (product: Product) => void
}

export function ProductGrid({ products, onContact }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="py-10 text-center text-[15px] text-[#87747a]">
        Mèo Hoa đang chuẩn bị thêm mẫu quà xinh cho nhóm này.
      </p>
    )
  }

  return (
    <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onContact={onContact}
        />
      ))}
    </div>
  )
}
