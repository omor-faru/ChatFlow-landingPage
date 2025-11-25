export default function Footer() {
  return (
    <footer className="text-[#0D082C] py-12 font-sans">
      
     
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:justify-between items-start gap-6 px-4 md:px-10">

       
        <div className="flex-1">
          <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold mb-3">
            Sign Up and Start Chatting Today
          </h2>
          <p className="text-[14px] sm:text-[16px] text-[#0D082C99] leading-relaxed md:w-[90%]">
            Don’t wait any longer to start improving the user experience on your website.
            Sign up for our live chat product <br className="hidden sm:block" /> and start connecting with your customers in real-time.
          </p>
        </div>

      
        <div className="flex justify-start md:justify-end items-start">
          <button className="bg-[#0D082C] text-white px-6 py-3 sm:py-4 md:px-8 md:py-3 rounded-3xl">
            Sign Up Now
          </button>
        </div>
      </div>

 
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-4 md:px-10">
        
        <div>
          <h3 className="font-bold mb-4 text-[14px] text-[#0D082C99]">PRODUCTS</h3>
          <ul className="space-y-2">
            <li><a className="hover:underline">Download App</a></li>
            <li><a className="hover:underline">Integrations</a></li>
            <li><a className="hover:underline">Case Studies</a></li>
            <li><a className="hover:underline">API</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-[14px] text-[#0D082C99]">COMPANY</h3>
          <ul className="space-y-2">
            <li><a className="hover:underline">About Us</a></li>
            <li><a className="hover:underline">Contact</a></li>
            <li><a className="hover:underline">Privacy Policy</a></li>
            <li><a className="hover:underline">Terms of Service</a></li>
            <li><a className="hover:underline">Help</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-[14px] text-[#0D082C99]">ESSENTIALS</h3>
          <ul className="space-y-2">
            <li><a className="hover:underline">Documentation</a></li>
            <li><a className="hover:underline">Playground</a></li>
            <li><a className="hover:underline">Sandbox</a></li>
            <li><a className="hover:underline">Source Code</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-[14px] text-[#0D082C99]">GET IN TOUCH</h3>
          <ul className="space-y-2">
            <li><a className="hover:underline">Twitter</a></li>
            <li><a className="hover:underline">Facebook</a></li>
            <li><a className="hover:underline">Dribbble</a></li>
          </ul>
        </div>
      </div>

    
      <div className="text-center text-[12px] font-bold text-[#0D082C66] mt-10 px-4 md:px-10">
        COPYRIGHT © 2022 — DESIGN BY NAUVAL
      </div>

    </footer>
  )
}
