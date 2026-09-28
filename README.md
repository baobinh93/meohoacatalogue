# Mèo Hoa — React + TypeScript + Tailwind

Đã chuyển thiết kế Canva sang React/TypeScript và bóc tách component.

## Cấu trúc

```text
src/
├── components/
│   ├── Header.tsx
│   ├── ProductsSection.tsx
│   ├── FilterBar.tsx
│   ├── ProductGrid.tsx
│   ├── ProductCard.tsx
│   ├── ProductModal.tsx
│   ├── GallerySection.tsx
│   ├── TestimonialsSection.tsx
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── MobileActions.tsx
│   └── Footer.tsx
├── data/
│   └── products.ts
├── types/
│   └── product.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Product data

Phần `#product-grid article` của bản Canva đã được bóc thành:

```ts
export const products: Product[] = [...]
```

Component `ProductGrid` chỉ nhận:

```ts
products: Product[]
```

và render:

```tsx
products.map((product) => ...)
```

Vì vậy sau này đổi sang API/Supabase chỉ cần thay nguồn data, ví dụ:

```ts
const { data: products } = await supabase
  .from('products')
  .select('*')
```

rồi map dữ liệu database về `Product`.

## Chạy

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```
