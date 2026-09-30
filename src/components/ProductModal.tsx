import { useEffect } from "react";
import { X } from "lucide-react";
import type { Product } from "../types/product";
import { getCloudinaryImageUrl } from '../utils/cloudinary'
interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
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
export function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    if (!product) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    // <div
    //   className="fixed inset-0 z-50 flex items-center justify-center bg-[#554148]/35 p-3 sm:items-center"
    //   role="dialog"
    //   aria-modal="true"
    //   aria-labelledby="product-modal-title"
    //   onMouseDown={(event) => {
    //     if (event.target === event.currentTarget) onClose();
    //   }}
    // >

    <div
  className="fixed inset-0 z-50 flex items-end justify-center bg-[#554148]/35 p-3 sm:items-center"
  role="dialog"
  aria-modal="true"
  aria-labelledby="product-modal-title"
  onMouseDown={(event) => {
    if (event.target === event.currentTarget) onClose();
  }}
>
      <div className="modal-rise relative w-full max-w-md rounded-[28px] bg-cream p-5 shadow-2xl">
        <button
          type="button"
          aria-label="Đóng cửa sổ liên hệ"
          onClick={onClose}
          className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f6e8e8] text-[#74555d] focus:outline-none focus:ring-2 focus:ring-rose-deep"
        >
          <X size={20} />
        </button>

        <img
          className="h-auto w-full rounded-2xl object-cover"
          src={  getCloudinaryImageUrl(product.image, 400)}
          alt={product.alt}
        />

        <h2
          id="product-modal-title"
          className="mt-4 text-[23px] font-bold text-ink"
        >
          {formatProductName(product.name)}
        </h2>

        <p className="mt-1 text-[15px] font-bold text-[#c06d81]">
          {formatPrice(product.price)}
        </p>

        <p className="mt-3 text-[15px] leading-relaxed text-[#7f7173]">
          {product.alt === product.name
            ? "Mèo Hoa sẽ tư vấn mẫu quà, lời nhắn và ngân sách phù hợp cho bạn."
            : formatProductName(product.alt)}
        </p>

        <div className="mt-4 flex justify-center">
          <a
            href="https://zalo.me/0355051303"
            target="_blank"
            rel="noreferrer"
            className="flex min-h-11 items-center justify-center px-4 rounded-xl bg-champagne text-[15px] font-bold text-[#705b44] no-underline"
          >
            ĐẶT HÀNG
          </a>
        </div>
      </div>
    </div>
  );
}
