"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"

export function HeroSection() {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = ["We build websites.", "We integrate Zoho CRM.", "We are Developers Point."]

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex]

        if (isDeleting) {
          setCurrentText(current.substring(0, currentText.length - 1))
        } else {
          setCurrentText(current.substring(0, currentText.length + 1))
        }

        if (!isDeleting && currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentIndex, texts])

  const scrollToServices = () => {
    const element = document.querySelector("#services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 transition-colors duration-300"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-pulse transition-colors duration-300"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 dark:bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000 transition-colors duration-300"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Typewriter Effect */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 font-poppins transition-colors duration-300">
              <span className="text-primary transition-colors duration-300">{currentText}</span>
              <span className="animate-pulse text-primary">|</span>
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-medium transition-colors duration-300">
            Affordable Freelancing Web & CRM Services
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            We are a team of skilled freelancers from diverse technical backgrounds, delivering high-quality solutions
            at prices that won't break your budget.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={scrollToServices}
              className="text-lg px-8 py-4 font-medium transition-all duration-300 hover:scale-105"
            >
              Explore Services <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToAbout}
              className="text-lg px-8 py-4 font-medium transition-all duration-300 hover:scale-105 bg-transparent"
            >
              Learn About Us
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={scrollToAbout}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <ChevronDown className="h-8 w-8 mx-auto" />
              <p className="text-sm mt-2 font-medium">Scroll to explore</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
