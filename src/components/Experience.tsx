import Image from "next/image"
import image from "../../public/image 1.png"

export default function Experience() {
  return (
    <section className="bg-[#F5AC76]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10">


        <div className="flex flex-col justify-start">
          <h1 className="text-2xl sm:text-3xl md:text-[38px] font-bold leading-snug text-[#0D082C] text-center md:text-left">
            Experience the Power of Our <br className="hidden md:block" /> Live Chat
          </h1>

          <p className="mt-4 text-[#0D082C99] text-[14px] sm:text-[16px] md:text-[16px] leading-[1.8] text-center md:text-left">
            See for yourself how our live chat can help you connect with your <br className='hidden sm:block' />
            customers and improve their experience on your website. Check out <br className='hidden sm:block' />
            a screenshot of our live chat in action.
          </p>

          <div className="mt-6 text-center md:text-left">
            <button className="bg-black text-white px-6 sm:px-7 py-3 sm:py-4 rounded-3xl hover:bg-gray-900 text-[14px] sm:text-[16px]">
              Book a Demo
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-[#0D082C] text-[16px] sm:text-[18px] font-semibold leading-[28px]">
                Improving Customer Support
              </h2>
              <p className="mt-2 text-[#0D082C99] text-[14px] sm:text-[15px] leading-[1.8]">
                A small e-commerce company implemented a live chat feature on
                their website and saw an improvement in customer satisfaction
                and an increase in sales.
              </p>
            </div>

            <div>
              <h2 className="text-[#0D082C] text-[16px] sm:text-[18px] font-semibold leading-[28px]">
                Boosting Sales
              </h2>
              <p className="mt-2 text-[#0D082C99] text-[14px] sm:text-[15px] leading-[1.8]">
                A small e-commerce company implemented a live chat feature on
                their website and saw an improvement in customer satisfaction
                and an increase in sales.
              </p>
            </div>
          </div>
        </div>

 
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <Image
            src={image}
            alt="Live Chat Screenshot"
            className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px] object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}
