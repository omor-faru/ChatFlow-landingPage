


export default function Navbar() {
  return (
    <nav className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

       
        <div className="flex items-center gap-30">
          <h2 className="text-2xl font-bold">ChatFlow</h2>

          <ul className="hidden md:flex gap-8 font-medium">
            <li className="text-gray-100 cursor-pointer">Home</li>
            <li className="text-gray-400 cursor-pointer">Pricing</li>
            <li className="text-gray-400 cursor-pointer">Support</li>
            <li className="text-gray-400 cursor-pointer">Contact Us</li>
          </ul>
        </div>


        <div className="flex gap-3">
          <button className="px-4 py-1 rounded cursor-pointer">
            Login
          </button>
          <button className="px-4 py-1 rounded-lg bg-gray-300 text-black cursor-pointer">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}
