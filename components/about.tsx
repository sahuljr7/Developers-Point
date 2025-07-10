import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Clock } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Users,
      title: "Diverse Expertise",
      description:
        "Our team consists of freelancers from various technical domains, bringing unique perspectives to every project.",
    },
    {
      icon: Target,
      title: "Quality Focus",
      description: "We are committed to delivering high-quality work that meets and exceeds client expectations.",
    },
    {
      icon: Award,
      title: "Affordable Solutions",
      description:
        "Professional services at competitive rates, making quality development accessible to all businesses.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We understand the importance of deadlines and ensure timely delivery of all projects.",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Developers Point</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a collective of passionate freelancers from different technical backgrounds, united by our commitment
            to delivering exceptional digital solutions. Our diverse expertise allows us to tackle projects of any
            complexity while maintaining affordable pricing for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-background rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Developers Point?</h3>
              <p className="text-muted-foreground mb-6">
                In today's competitive digital landscape, you need a partner who understands both technology and
                business. Our team combines technical excellence with business acumen to deliver solutions that drive
                real results.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Proven track record of successful projects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Transparent communication throughout the project</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Post-launch support and maintenance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Flexible engagement models to suit your needs</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
