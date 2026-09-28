import avatar01 from "../assets/imgs/avatar/avatar-01.jpg"
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur">
      <div className="shell flex h-[62px] items-center justify-between">
        <a href="#products" className="inline-flex items-center gap-2 no-underline" aria-label="Mèo Hoa - về sản phẩm">
          {/* <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f8d9de] text-[#a96778]" aria-hidden="true">
            ♧
          </span> */}
          <img src={avatar01} alt="avatar" className="w-10 h-10 rounded-full overflow-hidden" />
          <span className="brand-font text-[20px] font-bold tracking-[0.08em] text-[#76545d]">
            MÈO HOA
          </span>
        </a>

        <a
          href="#contact"
          className="inline-flex min-h-10 items-center rounded-full bg-rose px-4 text-[15px] font-bold tracking-[0.08em] text-[#6f4e57] no-underline transition hover:bg-[#edbbc5]"
        >
          LIÊN HỆ
        </a>
      </div>
    </header>
  )
}
