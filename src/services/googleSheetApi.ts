const API_URL =
  "https://script.google.com/macros/s/AKfycby7tsII6Nh-OrumR1SW7ITbOpP3PHcnndKABXNkRaF014i7q2AxOCPEHCatpii8kWhN/exec";

export async function getProducts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Không thể kết nối Google Apps Script");
  }

  return response.json();
}