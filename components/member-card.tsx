import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import type { ClubMember } from "@/lib/data"

interface MemberCardProps {
  member: ClubMember
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex flex-col items-center text-center">
          <div className="relative h-24 w-24 rounded-full overflow-hidden mb-3">
            <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
          </div>
          <h3 className="font-semibold text-lg">{member.name}</h3>
          <p className="text-sm text-cream-dark">{member.role}</p>
        </div>
      </CardContent>
    </Card>
  )
}
