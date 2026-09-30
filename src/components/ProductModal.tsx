
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import type { Product } from "../types/product";
import { getCloudinaryImageUrl } from "../utils/cloudinary";
import OrderForm from "./OrderForm";
import OrderSuccess from "./OrderSuccess";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

type ModalView = "product" | "order" | "success";

const formatProductName = (name: string) => {
  if (!name) return "";

  let result = name.trim().toLowerCase();

  result = result.replace(
    /(\d+(?:[.,]\d+)?)\s*(cm|mm|kg|g|ml|l|m)\b/gi,
    (_, number, unit) =>
      `${number} ${unit.toLowerCase()}`,
  );

  result =
    result.charAt(0).toUpperCase() +
    result.slice(1);

  return result;
};

const formatPrice = (price: number | string) => {
  if (!price) return "";

  return Number(price).toLocaleString("vi-VN");
};

export function ProductModal({
  product,
  onClose,
}: ProductModalProps) {
  const [view, setView] =
    useState<ModalView>("product");

  const [successOrderId, setSuccessOrderId] =
    useState("");

  useEffect(() => {
    if (!product) return;

    // Mỗi lần mở sản phẩm mới,
    // luôn bắt đầu từ màn hình sản phẩm.
    setView("product");
    setSuccessOrderId("");

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener(
      "keydown",
      onKeyDown,
    );

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        onKeyDown,
      );

      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleOrderSuccess = (
    orderId: string,
  ) => {
    setSuccessOrderId(orderId);
    setView("success");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[#554148]/35 p-3 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal-rise relative w-full max-w-md overflow-hidden rounded-[28px] bg-cream shadow-2xl">

        {/* =====================================
            PRODUCT VIEW
        ===================================== */}
        {view === "product" && (
          <>
            {/* Close button */}
            <button
              type="button"
              aria-label="Đóng cửa sổ sản phẩm"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f6e8e8] text-[#74555d] focus:outline-none focus:ring-2 focus:ring-rose-deep"
            >
              <X size={20} />
            </button>

            {/* Product image */}
            <img
              className="h-auto w-full rounded-t-[28px] object-cover"
              src={getCloudinaryImageUrl(
                product.image,
                400,
              )}
              alt={product.alt}
            />

            {/* Product information */}
            <div className="p-5">
              <h2
                id="product-modal-title"
                className="mt-0 text-[23px] font-bold text-ink"
              >
                {formatProductName(
                  product.name,
                )}
              </h2>

              <p className="mt-1 text-[15px] font-bold text-[#c06d81]">
                {formatPrice(product.price)}
              </p>

              <p className="mt-3 text-[15px] leading-relaxed text-[#7f7173]">
                {product.alt === product.name
                  ? "Mèo Hoa sẽ tư vấn mẫu quà, lời nhắn và ngân sách phù hợp cho bạn."
                  : formatProductName(
                      product.alt,
                    )}
              </p>

              {/* Order button */}
              <div className="mt-4 flex justify-center">
                <button
                  type="button"
                  onClick={() =>
                    setView("order")
                  }
                  className="flex min-h-11 items-center justify-center rounded-xl bg-champagne px-4 text-[15px] font-bold text-[#705b44] transition hover:opacity-90"
                >
                  ĐẶT HÀNG
                </button>
              </div>
            </div>
          </>
        )}

        {/* =====================================
            ORDER VIEW
        ===================================== */}
        {view === "order" && (
          <OrderForm
            product={product}
            onBack={() =>
              setView("product")
            }
            onClose={onClose}
            onSuccess={handleOrderSuccess}
          />
        )}

        {/* =====================================
            SUCCESS VIEW
        ===================================== */}
        {view === "success" && (
          <OrderSuccess
            orderId={successOrderId}
            onClose={onClose}
          />
        )}

      </div>
    </div>
  );
}

