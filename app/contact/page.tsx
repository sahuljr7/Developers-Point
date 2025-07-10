import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Contact } from "@/components/contact"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to start your project? We'd love to hear from you. Send us a message and we'll respond as soon as
                possible.
              </p>
            </div>
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
