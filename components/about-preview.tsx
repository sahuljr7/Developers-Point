import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

export function AboutPreview() {
  const features = [
    {
      icon: Users,
      title: "Diverse Expertise",
      description: "Freelancers from various technical domains working together.",
    },
    {
      icon: Target,
      title: "Quality Focus",
      description: "Committed to delivering work that exceeds expectations.",
    },
    {
      icon: Award,
      title: "Affordable Solutions",
      description: "Professional services at competitive, budget-friendly rates.",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Who We Are</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Developers Point brings together passionate freelancers with expertise across different domains like
            front-end development, CRM systems, and back-end technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
              <CardContent className="pt-6">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-background rounded-lg p-8 md:p-12 shadow-sm">
          <h3 className="text-2xl font-bold mb-4">Ready to Learn More?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We believe in quality, transparency, and affordability. Whether you're a startup or an established business,
            we tailor our services to fit your needs.
          </p>
          <Button asChild size="lg">
            <Link href="/about">
              Read More About Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
