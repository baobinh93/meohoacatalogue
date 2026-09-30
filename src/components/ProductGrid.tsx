// import type { Product } from '../types/product'
// import { ProductCard } from './ProductCard'

// interface ProductGridProps {
//   products: Product[]
//   onContact: (product: Product) => void
// }

// export function ProductGrid({ products, onContact }: ProductGridProps) {
//   if (products.length === 0) {
//     return (
//       <p className="py-10 text-center text-[15px] text-[#87747a]">
//         Mèo Hoa đang chuẩn bị thêm mẫu quà xinh cho nhóm này.
//       </p>
//     )
//   }

//   return (
//     <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
//       {products.map((product) => (
//         <ProductCard
//           key={product.id}
//           product={product}
//           onContact={onContact}
//         />
//       ))}
//     </div>
//   )
// }
import type { Product } from '../types/product'
import { ProductCard } from './ProductCard'

interface ProductGridProps {
  products: Product[]
  loading: boolean
  onContact: (product: Product) => void
}

export function ProductGrid({
  products,
  loading,
  onContact,
}: ProductGridProps) {

  /*
   * --------------------------------
   * LOADING
   * --------------------------------
   */

  if (loading) {
    return (
      <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">

        {Array.from({ length: 8 }).map(
          (_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-white"
            >

              {/* Image skeleton */}
              <div className="aspect-square animate-pulse bg-[#f3e7e5]" />

              {/* Text skeleton */}
              <div className="space-y-2 p-3">

                <div className="h-4 w-3/4 animate-pulse rounded bg-[#f3e7e5]" />

                <div className="h-4 w-1/2 animate-pulse rounded bg-[#f3e7e5]" />

              </div>

            </div>
          )
        )}

      </div>
    )
  }


  /*
   * --------------------------------
   * KHÔNG CÓ SẢN PHẨM
   * --------------------------------
   */

  if (products.length === 0) {
    return (
      <p className="py-10 text-center text-[15px] text-[#87747a]">
        Mèo Hoa đang chuẩn bị thêm mẫu quà xinh cho nhóm này.
      </p>
    )
  }


  /*
   * --------------------------------
   * PRODUCT GRID
   * --------------------------------
   */

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