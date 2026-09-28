export function MobileActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[#eaded8] bg-cream/95 p-2 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-3 gap-2">
        <a href="tel:0355051303" className="flex min-h-11 items-center justify-center rounded-xl bg-rose text-[15px] font-bold text-[#6f4e57] no-underline">
          GỌI NGAY
        </a>
        <a href="https://zalo.me/0355051303" target="_blank" rel="noreferrer" className="flex min-h-11 items-center justify-center rounded-xl bg-mint text-[15px] font-bold text-[#4f7e69] no-underline">
          ZALO
        </a>
        <a href="https://zalo.me/0355051303" target="_blank" rel="noreferrer" className="flex min-h-11 items-center justify-center rounded-xl bg-champagne text-[15px] font-bold text-[#705b44] no-underline">
          ĐẶT HÀNG
        </a>
      </div>
    </div>
  )
}
