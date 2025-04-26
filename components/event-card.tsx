import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface EventCardProps {
  event: {
    id: number
    title: string
    date: string
    club: string
    image: string
  }
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{event.date}</span>
        </div>
        <p className="text-sm text-gray-600 mb-3">Organized by {event.club}</p>
        <Link
          href={`/club/${event.club.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-sm text-purple-700 font-medium hover:underline"
        >
          View Club →
        </Link>
      </CardContent>
    </Card>
  )
}
