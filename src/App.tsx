import { useEffect, useState } from 'react'
import type { Product } from './types/product'
import { products } from './data/products'
import { getProducts } from './services/googleSheetApi'
import { Header } from './components/Header'
import { ProductsSection } from './components/ProductsSection'
import { GallerySection } from './components/GallerySection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { MobileActions } from './components/MobileActions'
import { ProductModal } from './components/ProductModal'

export default function App() {
   const [products, setProducts] = useState<Product[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data)
      })
      .catch((err) => {
        console.error(err)
        setError('Không thể tải sản phẩm')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Đang tải sản phẩm...
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {error}
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main className="mobile-safe">
        <ProductsSection
          products={products}
          onContact={setSelectedProduct}
        />
        <GallerySection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
      <MobileActions />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  )
}
