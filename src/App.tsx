
import { useEffect, useState } from 'react'
import type { Product } from './types/product'
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
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null)

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data)
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main className="mobile-safe">
        <ProductsSection
          products={products}
          loading={loading}
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