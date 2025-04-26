import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { clubs } from "@/lib/data"

export default function ClubsPage() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Club Directory</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore all the student-driven clubs at VIIT and find the perfect fit for your interests and career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club) => (
            <Card key={club.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-24 w-24 mb-4">
                    <Image
                      src={club.logo || "/placeholder.svg"}
                      alt={`${club.name} Logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h2 className="text-xl font-bold mb-2">{club.name}</h2>
                  <p className="text-sm text-gray-500 mb-4">Lead: {club.lead}</p>
                  <p className="text-sm text-gray-600 mb-6 line-clamp-3">{club.description.substring(0, 120)}...</p>
                  <Link
                    href={`/club/${club.slug}`}
                    className="bg-cream-dark hover:bg-cream text-gray-800 py-2 px-4 rounded-md text-sm font-medium transition-colors border border-cream-dark"
                  >
                    View Club
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
