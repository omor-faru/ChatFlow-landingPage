import Image from "next/image"
import image from "../../public/Frame 8.png"
import { PlayIcon } from "@heroicons/react/24/solid"

export default function Hero() {
  return (
    <section className="text-white">
    
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 grid md:grid-cols-2 items-center gap-10">

    
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-[48px]  font-semibold leading-tight text-[#ffffff]">
            Improve your customer experience with real- <br className="hidden md:block" />
            time assistance
          </h1>

          <p className="mt-4 text-[#ffffff99] text-[14px] sm:text-[16px] md:text-[18px] leading-[1.8]">
            Our live chat software helps you connect with your customers instantly,
            boosting sales and improving customer satisfaction. Try it out today! and
            <br className="hidden md:block" /> see the difference it can make for your business.
          </p>

          <div className="mt-6 flex gap-4 flex-wrap justify-center md:justify-start">
          <button className="bg-black text-[#ffffff] px-6 py-2 rounded-3xl hover:bg-gray-900">
         Get Started
          </button>
          <button className="bg-[#ffffff0d] text-[#ffffff] px-6 py-2 rounded-3xl flex items-center gap-2 hover:bg-blue-700">
           <PlayIcon className="w-5 h-5" />
           See in Action
            </button>
       </div>

        </div>

    
        <div className="flex justify-center md:justify-end">
          <Image
            src={image}
            alt="Hero Image"
            className="w-[260px] sm:w-[360px] md:w-full max-w-md object-contain"
          />
        </div>

      </div>
    </section>
  )
}

