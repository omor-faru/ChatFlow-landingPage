import Affordable from "@/components/Affordble"
import Experience from "@/components/Experience"
import Features from "@/components/Features"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <>
    <div className="navbar h-[777px]">
      <Navbar />
      <Hero />
      </div>

      <Features />
      <Experience/>
      <Affordable/>
      <Footer/>
    </>
  )
}
