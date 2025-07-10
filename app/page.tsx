import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutPreview } from "@/components/about-preview"
import { ServicesPreview } from "@/components/services-preview"
import { ContactPreview } from "@/components/contact-preview"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutPreview />
        <ServicesPreview />
        <ContactPreview />
      </main>
      <Footer />
    </div>
  )
}
