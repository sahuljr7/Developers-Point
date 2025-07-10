import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Github, Mail } from "lucide-react"
import Image from "next/image"

export function Team() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Full Stack Developer",
      specialties: ["React", "Node.js", "Python", "AWS"],
      bio: "Experienced full-stack developer with 6+ years in web development and cloud solutions.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Chen",
      role: "Zoho CRM Specialist",
      specialties: ["Zoho CRM", "Automation", "Integration", "Analytics"],
      bio: "Zoho certified expert specializing in CRM customization and business process automation.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Rodriguez",
      role: "UI/UX Designer",
      specialties: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      bio: "Creative designer focused on user-centered design and modern web interfaces.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Davis",
      role: "Backend Developer",
      specialties: ["PHP", "Laravel", "MySQL", "API Development"],
      bio: "Backend specialist with expertise in scalable server-side solutions and database optimization.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section id="team" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of skilled professionals brings together years of experience across different technical
            domains to deliver exceptional results for your projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          <div className="bg-muted rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-4">Join Our Growing Team</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented freelancers to join our network. If you're passionate about delivering
              quality work and want to be part of a collaborative team, we'd love to hear from you.
            </p>
            <Badge variant="outline" className="px-4 py-2">
              Currently accepting applications
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
