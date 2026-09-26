// Dán URL /exec của Google Apps Script vào đây
const API_URL =
  "https://script.google.com/macros/s/AKfycbywd40iEoVXLW6OFtg2CuSqErSaG6L-mB8yHR8d8pdDkwDAo_lxgmxv1PqjLLqGtRM7/exec";

const productGrid = document.getElementById("productGrid");
const status = document.getElementById("status");
const searchInput = document.getElementById("searchInput");
const refreshBtn = document.getElementById("refreshBtn");

let products = [];

function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN").format(price) + "đ";
}

function renderProducts(list) {
  productGrid.innerHTML = "";

  if (!list.length) {
    productGrid.innerHTML = `
      <div class="empty">Không tìm thấy sản phẩm</div>
    `;
    return;
  }

  list.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";

    card.innerHTML = `
      <img
        class="product-image"
        src="${product.image}"
        alt="${product.name}"
        loading="lazy"
      />
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-price">${formatPrice(product.price)}</div>
      </div>
    `;

    productGrid.appendChild(card);
  });
}

async function loadProducts() {
  try {
    status.textContent = "Đang tải sản phẩm...";

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Không thể lấy dữ liệu");
    }

    products = await response.json();

    status.textContent = `${products.length} sản phẩm`;
    renderProducts(products);
  } catch (error) {
    console.error(error);

    status.textContent = "Không thể tải sản phẩm";

    productGrid.innerHTML = `
      <div class="empty">
        Không thể kết nối đến catalog sản phẩm.
        <br><br>
        Hãy kiểm tra URL Google Apps Script trong
        <strong>js/app.js</strong>.
      </div>
    `;
  }
}

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase().trim();

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(keyword),
  );

  renderProducts(filtered);
  status.textContent = `${filtered.length} sản phẩm`;
});

refreshBtn.addEventListener("click", loadProducts);

loadProducts();
