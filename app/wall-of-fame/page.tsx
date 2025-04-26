import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Award } from "lucide-react"
import { getAllAlumni } from "@/lib/data"

export default function WallOfFamePage() {
  const alumni = getAllAlumni()

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Wall of Fame</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrating our alumni who have made significant contributions to VIIT clubs and gone on to achieve great
            things.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {alumni.map((alumni) => (
            <Card key={alumni.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4">
                    <Image src={alumni.image || "/placeholder.svg"} alt={alumni.name} fill className="object-cover" />
                  </div>
                  <h3 className="font-semibold text-xl mb-1">{alumni.name}</h3>
                  <div className="flex items-center text-purple-700 text-sm mb-3">
                    <Award className="h-4 w-4 mr-1" />
                    <span>
                      {alumni.role} ({alumni.year})
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <Briefcase className="h-4 w-4 mr-1" />
                    <span>{alumni.currentPosition}</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {/* @ts-ignore */}
                    {alumni.club && `${alumni.club} Club`}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
