import gallery01 from '../assets/imgs/gallery/gallery-01.jpg'
import gallery02 from '../assets/imgs/gallery/gallery-02.jpg'
import gallery03 from '../assets/imgs/gallery/gallery-03.jpg'
import gallery04 from '../assets/imgs/gallery/gallery-04.jpg'
import gallery05 from '../assets/imgs/gallery/gallery-05.jpg'
import gallery06 from '../assets/imgs/gallery/gallery-06.jpg'

const galleryImages = [
  [gallery01, 'Giỏ hoa và quà được trang trí cho dịp đặc biệt'],
  [gallery02, 'Giỏ quà gồm chocolate và bánh kẹo'],
  [gallery03, 'Bộ sưu tập tượng mèo thần tài trong cửa hàng'],
  [gallery04, 'Các hộp quà màu xanh ngọc xếp chồng'],
  [gallery05, 'Người gói hộp quà với ruy băng và hoa trang trí'],
  [gallery06, 'Giỏ quà cao cấp với chocolate và rượu'],
]

export function GallerySection() {
  return (
    <section className="border-y border-line bg-[#fffaf8] py-10 sm:py-14">
      <div className="shell">
        <div className="mb-5">
          <p className="text-[15px] font-bold tracking-[0.16em] text-[#c08492]">GÓC MÈO HOA</p>
          <h2 className="brand-font mt-1 text-[23px] font-bold text-ink">MẪU ĐÃ THI CÔNG</h2>
          <p className="mt-1 text-[15px] text-[#87747a]">Một vài sản phẩm thực tế của Mèo Hoa</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {galleryImages.map(([img, alt]) => (
            <img
              key={img}
              className="aspect-square w-full rounded-2xl object-cover shadow-sm"
              loading="lazy"
              src={img}
              alt={alt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
