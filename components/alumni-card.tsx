import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase } from "lucide-react"
import type { ClubAlumni } from "@/lib/data"

interface AlumniCardProps {
  alumni: ClubAlumni
}

export default function AlumniCard({ alumni }: AlumniCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4">
            <Image src={alumni.image || "/placeholder.svg"} alt={alumni.name} fill className="object-cover" />
          </div>
          <h3 className="font-semibold text-lg mb-1">{alumni.name}</h3>
          <p className="text-sm text-cream-dark mb-2">
            {alumni.role} ({alumni.year})
          </p>
          <div className="flex items-center text-gray-600 text-sm">
            <Briefcase className="h-4 w-4 mr-1" />
            <span>{alumni.currentPosition}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
