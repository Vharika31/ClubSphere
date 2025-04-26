import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Users } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getClubBySlug, getOpportunitiesByClub } from "@/lib/data"
import MemberCard from "@/components/member-card"
import AlumniCard from "@/components/alumni-card"
import EventPosterCard from "@/components/event-poster-card"

interface ClubPageProps {
  params: {
    slug: string
  }
}

export default function ClubPage({ params }: ClubPageProps) {
  const club = getClubBySlug(params.slug)

  if (!club) {
    notFound()
  }

  const opportunities = getOpportunitiesByClub(club.name)

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Club Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative h-32 w-32 md:h-40 md:w-40 flex-shrink-0">
              <Image src={club.logo || "/placeholder.svg"} alt={`${club.name} Logo`} fill className="object-contain" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{club.name}</h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-1" />
                  <span>Lead: {club.lead}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{club.description}</p>
              {opportunities.length > 0 && (
                <Link href="/opportunities">
                  <Button className="bg-cream-dark hover:bg-cream text-gray-800 border border-cream-dark">
                    Apply for Open Roles
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Club Content Tabs */}
        <Tabs defaultValue="events" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8 bg-cream-light">
            <TabsTrigger value="events" className="data-[state=active]:bg-cream data-[state=active]:text-gray-800">
              Events
            </TabsTrigger>
            <TabsTrigger value="team" className="data-[state=active]:bg-cream data-[state=active]:text-gray-800">
              Team
            </TabsTrigger>
            <TabsTrigger value="alumni" className="data-[state=active]:bg-cream data-[state=active]:text-gray-800">
              Alumni
            </TabsTrigger>
            <TabsTrigger value="gallery" className="data-[state=active]:bg-cream data-[state=active]:text-gray-800">
              Gallery
            </TabsTrigger>
          </TabsList>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Events & Activities</h2>
            {club.events.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {club.events.map((event) => (
                  <EventPosterCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">No events available at the moment.</p>
            )}
          </TabsContent>

          {/* Team Tab */}
          <TabsContent value="team" className="space-y-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Club Lead</h2>
              <div className="flex justify-center">
                <Card className="w-full max-w-md overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4">
                        <Image
                          src={club.leadImage || "/placeholder.svg"}
                          alt={club.lead}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-1">{club.lead}</h3>
                      <p className="text-purple-700 font-medium mb-4">Club Lead (2024-25)</p>
                      <p className="text-gray-600">Leading the {club.name} club at VIIT with passion and dedication.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Current Team</h2>
            {club.team.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {club.team.map((member) => (
                  <MemberCard key={member.id} member={member} />
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">Team information coming soon.</p>
            )}
          </TabsContent>

          {/* Alumni Tab */}
          <TabsContent value="alumni" className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Wall of Fame - Past Leads & Alumni</h2>
            {club.alumni.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {club.alumni.map((alumni) => (
                  <AlumniCard key={alumni.id} alumni={alumni} />
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">Alumni information coming soon.</p>
            )}
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery" className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Event Gallery</h2>
            {club.gallery.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {club.gallery.map((image, index) => (
                  <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${club.name} Gallery Image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">Gallery images coming soon.</p>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
