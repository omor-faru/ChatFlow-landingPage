import { Check } from "lucide-react"

const Affordable = () => {
  const cardData = [
    {
      id: 1,
      topText: "STARTER",
      Price: "$9.99/month",
      list: [
        "Real-time chat",
        "Customization options",
        "File sharing",
        "Visitor tracking",
      ],
      endText: "Choose",
      color: "#4635F3",
    },
    {
      id: 2,
      topText: "PROFESSIONAL",
      Price: "$29.99/month",
      list: [
        'All features in the "Starter" plan',
        "Mobile app",
        "Integration with other tools",
        "Multilingual support",
      ],
      endText: "Choose",
      color: "#F5AC76",
    },
    {
      id: 3,
      topText: "ENTERPRISE",
      Price: "$99.99/month",
      list: [
        'All features in the "Professional" plan',
        "Dedicated account manager",
        "Premium support",
        "Custom integration options",
      ],
      endText: "Choose",
      color: "#FF5391",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto mt-14 md:mt-20 mb-20 px-4">
      <div className="text-center">
        <h1 className="text-[26px] sm:text-[32px] md:text-[38px] font-bold text-[#0D082C] mb-3">
          Affordable Plans for Any Business
        </h1>

        <p className="text-[14px] sm:text-[16px] text-[#0D082C99] leading-relaxed max-w-3xl mx-auto">
          Our pricing plans are designed to be affordable for businesses of all sizes.
          From our Starter plan to our Enterprise option, we have a plan that will
          fit your budget and meet your live chat needs.
        </p>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {cardData.map((item) => (
          <div
            key={item.id}
            className="border border-[#E4E4E4] rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
          >
       
            <p
              className="text-sm text-white text-center py-4 rounded-t-2xl font-bold"
              style={{ backgroundColor: item.color }}
            >
              {item.topText}
            </p>

           
            <h1 className="text-2xl sm:text-3xl font-bold my-3 text-[#0D082C] text-center pt-6">
              {item.Price}
            </h1>

        
            <ul className="space-y-3 mb-6 px-6 mt-8">
              {item.list.map((l, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 flex items-center justify-center rounded-full border-2"
                    style={{ borderColor: item.color }}
                  >
                    <Check size={12} color={item.color} />
                  </div>
                  <span className="text-[#0D082C99] text-[14px] sm:text-[15px]">
                    {l}
                  </span>
                </li>
              ))}
            </ul>

           
            <div className="px-6 pb-8">
              <button
                className="w-full py-2 text-white rounded-xl hover:opacity-90 transition text-[14px] sm:text-[15px]"
                style={{ backgroundColor: item.color }}
              >
                {item.endText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Affordable
