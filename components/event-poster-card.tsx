import Image from "next/image"
import { Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { ClubEvent } from "@/lib/data"

interface EventPosterCardProps {
  event: ClubEvent
}

export default function EventPosterCard({ event }: EventPosterCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image src={event.poster || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{event.date}</span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">{event.description}</p>
      </CardContent>
    </Card>
  )
}
