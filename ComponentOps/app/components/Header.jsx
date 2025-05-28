import Link from "next/link"
import { Github } from "lucide-react"

export default function Header({ activePage = "" }) {
  return (
    <nav className="border-b border-gray-800 bg-gray-900/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="ComponentOps Logo" className="w-8 h-8" />
              <span className="text-xl font-bold text-white">ComponentOps</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link 
              href="/components" 
              className={`${activePage === "components" ? "text-blue-400 font-medium" : "text-gray-300 hover:text-white"} transition-colors`}
            >
              Components
            </Link>
            <Link 
              href="/docs" 
              className={`${activePage === "docs" ? "text-blue-400 font-medium" : "text-gray-300 hover:text-white"} transition-colors`}
            >
              Documentation
            </Link>
            <Link 
              href="/about" 
              className={`${activePage === "about" ? "text-blue-400 font-medium" : "text-gray-300 hover:text-white"} transition-colors`}
            >
              About
            </Link>
            <Link
              href="https://github.com/Anuja-jayasinghe"
              className="text-gray-300 hover:text-white transition-colors"
              target="_blank"
            >
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 