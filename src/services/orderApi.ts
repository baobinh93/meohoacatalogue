const ORDER_API_URL =
  "https://script.google.com/macros/s/AKfycbwS-3JU5gC1UzeAvas-NFNtoSunvQeB4MQu5Qdc_yxENgliV9W05YNShtESJsqr-Eb-Jw/exec";

export interface CreateOrderData {
  product_id: string;
  customer_name: string;
  phone: string;
  address: string;
  note: string;
}

export interface CreateOrderResponse {
  success: boolean;
  order_id?: string;
  error?: string;
}

export async function createOrder(
  data: CreateOrderData,
): Promise<CreateOrderResponse> {
  const response = await fetch(ORDER_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Không thể kết nối hệ thống đặt hàng.");
  }

  const result: CreateOrderResponse = await response.json();

  if (!result.success) {
    throw new Error(
      result.error || "Không thể tạo đơn hàng.",
    );
  }

  return result;
}