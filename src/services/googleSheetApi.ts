const API_URL =
  "https://script.google.com/macros/s/AKfycbwS-3JU5gC1UzeAvas-NFNtoSunvQeB4MQu5Qdc_yxENgliV9W05YNShtESJsqr-Eb-Jw/exec";

export async function getProducts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Không thể kết nối Google Apps Script");
  }

  return response.json();
}