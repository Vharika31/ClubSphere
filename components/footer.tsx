import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ClubSphere</h3>
            <p className="text-gray-400">
              Explore, Engage, Elevate – Your gateway to student-driven clubs at Vignan's Institute of Information
              Technology.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/clubs" className="text-gray-400 hover:text-white transition">
                  Clubs
                </Link>
              </li>
              <li>
                <Link href="/opportunities" className="text-gray-400 hover:text-white transition">
                  Opportunities
                </Link>
              </li>
              <li>
                <Link href="/wall-of-fame" className="text-gray-400 hover:text-white transition">
                  Wall of Fame
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Popular Clubs</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/club/gfg" className="text-gray-400 hover:text-white transition">
                  GeeksforGeeks
                </Link>
              </li>
              <li>
                <Link href="/club/gdg" className="text-gray-400 hover:text-white transition">
                  Google Developer Groups
                </Link>
              </li>
              <li>
                <Link href="/club/az" className="text-gray-400 hover:text-white transition">
                  Algozenith
                </Link>
              </li>
              <li>
                <Link href="/club/acm" className="text-gray-400 hover:text-white transition">
                  ACM
                </Link>
              </li>
              <li>
                <Link href="/club/codechef" className="text-gray-400 hover:text-white transition">
                  CodeChef Club
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <p className="mt-4 text-gray-400">
              Vignan's Institute of Information Technology
              <br />
              Visakhapatnam, Andhra Pradesh
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} ClubSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
