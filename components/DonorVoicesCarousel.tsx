import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const testimonials = [
  {
    quote: "Giving to the Nour Endowment is my way of planting a seed I know will grow for generations",
    name: "Nate J.",
    bg: "bg-black",
    text: "text-white",
  },
  {
    quote: "I wanted to make sure my charity lived beyond me - donating to the Nour Endowment was the answer",
    name: "Haneen M.",
    bg: "bg-[#E5E1D8]",
    text: "text-black",
  },
  {
    quote: "By donating, I'm investing in the potential of individuals who can change the world. There's no better way to make an impact",
    name: "Kareem T.",
    bg: "bg-[#084120]",
    text: "text-white",
  },
  {
    quote: "It's not just a donation, it's building a legacy",
    name: "Hesham B.",
    bg: "bg-white",
    text: "text-black",
  },
  {
    quote: "I feel that it is my duty to contribute in building a brighter future for the next generation - particularly those who need it most",
    name: "Almir C.",
    bg: "bg-[#E5E1D8]",
    text: "text-black",
  },
  {
    quote: "I recognize the impact that education had on my life, and I believe everyone has a right to that same experience",
    name: "Emily W.",
    bg: "bg-black",
    text: "text-white",
  },
  {
    quote: "Education opened up opportunities that I wouldn't have had otherwise - everyone deserves to have access to these resources",
    name: "Ryan H.",
    bg: "bg-white",
    text: "text-black",
  },
  {
    quote: "Investing in someone's education is a charity that lives beyond just that individual",
    name: "Abdallah M.",
    bg: "bg-[#084120]",
    text: "text-white",
  },
  // --- ADDITIONAL 16 QUOTES ---
]

export default function DonorVoicesCarousel() {
  const [swiper, setSwiper] = useState<any>(null)
  return (
    <div className="w-full max-w-7xl mx-auto py-12 relative">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-black bg-clip-text text-transparent">
        Donor's Voices
      </h2>
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={24}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          pagination={{ clickable: true, el: ".swiper-pagination-custom" }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }}
          onSwiper={setSwiper}
          className="w-full"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div
                className={`flex flex-col justify-between items-stretch rounded-2xl sm:rounded-3xl p-4 sm:p-8 h-[320px] w-full max-w-[320px] mx-auto shadow-md border border-emerald-100 mb-2 ${t.bg} ${t.text}`}
                style={{ boxSizing: 'border-box' }}
              >
                <p className="text-base sm:text-xl md:text-2xl font-medium leading-snug mb-6 sm:mb-8 transition-all duration-500">“{t.quote}”</p>
                <div className="text-right text-base sm:text-lg font-semibold">{t.name}</div>
              </div>
            </SwiperSlide>
          ))}
          {/* Custom navigation buttons (desktop only) */}
          <div className="swiper-prev hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 shadow hover:bg-emerald-100 items-center justify-center cursor-pointer">
            <span className="text-2xl text-emerald-600">&#8592;</span>
          </div>
          <div className="swiper-next hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 shadow hover:bg-emerald-100 items-center justify-center cursor-pointer">
            <span className="text-2xl text-emerald-600">&#8594;</span>
          </div>
        </Swiper>
        {/* Pagination Dots below the carousel */}
        <div className="swiper-pagination-custom flex justify-center mt-6 gap-2"></div>
      </div>
    </div>
  )
} 