import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Github, Mail } from "lucide-react"
import Image from "next/image"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Alex Kumar",
      role: "Full-Stack Developer",
      specialties: ["React", "Node.js", "REST APIs", "JavaScript"],
      bio: "Alex specializes in React, Node.js, and REST APIs with over 5 years of experience.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sara Patel",
      role: "Zoho CRM Expert",
      specialties: ["Zoho CRM", "Automation", "Workflows", "Integration"],
      bio: "Sara configures Zoho CRM systems to automate business workflows and increase productivity.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Rodriguez",
      role: "UI/UX Designer",
      specialties: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      bio: "Creative designer focused on user-centered design and modern web interfaces that provide exceptional user experiences.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Davis",
      role: "Backend Developer",
      specialties: ["PHP", "Laravel", "MySQL", "API Development"],
      bio: "Backend specialist with expertise in scalable server-side solutions and database optimization for high-performance applications.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "David Chen",
      role: "Frontend Developer",
      specialties: ["Vue.js", "TypeScript", "Tailwind CSS", "PWA"],
      bio: "Frontend expert specializing in modern JavaScript frameworks and creating responsive, performant web applications.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Lisa Johnson",
      role: "Project Manager",
      specialties: ["Agile", "Scrum", "Client Relations", "Quality Assurance"],
      bio: "Experienced project manager ensuring smooth project delivery and maintaining excellent client relationships.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our diverse team of skilled professionals brings together years of experience across different technical
                domains to deliver exceptional results for your projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>

                    <div className="flex flex-wrap gap-1 justify-center mb-4">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-center space-x-3">
                      <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                        <Github className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="h-4 w-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-muted/50 rounded-lg p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-4">Join Our Growing Team</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  We're always looking for talented freelancers to join our network. If you're passionate about
                  delivering quality work and want to be part of a collaborative team, we'd love to hear from you.
                </p>
                <Badge variant="outline" className="px-4 py-2">
                  Currently accepting applications
                </Badge>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
