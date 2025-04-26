"use client"

import { useState } from "react"
import Image from "next/image"
import { getAllGalleryImages, clubs } from "@/lib/data"
import { Button } from "@/components/ui/button"

export default function GalleryPage() {
  const allImages = getAllGalleryImages()
  const [selectedClub, setSelectedClub] = useState<string | null>(null)

  const filteredImages = selectedClub ? allImages.filter((item) => item.club === selectedClub) : allImages

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Event Gallery</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through photos from various club events and activities at VIIT.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={selectedClub === null ? "default" : "outline"}
            className={
              selectedClub === null ? "bg-cream-dark hover:bg-cream text-gray-800 border border-cream-dark" : ""
            }
            onClick={() => setSelectedClub(null)}
          >
            All Clubs
          </Button>
          {clubs.map((club) => (
            <Button
              key={club.id}
              variant={selectedClub === club.name ? "default" : "outline"}
              className={
                selectedClub === club.name ? "bg-cream-dark hover:bg-cream text-gray-800 border border-cream-dark" : ""
              }
              onClick={() => setSelectedClub(club.name)}
            >
              {club.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredImages.map((item, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={`${item.club} Gallery Image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-sm">
                {item.club}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
