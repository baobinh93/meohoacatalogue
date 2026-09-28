import { Map, MapPin, Music2 } from "lucide-react";
import zaloIcon from "../assets/svg/zalo.svg";
import phoneIcon from "../assets/svg/phone.svg";
import tiktokIcon from "../assets/svg/tiktok.svg";
import pinIcon from "../assets/svg/pin.svg";
import map from "../assets/imgs/map/map.png";
export function ContactSection() {
  return (
    <section id="contact" className="bg-cream py-10 sm:py-14">
      <div className="shell">
        <div className="mb-5">
          <p className="text-[15px] font-bold tracking-[0.16em] text-[#c08492]">
            NHẮN MÈO HOA
          </p>
          <h2 className="brand-font mt-1 text-[23px] font-bold text-ink">
            LIÊN HỆ
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="soft-card rounded-3xl bg-white p-5">
            <div className="space-y-4 text-[15px] font-semibold text-ink">
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center">
                  <img src={zaloIcon} alt="Zalo" className="h-full w-full" />
                </div>

                <span className="flex h-5 items-center leading-none">
                  035 505 1303
                </span>
              </div>
             
             <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center">
                  <img src={pinIcon} alt="Zalo" className="h-full w-full" />
                </div>

                <span className="flex h-5 items-center leading-none">
                 LK1-09, Nguyễn Bảo Đức, phường Tam Hiệp, thành phố Đồng Nai
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center">
                  <img src={tiktokIcon} alt="Zalo" className="h-full w-full" />
                </div>

                <span className="flex h-5 items-center leading-none">
                 meohoagiftboutique
                </span>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href="tel:0355051303"
                className="inline-flex min-h-11 items-center rounded-xl hover:bg-[#edbbc5] bg-rose px-4 text-[15px] font-bold text-[#6f4e57] no-underline"
              >
                GỌI NGAY
              </a>
              <a
                href="https://zalo.me/0355051303"
                target="_blank"
                rel="noreferrer"
                className="hover:bg-[#c8e2d4] inline-flex min-h-11 items-center rounded-xl bg-mint px-4 text-[15px] font-bold text-[#4f7e69] no-underline"
              >
                NHẮN ZALO
              </a>
              <a
                href="https://www.tiktok.com/@meohoagiftboutique"
                target="_blank"
                rel="noreferrer"
                className=" hover:bg-[#f5eee8] inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-4 text-[15px] font-bold text-[#6f4e57] no-underline shadow-sm "
              >
                <Music2 size={19} strokeWidth={2.5} />
                TIKTOK
              </a>
            </div>
          </div>

          <div className="relative min-h-[230px] overflow-hidden rounded-3xl bg-champagne p-6">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border-[20px] border-white/30" />

            {/* <div className="relative flex h-full min-h-[180px] flex-col justify-between">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-rose-deep shadow-sm">
                <MapPin size={22} />
              </div>

              <div>
                <h3 className="text-[18px] font-bold text-ink">Ghé thăm Mèo Hoa</h3>
                
                <a
                  href="https://maps.app.goo.gl/M5442aArf5G38wmZ6"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex min-h-10 items-center rounded-xl bg-white px-4 text-[15px] font-bold tracking-[0.06em] text-[#705b44] no-underline"
                >
                  CHỈ ĐƯỜNG
                </a>
              </div>
            </div> */}
            <div className="flex min-h-[180px] gap-4">
              {/* CONTENT */}
              <div className="flex w-[180px] shrink-0 flex-col justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-rose-deep shadow-sm">
                  <MapPin size={22} />
                </div>

                <div>
                  <h3 className="text-[18px] font-bold text-ink">
                    Ghé thăm Mèo Hoa
                  </h3>

                  <a
                    href="https://maps.app.goo.gl/M5442aArf5G38wmZ6"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex min-h-10 items-center rounded-xl bg-white px-4 text-[15px] font-bold tracking-[0.06em] text-[#705b44] no-underline"
                  >
                    CHỈ ĐƯỜNG
                  </a>
                </div>
              </div>

              {/* MAP */}
              <a
                href="https://maps.app.goo.gl/M5442aArf5G38wmZ6"
                target="_blank"
                rel="noreferrer"
                className="group min-w-0 flex-1 overflow-hidden rounded-2xl border border-[#eadfd2] bg-[#f5efe8]"
              >
                <img
                  src={map}
                  alt="Bản đồ Mèo Hoa"
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
