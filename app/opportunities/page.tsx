import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getAllOpportunities, clubs } from "@/lib/data"

export default function OpportunitiesPage() {
  const opportunities = getAllOpportunities()

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Club Opportunities</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover open roles in various clubs and apply to be a part of the vibrant student community at VIIT.
          </p>
        </div>

        {/* Application Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Application Timeline</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-1 bg-cream transform -translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-start-2 relative">
                <div className="absolute left-0 md:-left-6 top-0 w-4 h-4 rounded-full bg-cream-dark transform -translate-x-1/2"></div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">Applications Open</h3>
                    <p className="text-gray-600 mb-2">April 1 - April 30, 2025</p>
                    <p className="text-sm">Submit your applications for various club roles.</p>
                  </CardContent>
                </Card>
              </div>

              <div className="md:col-start-1 md:text-right relative">
                <div className="absolute left-0 md:left-auto md:right-0 top-0 w-4 h-4 rounded-full bg-cream-dark md:transform md:translate-x-1/2"></div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">Application Review</h3>
                    <p className="text-gray-600 mb-2">May 1 - May 10, 2025</p>
                    <p className="text-sm">Club leads review applications and shortlist candidates.</p>
                  </CardContent>
                </Card>
              </div>

              <div className="md:col-start-2 relative">
                <div className="absolute left-0 md:-left-6 top-0 w-4 h-4 rounded-full bg-cream-dark transform -translate-x-1/2"></div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">Interviews</h3>
                    <p className="text-gray-600 mb-2">May 15 - May 25, 2025</p>
                    <p className="text-sm">Shortlisted candidates will be called for interviews.</p>
                  </CardContent>
                </Card>
              </div>

              <div className="md:col-start-1 md:text-right relative">
                <div className="absolute left-0 md:left-auto md:right-0 top-0 w-4 h-4 rounded-full bg-cream-dark md:transform md:translate-x-1/2"></div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">Results</h3>
                    <p className="text-gray-600 mb-2">June 1, 2025</p>
                    <p className="text-sm">Final selection results will be announced.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">How to Apply</h2>
          <Card>
            <CardContent className="p-6">
              <ol className="space-y-4 list-decimal list-inside">
                <li className="text-gray-800">
                  <span className="font-medium">Review the available positions</span>
                  <p className="text-gray-600 ml-6 mt-1">
                    Look through the open roles listed below and find positions that match your skills and interests.
                  </p>
                </li>
                <li className="text-gray-800">
                  <span className="font-medium">Prepare your application</span>
                  <p className="text-gray-600 ml-6 mt-1">
                    Create a resume highlighting your relevant skills and experiences. Write a brief statement about why
                    you're interested in the role.
                  </p>
                </li>
                <li className="text-gray-800">
                  <span className="font-medium">Submit your application</span>
                  <p className="text-gray-600 ml-6 mt-1">
                    Send your application to the respective club's email address with the subject line "Application for
                    [Role Name]".
                  </p>
                </li>
                <li className="text-gray-800">
                  <span className="font-medium">Follow up</span>
                  <p className="text-gray-600 ml-6 mt-1">
                    If you don't receive a confirmation within 48 hours, feel free to follow up with the club lead.
                  </p>
                </li>
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* Quotes from Club Leads */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Words from Our Club Leads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-cream-light to-cream border-none">
              <CardContent className="p-6">
                <blockquote className="text-gray-800 italic">
                  "Being part of a club is not just about adding a line to your resume. It's about growing as a person,
                  developing skills, and making connections that last a lifetime."
                </blockquote>
                <div className="mt-4 text-right">
                  <p className="font-semibold">Harika Vavilapalli</p>
                  <p className="text-sm text-gray-600">GFG Lead 2025</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-cream-light to-cream border-none">
              <CardContent className="p-6">
                <blockquote className="text-gray-800 italic">
                  "The best way to learn is by doing. Join a club, take on responsibilities, make mistakes, and grow.
                  That's what college life is all about."
                </blockquote>
                <div className="mt-4 text-right">
                  <p className="font-semibold">Himavarshini Mahapatruni</p>
                  <p className="text-sm text-gray-600">GDG Lead 2025</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Available Positions */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Available Positions</h2>
          <div className="grid grid-cols-1 gap-6">
            {opportunities.map((opportunity) => {
              const club = clubs.find((c) => c.name === opportunity.club)

              return (
                <Card key={opportunity.id} className="overflow-hidden">
                  <CardHeader className="bg-purple-50 pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge className="mb-2 bg-cream-dark text-gray-800">{opportunity.club}</Badge>
                        <CardTitle>{opportunity.role}</CardTitle>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Deadline: {opportunity.deadline}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">{opportunity.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {opportunity.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {club && (
                      <div className="flex justify-end">
                        <Button asChild className="bg-cream-dark hover:bg-cream text-gray-800 border border-cream-dark">
                          <Link href={`/club/${club.slug}`}>View Club</Link>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}
