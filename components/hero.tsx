import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Welcome to <span className="text-primary">Developers Point</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We are a team of skilled freelancers from diverse technical backgrounds. Our mission is to provide
            top-quality web solutions at affordable prices.
          </p>

          <div className="mb-8">
            <p className="text-lg text-muted-foreground mb-4">
              🚀 Services include Web Development, Zoho CRM Solutions, and more.
            </p>
            <p className="text-lg text-muted-foreground">👉 Get in touch with us to build your next digital product!</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <Link href="/services">
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-muted-foreground">Quality Guaranteed</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-muted-foreground">Affordable Pricing</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-muted-foreground">Expert Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
