import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-cream-light">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-cream-dark mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Button asChild className="bg-cream-dark hover:bg-cream text-gray-800 border border-cream-dark">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </main>
  )
}
