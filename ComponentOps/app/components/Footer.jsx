import Link from "next/link"
import { Code } from "lucide-react"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer({ size = "default" }) {
  const isLarge = size === "large"

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`py-4 ${size === "small" ? "py-2" : "py-4"}`}>
          <div className="flex flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" className="h-6 w-6" />
              <span className="text-sm text-gray-400">© 2024 ComponentOps. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/Anuja-jayasinghe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/anuja-jayasinghe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/anujajayasinhe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 