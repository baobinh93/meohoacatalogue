
import { Check } from "lucide-react";

interface OrderSuccessProps {
  orderId: string;
  onClose: () => void;
}

export default function OrderSuccess({
  orderId,
  onClose,
}: OrderSuccessProps) {
  return (
    <div
      className="
        flex
        min-h-[380px]
        flex-col
        items-center
        justify-center
        px-6
        py-8
        text-center
        text-ink
        sm:min-h-[420px]
        sm:py-10
      "
    >
      {/* Success icon */}
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#f8eeee]">
        <Check
          size={30}
          strokeWidth={2}
          className="text-[#c06d81]"
        />
      </div>

      {/* Title */}
      <h2 className="mt-5 text-[22px] font-bold text-ink">
        Đặt hàng thành công
      </h2>

      {/* Description */}
      <p className="mt-3 max-w-[320px] text-[14px] leading-relaxed text-[#7f7173]">
        Cảm ơn bạn đã đặt hàng tại Mèo Hoa.
        <br />
        Mèo Hoa đã nhận được thông tin đặt
        hàng của bạn.
      </p>

      {/* Order ID */}
      <div className="mt-5 w-full max-w-[300px] rounded-2xl bg-[#f8eeee] px-5 py-4">
        <p className="text-[12px] text-[#9a8d90]">
          Mã đơn hàng
        </p>

        <p className="mt-1 text-[16px] font-bold tracking-wide text-[#c06d81]">
          {orderId}
        </p>
      </div>

      {/* Note */}
      <p className="mt-4 max-w-[300px] text-[13px] leading-relaxed text-[#9a8d90]">
        Mèo Hoa sẽ liên hệ với bạn để xác nhận
        đơn hàng và trao đổi thêm về thời gian
        nhận hàng.
      </p>

      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        className="
          mt-6
          min-h-11
          rounded-xl
          bg-champagne
          px-8
          text-[15px]
          font-bold
          text-[#705b44]
          transition
          hover:opacity-90
        "
      >
        ĐÓNG
      </button>
    </div>
  );
}

