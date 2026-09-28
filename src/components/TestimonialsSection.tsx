import testimonial01 from '../assets/imgs/testimonials/testimonial-01.jpg'
import testimonial02 from '../assets/imgs/testimonials/testimonial-02.avif'
import testimonial03 from '../assets/imgs/testimonials/testimonial-03.avif'
const testimonials = [
  {
    name: 'Chị Nguyệt',
    image: testimonial01,
    alt: 'Khách hàng vui vẻ mở hộp quà',
    text: 'Giỏ quà xinh hơn ảnh, gói rất chỉn chu và giao đúng hẹn.',
    background: '#fff6f7',
  },
  {
    name: 'Anh Minh Quân',
    image: testimonial02,
    alt: 'Chocolate và hoa được sắp xếp trên khay quà',
    text: 'Mèo Hoa tư vấn ngân sách rất nhanh, set quà công ty cực kỳ tinh tế.',
    background: '#f3fbf6',
  },
  {
    name: 'Bạn Bảo Trâm',
    image: testimonial03,
    alt: 'Khách hàng mỉm cười cầm hộp quà',
    text: 'Đặt mèo thần tài làm quà khai trương ai cũng thích, rất đáng yêu.',
    background: '#faf7e9',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-10 sm:py-14">
      <div className="shell">
        <div className="mb-5">
          <p className="text-[15px] font-bold tracking-[0.16em] text-[#c08492]">LỜI YÊU THƯƠNG</p>
          <h2 className="brand-font mt-1 text-[23px] font-bold text-ink">KHÁCH HÀNG NÓI GÌ</h2>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="soft-card rounded-3xl p-4"
              style={{ background: item.background }}
            >
              <div className="flex items-center gap-3">
                <img
                  className="h-12 w-12 rounded-2xl object-cover"
                  loading="lazy"
                  src={item.image}
                  alt={item.alt}
                />
                <div>
                  <h3 className="text-[18px] font-bold text-ink">{item.name}</h3>
                  <span className="text-xs text-[#c8954f]">★★★★★</span>
                </div>
              </div>

              <p className="mt-3 text-[15px] leading-relaxed text-[#75666b]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
