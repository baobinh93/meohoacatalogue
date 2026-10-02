// // const API_URL =
// //   "https://script.google.com/macros/s/AKfycbwS-3JU5gC1UzeAvas-NFNtoSunvQeB4MQu5Qdc_yxENgliV9W05YNShtESJsqr-Eb-Jw/exec";

// // export async function getProducts() {
// //   const response = await fetch(API_URL);

// //   if (!response.ok) {
// //     throw new Error("Không thể kết nối Google Apps Script");
// //   }

// //   return response.json();
// // }

// const API_URL =
//   "https://script.google.com/macros/s/AKfycbwS-3JU5gC1UzeAvas-NFNtoSunvQeB4MQu5Qdc_yxENgliV9W05YNShtESJsqr-Eb-Jw/exec";

// import type { Product } from "../types/product";

// // Giữ 1 request đang chạy dùng chung cho mọi nơi gọi getProducts().
// let productsPromise: Promise<Product[]> | null = null;

// // Timeout để tránh request treo quá lâu.
// const REQUEST_TIMEOUT = 15000;

// // Chỉ retry tối đa 2 lần sau request đầu tiên.
// const MAX_RETRIES = 2;

// function sleep(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function fetchProducts(): Promise<Product[]> {
//   let lastError: unknown = null;

//   for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
//     const controller = new AbortController();

//     const timeoutId = window.setTimeout(() => {
//       controller.abort();
//     }, REQUEST_TIMEOUT);

//     try {
//       const response = await fetch(API_URL, {
//         method: "GET",
//         cache: "no-store",
//         signal: controller.signal,
//       });

//       if (!response.ok) {
//         throw new Error(
//           `Google Apps Script trả về HTTP ${response.status}.`,
//         );
//       }

//       const data: Product[] = await response.json();

//       if (!Array.isArray(data)) {
//         throw new Error(
//           "Dữ liệu sản phẩm từ Google Apps Script không hợp lệ.",
//         );
//       }

//       return data;
//     } catch (error) {
//       lastError = error;

//       // Nếu chưa phải lần thử cuối thì chờ rồi thử lại.
//       if (attempt < MAX_RETRIES) {
//         // 500ms → 1000ms
//         await sleep(500 * (attempt + 1));
//       }
//     } finally {
//       window.clearTimeout(timeoutId);
//     }
//   }

//   if (lastError instanceof Error) {
//     if (lastError.name === "AbortError") {
//       throw new Error(
//         "Google Apps Script phản hồi quá lâu. Vui lòng thử lại.",
//       );
//     }

//     throw lastError;
//   }

//   throw new Error(
//     "Không thể kết nối Google Apps Script.",
//   );
// }

// export function getProducts(): Promise<Product[]> {
//   // Nếu đã có request đang chạy, dùng lại Promise đó.
//   // Điều này đặc biệt hữu ích khi React StrictMode chạy effect 2 lần
//   // trong môi trường development.
//   if (productsPromise) {
//     return productsPromise;
//   }

//   productsPromise = fetchProducts().catch((error) => {
//     // Cho phép request sau thử lại nếu request hiện tại thất bại.
//     productsPromise = null;
//     throw error;
//   });

//   return productsPromise;
// }

// // Có thể dùng khi cần chủ động tải lại danh sách sản phẩm.
// export function refreshProducts(): Promise<Product[]> {
//   productsPromise = null;
//   return getProducts();
// }
import type { Product } from "../types/product";
import { supabase } from "../lib/supabase";

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("active", true)
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Supabase getProducts error:", error);
    throw new Error("Không thể tải danh sách sản phẩm.");
  }

  if (!data) {
    return [];
  }

return data.map((product) => ({
  id: String(product.id),
  name: product.name,

  price:
    product.price === null || product.price === undefined
      ? "[đang cập nhật]"
      : String(product.price),

  image: product.image ?? "",
  alt: product.alt ?? product.name,

  badge:
    product.badge === "order"
      ? "order"
      : "available",

  badgeType:
    product.badge === "order"
      ? "order"
      : "available",

  categories: product.categories ?? [],

  active: product.active,
}));
}

export async function refreshProducts(): Promise<Product[]> {
  return getProducts();
}