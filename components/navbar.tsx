"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Clubs", href: "/clubs" },
  { name: "Opportunities", href: "/opportunities" },
  { name: "Wall of Fame", href: "/wall-of-fame" },
  { name: "Gallery", href: "/gallery" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="VIIT ClubSphere Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl">ClubSphere</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-purple-700"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-cream-dark hover:bg-cream text-gray-800 border border-cream-dark">
              <Link href="/opportunities">Apply Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 z-50 bg-white transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex flex-col p-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="py-3 text-lg font-medium border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button
            asChild
            className="mt-4 bg-cream-dark hover:bg-cream text-gray-800 border border-cream-dark"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link href="/opportunities">Apply Now</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
