import { useMemo, useState } from 'react'
import type { Product, ProductCategory } from '../types/product'
import { FilterBar } from './FilterBar'
import { ProductGrid } from './ProductGrid'

interface ProductsSectionProps {
  products: Product[]
  onContact: (product: Product) => void
}

export function ProductsSection({ products, onContact }: ProductsSectionProps) {
  const [activeFilter, setActiveFilter] =
  useState<'all' | ProductCategory | 'available'>('available')

 const filteredProducts = useMemo(() => {
  if (activeFilter === 'all') {
    return products
  }

  if (activeFilter === 'available') {
    return products.filter(
      (product) => product.badgeType === 'available'
    )
  }

  return products.filter((product) =>
    product.categories.includes(activeFilter)
  )
}, [activeFilter])

  return (
    <section id="products" className="relative overflow-hidden pb-9 pt-6 sm:pt-9">
      <span className="petal left-[6%] top-5" />
      <span className="petal right-[11%] top-16 bg-mint" />

      <div className="shell relative">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="mb-1 text-[15px] font-bold tracking-[0.16em] text-[#c08492]">
              MÈO HOA GIFT SHOP
            </p>
            <h1 className="brand-font text-[30px] font-bold leading-tight text-ink">
              SẢN PHẨM CÓ SẴN
            </h1>
            <p className="mt-1.5 text-[15px] text-[#87747a]">
              Mẫu xinh – Có sẵn tại Mèo Hoa
            </p>
          </div>

          <div className="hidden text-3xl text-[#e7bdc5] sm:block" aria-hidden="true">
            ⌒⌒
          </div>
        </div>

        <FilterBar activeFilter={activeFilter} onChange={setActiveFilter} />

        <ProductGrid products={filteredProducts} onContact={onContact} />
      </div>
    </section>
  )
}
