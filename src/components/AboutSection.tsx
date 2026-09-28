import about01 from "../assets/imgs/about/about-02.jpg"

export function AboutSection() {
  return (
    <section className="bg-[#eef8f1] py-10 sm:py-14">
      <div className="shell grid items-center gap-6 md:grid-cols-2">
        <img
          className="aspect-[4/3] w-full rounded-[28px] object-scale-down shadow-sm"
          loading="lazy"
          src={about01}
          alt="Không gian boutique màu hồng với túi quà"
        />

        <div>
          <p className="text-[15px] font-bold tracking-[0.16em] text-[#719c86]">CÂU CHUYỆN NHỎ</p>
          <h2 className="brand-font mt-1 text-[23px] font-bold text-ink">VỀ MÈO HOA</h2>

          <p className="mt-3 text-[15px] leading-7 text-[#6f6667]">
            Mèo Hoa mang đến những món quà xinh xắn, chỉn chu và phù hợp cho nhiều dịp đặc biệt – từ giỏ quà tặng, quà doanh nghiệp đến mèo thần tài và những mẫu quà được thiết kế theo yêu cầu.
          </p>

          <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
            {[
              'Mẫu quà đa dạng',
              'Có sẵn nhiều mẫu',
              'Nhận làm theo yêu cầu',
              'Tư vấn theo ngân sách',
            ].map((item) => (
              <li key={item} className="rounded-xl bg-white px-3 py-3 text-[15px] font-semibold text-ink">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
