const API_URL =
  "https://script.google.com/macros/s/AKfycbywd40iEoVXLW6OFtg2CuSqErSaG6L-mB8yHR8d8pdDkwDAo_lxgmxv1PqjLLqGtRM7/exec";
const productGrid = document.getElementById("productGrid"),
  status = document.getElementById("status"),
  searchInput = document.getElementById("searchInput"),
  refreshBtn = document.getElementById("refreshBtn");
const modal = document.getElementById("productModal"),
  modalImage = document.getElementById("modalImage"),
  modalName = document.getElementById("modalName"),
  modalPrice = document.getElementById("modalPrice"),
  modalClose = document.getElementById("modalClose");
let products = [];
function formatPrice(price) {
  const n = Number(price);
  return Number.isFinite(n)
    ? new Intl.NumberFormat("vi-VN").format(n) + "đ"
    : price || "";
}
function openModal(p) {
  modalImage.src = p.image;
  modalImage.alt = p.name || "Sản phẩm";
  modalName.textContent = p.name || "Sản phẩm";
  modalPrice.textContent = formatPrice(p.price);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose.focus();
}
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  modalImage.src = "";
}
function renderProducts(list) {
  productGrid.innerHTML = "";
  if (!list.length) {
    productGrid.innerHTML = '<div class="empty">Không tìm thấy sản phẩm</div>';
    return;
  }
  const f = document.createDocumentFragment();
  list.forEach((p) => {
    const c = document.createElement("article");
    c.className = "product-card";
    c.tabIndex = 0;
    c.setAttribute("role", "button");
    c.innerHTML = `<img class="product-image" src="${p.image}" alt="${p.name}" loading="lazy" decoding="async"><div class="product-info"><div class="product-name">${p.name}</div><div class="product-price">${formatPrice(p.price)}</div></div>`;
    c.onclick = () => openModal(p);
    c.onkeydown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(p);
      }
    };
    f.appendChild(c);
  });
  productGrid.appendChild(f);
}
async function loadProducts() {
  refreshBtn.disabled = true;
  try {
    status.textContent = "Đang tải sản phẩm...";
    const r = await fetch(API_URL);
    if (!r.ok) throw Error("fetch failed");
    products = await r.json();
    status.textContent = `${products.length} sản phẩm`;
    renderProducts(products);
  } catch (e) {
    console.error(e);
    status.textContent = "Không thể tải sản phẩm";
    productGrid.innerHTML =
      '<div class="empty">Không thể kết nối đến catalog sản phẩm.<br><br>Hãy kiểm tra URL Google Apps Script trong <strong>js/app.js</strong>.</div>';
  } finally {
    refreshBtn.disabled = false;
  }
}
searchInput.addEventListener("input", () => {
  const k = searchInput.value.toLowerCase().trim();
  const list = products.filter((p) =>
    String(p.name || "")
      .toLowerCase()
      .includes(k),
  );
  renderProducts(list);
  status.textContent = `${list.length} sản phẩm`;
});
refreshBtn.addEventListener("click", loadProducts);
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-close-modal")) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
});
loadProducts();
