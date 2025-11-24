import Image from "next/image"
import image from "../../public/Frame 8.png"
import { PlayIcon } from '@heroicons/react/24/solid'

export default function Hero() {
  return (
    <section className=" text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 items-center gap-10">

        
        <div>
          <h1 className="text-[56px] text-[#ffffff] md:text-5xl font-semibold leading-tight ">
            Improve your customer experience with real- <br />time assistance
          </h1>
          <p className="mt-4 text-[#ffffff99] text-[18px] leading-[2]">
            Our live chat software helps you connect with your customers instantly,
            boosting sales and improving customer  satisfaction. Try it out today! and <br />see the difference it can makes for your buisness.
          </p>

          <div className="mt-6 flex gap-4">
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
            className="w-full max-w-md object-contain"
          />
        </div>

      </div>
    </section>
  )
}

















