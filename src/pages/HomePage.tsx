import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"

export default function HomePage() {
  return (
    <div className="bg-hero-bg min-h-screen">
      <Navbar />
      <HeroSection />
    </div>
  )
}