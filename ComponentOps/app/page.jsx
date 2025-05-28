import Link from "next/link"
import { ArrowRight, Code, Download, Eye, Github, Star, Users } from "lucide-react"
import Footer from "./components/Footer"

export default function HomePage() {
  const stats = [
    { label: "Components", value: "4+", icon: Code },
    { label: "Downloads", value: "1.2K", icon: Download },
    { label: "Stars", value: "156", icon: Star },
    { label: "Users", value: "89", icon: Users },
  ]

  const featuredComponents = [
    
    {
      id: "socialiconscircle",
      name: "Social Icons Circle",
      description: "A spinning circle of social icons with hover effects",
      category: "Social / Animation",
      preview: "/api/placeholder/300/200",
    },
    {
      id: "socialiconsmarquee",
      name: "Social Icons Marquee",
      description: "A horizontally scrolling marquee of social icons",
      category: "Social / Animation",
      preview: "/api/placeholder/300/200",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <img src="/logo.png" alt="ComponentOps Logo" className="w-8 h-8" />
                <span className="text-xl font-bold text-white">ComponentOps</span>
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/components" className="text-gray-300 hover:text-white transition-colors">
                Components
              </Link>
              <Link href="/docs" className="text-gray-300 hover:text-white transition-colors">
                Documentation
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
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

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%239C92AC&quot; fillOpacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Build Faster with
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Reusable Components
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover, preview, and integrate beautiful React components into your projects. Save time and build
              consistent UIs with our growing collection of production-ready components.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/components"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Browse Components
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-200"
              >
                <Eye className="mr-2 w-5 h-5" />
                View Documentation
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Components */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Components</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Start with these popular components and build amazing user interfaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredComponents.map((component) => (
              <Link key={component.id} href={`/components/${component.id}`} className="group block">
                <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-200 hover:shadow-xl">
                  <div className="aspect-video bg-gray-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-white/10">{component.name}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {component.name}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                        {component.category}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">{component.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/components"
              className="inline-flex items-center px-6 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-200"
            >
              View All Components
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to accelerate your development?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join developers who are building faster with our component library
          </p>
          <Link
            href="/components"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer size="large" />
    </div>
  )
}
