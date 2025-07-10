"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Settings, Palette, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export function ServicesPreview() {
  const services = [
    {
      icon: Globe,
      title: "Custom Website Development",
      description: "Responsive, SEO-friendly websites tailored to your business needs.",
      features: ["Responsive Design", "SEO Optimization", "Fast Loading"],
      price: "Starting from $500",
    },
    {
      icon: Settings,
      title: "Zoho CRM Setup & Integration",
      description: "Complete CRM setup, automation, and workflow customization.",
      features: ["CRM Configuration", "Workflow Automation", "Data Migration"],
      price: "Starting from $300",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Clean and modern interfaces that provide great user experience.",
      features: ["User Research", "Prototyping", "Design Systems"],
      price: "Starting from $400",
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins transition-colors duration-300">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            We offer a comprehensive range of development and design services to help your business succeed in the
            digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 group border-border"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-primary transition-colors duration-300" />
                  </div>
                  <Badge variant="outline" className="text-xs border-border transition-colors duration-300">
                    {service.price}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-poppins transition-colors duration-300">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 flex-shrink-0 transition-colors duration-300" />
                      <span className="text-sm transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-muted/50 dark:bg-muted/30 rounded-lg p-8 md:p-12 transition-colors duration-300">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 font-poppins transition-colors duration-300">
            Explore All Our Services
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            From web development to CRM integration, we have the expertise to handle all your digital needs. View our
            complete service portfolio and get detailed pricing information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="font-medium transition-all duration-300 hover:scale-105">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.querySelector("#contact")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="font-medium transition-all duration-300 hover:scale-105"
            >
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
