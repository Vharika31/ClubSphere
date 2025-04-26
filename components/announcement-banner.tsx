"use client"

import Link from "next/link"
import { X } from "lucide-react"
import { useState } from "react"

interface AnnouncementBannerProps {
  message: string
  link: string
}

export default function AnnouncementBanner({ message, link }: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-cream-dark text-gray-800 py-2 px-4 text-center relative">
      <p className="text-sm font-medium">
        {message}{" "}
        <Link href={link} className="underline font-bold">
          Apply Now
        </Link>
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
        aria-label="Close announcement"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
