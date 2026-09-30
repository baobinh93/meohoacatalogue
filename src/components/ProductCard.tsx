import type { Product } from "../types/product";
import { getCloudinaryImageUrl, preloadImage } from '../utils/cloudinary'
interface ProductCardProps {
  product: Product;
  onContact: (product: Product) => void;
}
const formatProductName = (name: string) => {
  if (!name) return "";

  let result = name.trim().toLowerCase();

  result = result.replace(
    /(\d+(?:[.,]\d+)?)\s*(cm|mm|kg|g|ml|l|m)\b/gi,
    (_, number, unit) => `${number} ${unit.toLowerCase()}`,
  );

  result = result.charAt(0).toUpperCase() + result.slice(1);

  return result;
};

const formatPrice = (price: number | string) => {
  if (!price) return "";

  return Number(price).toLocaleString("vi-VN");
};
export function ProductCard({ product, onContact }: ProductCardProps) {
  const imageUrl =
  getCloudinaryImageUrl(product.image, 400)

const modalImageUrl =
  getCloudinaryImageUrl(product.image, 800)
  return (
    // <article className="product-card overflow-hidden rounded-[22px]">
    //   <div className="relative aspect-[4/4.2] overflow-hidden bg-champagne">
    //     <img
    //       className="h-full w-full object-cover"
    //       loading="lazy"
    //       src={product.image}
    //       alt={product.alt}
    //     />

    //     <span
    //       className={[
    //         'absolute left-2.5 top-2.5 rounded-full px-2.5 py-1 text-[15px] font-bold tracking-[0.08em]',
    //         product.badgeType === 'available'
    //           ? 'bg-mint text-[#4f7e69]'
    //           : 'bg-lavender text-[#74648d]',
    //       ].join(' ')}
    //     >
    //       {product.badge}
    //     </span>
    //   </div>

    //   <div className="p-3 sm:p-4">
    //     <h2 className="min-h-[40px] text-[23px] font-bold leading-snug text-ink">
    //       {product.name}
    //     </h2>

    //     <p className="mt-1 text-[15px] font-bold text-[#c06d81]">
    //       {product.price}
    //     </p>

    //     <button
    //       type="button"
    //       onClick={() => onContact(product)}
    //       className="mt-3 min-h-10 w-full rounded-xl bg-[#f6d1d7] px-2 text-[15px] font-bold tracking-[0.08em] text-[#6f4e57] transition hover:bg-[#edbbc5] focus:outline-none focus:ring-2 focus:ring-rose-deep"
    //     >
    //      Xem chi tiết
    //     </button>
    //   </div>
    // </article>
    <article className="product-card flex h-full flex-col overflow-hidden rounded-[22px]">
      <div className="relative aspect-[4/4.2] shrink-0 overflow-hidden bg-champagne">
        <img
          className="h-full w-full object-cover"
          loading="lazy"
          src={imageUrl}
          alt={product.alt}
          onLoad={() => {
    preloadImage(modalImageUrl)
  }}
        />

        <span
          className={[
            "absolute left-2.5 top-2.5 rounded-full px-2.5 py-1 text-[15px] font-bold tracking-[0.08em]",
            product.badge === "available"
              ? "bg-mint text-[#4f7e69]"
              : "bg-[#f8d9de] text-[#a65f6d",
          ].join(" ")}
        >
          {product.badge === "available"?"Có Sẵn" :"Order"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <h2 className="min-h-[40px] text-[23px] font-bold leading-snug text-ink">
          {formatProductName(product.name)}
        </h2>

        <div className="mt-auto">
          <p className="mt-1 text-[15px] font-bold text-[#c06d81]">
            {formatPrice(product.price)}
          </p>

          <button
            type="button"
            onClick={() => onContact(product)}
            className="mt-3 min-h-10 w-full rounded-xl bg-[#f6d1d7] px-2 text-[15px] font-bold tracking-[0.08em] text-[#6f4e57] transition hover:bg-[#edbbc5] focus:outline-none focus:ring-2 focus:ring-rose-deep"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    </article>
  );
}
