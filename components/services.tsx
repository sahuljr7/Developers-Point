import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Globe, Settings, Palette, Code, Database, Smartphone, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      features: ["React & Next.js", "Node.js Backend", "Responsive Design", "SEO Optimization"],
      price: "Starting from $500",
    },
    {
      icon: Settings,
      title: "Zoho CRM Solutions",
      description: "Complete Zoho CRM setup, customization, and integration services.",
      features: ["CRM Setup", "Custom Fields", "Workflow Automation", "Third-party Integration"],
      price: "Starting from $300",
    },
    {
      icon: Palette,
      title: "Custom Website Design",
      description: "Beautiful, user-friendly designs tailored to your brand and business needs.",
      features: ["UI/UX Design", "Brand Identity", "Prototyping", "Design Systems"],
      price: "Starting from $400",
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "Modern, interactive frontend solutions using the latest frameworks.",
      features: ["React/Vue.js", "TypeScript", "Tailwind CSS", "Performance Optimization"],
      price: "Starting from $350",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions and API development for your applications.",
      features: ["RESTful APIs", "Database Design", "Authentication", "Cloud Deployment"],
      price: "Starting from $450",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive designs that work perfectly across all devices and screen sizes.",
      features: ["Mobile Optimization", "Cross-browser Testing", "Performance Tuning", "PWA Development"],
      price: "Starting from $250",
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
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
                  <Link href="#contact">
                    Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-background rounded-lg p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Something Custom?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't see exactly what you're looking for? We specialize in custom solutions tailored to your specific
              business needs. Let's discuss your project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#contact">
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
  )
}
