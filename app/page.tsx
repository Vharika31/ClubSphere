import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Users, Award, ImageIcon } from "lucide-react"
import AnnouncementBanner from "@/components/announcement-banner"
import EventCard from "@/components/event-card"

export default function Home() {
  // Featured events for the homepage
  const featuredEvents = [
    {
      id: 1,
      title: "CodeRush Hackathon",
      date: "March 15, 2025",
      club: "GeeksforGeeks",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 2,
      title: "Flutter Workshop",
      date: "April 2, 2025",
      club: "Google Developer Groups",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 3,
      title: "DSA Bootcamp",
      date: "February 28, 2025",
      club: "Algozenith",
      image: "/placeholder.svg?height=200&width=350",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <AnnouncementBanner message="Applications Open for GFG Technical Team!" link="/opportunities" />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cream-dark to-cream text-gray-800 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore, Engage, Elevate – ClubSphere</h1>
              <p className="text-lg mb-8 text-gray-700">
                Your gateway to student-driven clubs, activities, and opportunities at Vignan's Institute of Information
                Technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-cream-dark text-gray-800 hover:bg-cream border-2 border-cream-dark"
                >
                  <Link href="/clubs">
                    View Clubs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-cream-dark text-gray-800 hover:bg-cream-dark/10"
                >
                  <Link href="/opportunities">
                    Apply for Roles <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative h-[300px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image src="/placeholder.svg?height=600&width=800" alt="ClubSphere" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-cream-light">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clubs Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-cream w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600">
                Connect with like-minded peers and build lasting relationships through collaborative activities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-cream w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Skill Development</h3>
              <p className="text-gray-600">
                Enhance your technical and soft skills through workshops, competitions, and hands-on projects.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-cream w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Events</h3>
              <p className="text-gray-600">
                Participate in hackathons, tech talks, and industry-connected events to boost your profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Events Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Recent Events</h2>
            <Button asChild variant="outline">
              <Link href="/gallery">
                View Gallery <ImageIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cream text-gray-800 py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join a Club?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Explore our diverse range of clubs and find the perfect fit for your interests and career goals.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-cream-dark text-gray-800 hover:bg-cream-dark/90 border-2 border-cream-dark"
          >
            <Link href="/clubs">
              Explore All Clubs <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
