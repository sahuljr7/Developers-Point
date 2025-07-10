import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Globe, Settings, Palette, Wrench, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: "Custom Website Development",
      description: "Responsive, SEO-friendly websites tailored to your business.",
      features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Cross-browser Compatible"],
      price: "Starting from $500",
    },
    {
      icon: Settings,
      title: "Zoho CRM Setup & Integration",
      description: "Full setup, automation, and workflow customization.",
      features: ["CRM Configuration", "Workflow Automation", "Data Migration", "Third-party Integration"],
      price: "Starting from $300",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Clean and modern interfaces that provide a great user experience.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "Starting from $400",
    },
    {
      icon: Wrench,
      title: "Website Maintenance & Support",
      description: "Ongoing support to keep your site running smoothly.",
      features: ["Regular Updates", "Security Monitoring", "Performance Optimization", "24/7 Support"],
      price: "Starting from $100/month",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We offer a comprehensive range of development and design services to help your business succeed in the
                digital world. All services come with our quality guarantee and ongoing support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="relative hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {service.price}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{service.description}</p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                      asChild
                    >
                      <Link href="/contact">
                        Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 bg-muted/50 rounded-lg p-8 md:p-12">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Something Custom?</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Don't see exactly what you're looking for? We specialize in custom solutions tailored to your specific
                  business needs. Let's discuss your project and create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Discuss Custom Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    View Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
