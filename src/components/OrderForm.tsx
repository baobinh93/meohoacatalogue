
import { useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import type { Product } from "../types/product";
import { createOrder } from "../services/orderApi";

interface OrderFormProps {
  product: Product;
  onBack: () => void;
  onClose: () => void;
  onSuccess?: (orderId: string) => void;
}

interface FormData {
  customerName: string;
  phone: string;
  deliveryMethod: "shop" | "home";
  address: string;
  note: string;
}

export default function OrderForm({
  product,
  onBack,
  onClose,
  onSuccess,
}: OrderFormProps) {
  const [formData, setFormData] = useState<FormData>({
    customerName: "",
    phone: "",
    deliveryMethod: "shop",
    address: "",
    note: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormData, string>>
  >({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleDeliveryChange = (
    deliveryMethod: "shop" | "home",
  ) => {
    setFormData((prev) => ({
      ...prev,
      deliveryMethod,
      ...(deliveryMethod === "shop"
        ? { address: "" }
        : {}),
    }));

    setErrors((prev) => ({
      ...prev,
      address: "",
    }));
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = "Vui lòng nhập họ và tên";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (
      !/^(0|\+84)[0-9]{9,10}$/.test(
        formData.phone.trim(),
      )
    ) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }

    if (
      formData.deliveryMethod === "home" &&
      !formData.address.trim()
    ) {
      newErrors.address =
        "Vui lòng nhập địa chỉ nhận hàng";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    e: React.FormEvent,
  ) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const result = await createOrder({
        product_id: product.id,
        customer_name:
          formData.customerName.trim(),
        phone: formData.phone.trim(),

        address:
          formData.deliveryMethod === "shop"
            ? "Nhận tại shop"
            : formData.address.trim(),

        note: formData.note.trim(),
      });

      if (result.order_id) {
        onSuccess?.(result.order_id);
      }
    } catch (error) {
      console.error(
        "Không thể đặt hàng:",
        error,
      );

      alert(
        error instanceof Error
          ? error.message
          : "Không thể đặt hàng. Vui lòng thử lại.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex max-h-[90vh] flex-col text-[15px] text-ink">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#eadfe0] px-5 py-4">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1 text-[14px] text-[#7f7173] transition hover:text-ink"
        >
          <ArrowLeft
            size={17}
            strokeWidth={1.8}
          />

          <span>Quay lại</span>
        </button>

        <h2 className="text-[20px] font-bold text-ink">
          Đặt hàng
        </h2>

        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f6e8e8] text-[#74555d] transition hover:opacity-80"
        >
          <X size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="overflow-y-auto px-5 py-5">

        {/* Product summary */}
        <div className="mb-6 flex items-center gap-3 rounded-2xl bg-[#f8eeee] p-3">
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-white">
            <img
              src={product.image}
              alt={product.alt}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-[15px] font-bold text-ink">
              {product.name}
            </h3>

            <p className="mt-1 text-[14px] font-bold text-[#c06d81]">
              {product.price}
            </p>
          </div>
        </div>

        {/* Section title */}
        <h3 className="mb-4 text-[16px] font-bold text-ink">
          Thông tin nhận hàng
        </h3>

        <form
          id="order-form"
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          {/* Họ và tên */}
          <div>
            <label
              htmlFor="customerName"
              className="mb-1.5 block text-[14px] font-medium text-[#705f62]"
            >
              Họ và tên{" "}
              <span className="text-[#c06d81]">
                *
              </span>
            </label>

            <input
              id="customerName"
              name="customerName"
              type="text"
              value={formData.customerName}
              onChange={handleChange}
              placeholder="Nhập họ và tên"
              className={`w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-ink outline-none transition placeholder:text-[#aaa0a2] focus:border-[#d9a1aa] focus:ring-2 focus:ring-[#f4dfe2] ${
                errors.customerName
                  ? "border-[#d88b96]"
                  : "border-[#e5dcdc]"
              }`}
            />

            {errors.customerName && (
              <p className="mt-1 text-[12px] text-[#c06d81]">
                {errors.customerName}
              </p>
            )}
          </div>

          {/* Số điện thoại */}
          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 block text-[14px] font-medium text-[#705f62]"
            >
              Số điện thoại{" "}
              <span className="text-[#c06d81]">
                *
              </span>
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Nhập số điện thoại"
              className={`w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-ink outline-none transition placeholder:text-[#aaa0a2] focus:border-[#d9a1aa] focus:ring-2 focus:ring-[#f4dfe2] ${
                errors.phone
                  ? "border-[#d88b96]"
                  : "border-[#e5dcdc]"
              }`}
            />

            {errors.phone && (
              <p className="mt-1 text-[12px] text-[#c06d81]">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Hình thức nhận hàng */}
          <div>
            <label className="mb-2 block text-[14px] font-medium text-[#705f62]">
              Hình thức nhận hàng{" "}
              <span className="text-[#c06d81]">
                *
              </span>
            </label>

            <div className="grid grid-cols-2 gap-3">

              {/* Nhận tại shop */}
              <label
                className={`flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-3 text-[14px] transition ${
                  formData.deliveryMethod ===
                  "shop"
                    ? "border-[#d9a1aa] bg-[#f8eeee] text-ink"
                    : "border-[#e5dcdc] bg-white text-[#705f62]"
                }`}
              >
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="shop"
                  checked={
                    formData.deliveryMethod ===
                    "shop"
                  }
                  onChange={() =>
                    handleDeliveryChange(
                      "shop",
                    )
                  }
                  className="accent-[#c06d81]"
                />

                <span>Nhận tại shop</span>
              </label>

              {/* Nhận tại nhà */}
              <label
                className={`flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-3 text-[14px] transition ${
                  formData.deliveryMethod ===
                  "home"
                    ? "border-[#d9a1aa] bg-[#f8eeee] text-ink"
                    : "border-[#e5dcdc] bg-white text-[#705f62]"
                }`}
              >
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="home"
                  checked={
                    formData.deliveryMethod ===
                    "home"
                  }
                  onChange={() =>
                    handleDeliveryChange(
                      "home",
                    )
                  }
                  className="accent-[#c06d81]"
                />

                <span>Nhận tại nhà</span>
              </label>

            </div>
          </div>

          {/* Địa chỉ - chỉ hiện khi nhận tại nhà */}
          {formData.deliveryMethod ===
            "home" && (
            <div>
              <label
                htmlFor="address"
                className="mb-1.5 block text-[14px] font-medium text-[#705f62]"
              >
                Địa chỉ nhận hàng{" "}
                <span className="text-[#c06d81]">
                  *
                </span>
              </label>

              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Nhập địa chỉ nhận hàng"
                rows={3}
                className={`w-full resize-none rounded-xl border bg-white px-4 py-3 text-[15px] text-ink outline-none transition placeholder:text-[#aaa0a2] focus:border-[#d9a1aa] focus:ring-2 focus:ring-[#f4dfe2] ${
                  errors.address
                    ? "border-[#d88b96]"
                    : "border-[#e5dcdc]"
                }`}
              />

              {errors.address && (
                <p className="mt-1 text-[12px] text-[#c06d81]">
                  {errors.address}
                </p>
              )}

              {/* Phí ship */}
              <p className="mt-2 text-[12px] leading-relaxed text-[#9a8d90]">
                Giá trên chưa gồm phí ship và
                phí đóng gói.
              </p>
            </div>
          )}

          {/* Ghi chú - luôn hiện */}
          <div>
            <label
              htmlFor="note"
              className="mb-1.5 block text-[14px] font-medium text-[#705f62]"
            >
              Ghi chú{" "}
              <span className="text-[12px] font-normal text-[#aaa0a2]">
                (không bắt buộc)
              </span>
            </label>

            <textarea
              id="note"
              name="note"
              value={formData.note}
              onChange={handleChange}
              placeholder="Ví dụ: Giao giờ hành chính..."
              rows={3}
              className="w-full resize-none rounded-xl border border-[#e5dcdc] bg-white px-4 py-3 text-[15px] text-ink outline-none transition placeholder:text-[#aaa0a2] focus:border-[#d9a1aa] focus:ring-2 focus:ring-[#f4dfe2]"
            />
          </div>

        </form>
      </div>

      {/* Footer */}
      <div className="border-t border-[#eadfe0] bg-cream px-5 py-4">
        <button
          type="submit"
          form="order-form"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-champagne px-5 py-3 text-[15px] font-bold text-[#705b44] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting
            ? "ĐANG GỬI ĐƠN..."
            : "XÁC NHẬN ĐẶT HÀNG"}
        </button>
      </div>

    </div>
  );
}
