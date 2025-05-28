"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Code, Eye } from "lucide-react"
import Footer from "../components/Footer"
import Header from "../components/Header"

export default function ComponentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const components = [
    {
      id: "socialiconscircle",
      name: "Social Icons Circle",
      description: "A spinning circle of social icons with hover effects",
      category: "Social / Animation",
      tags: ["social", "animation", "circle", "icons"],
      complexity: "Medium",
      lastUpdated: "2024-01-20",
    },
    {
      id: "socialiconsmarquee",
      name: "Social Icons Marquee",
      description: "A horizontally scrolling marquee of social icons",
      category: "Social / Animation",
      tags: ["social", "animation", "marquee", "scroll"],
      complexity: "Medium",
      lastUpdated: "2024-01-20",
    },
  ]

  const categories = ["all", "UI Elements", "Layout", "Forms", "Navigation", "Data Display", "Social / Animation"]

  const filteredComponents = components.filter((component) => {
    const matchesSearch =
      component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      component.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      component.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || component.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-900">
      <Header activePage="components" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Component Library</h1>
          <p className="text-xl text-gray-300">Discover and integrate beautiful React components into your projects</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search components..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category === "all" ? "All Categories" : category}
              </button>
            ))}
          </div>
        </div>

        {/* Components Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredComponents.map((component) => (
            <div
              key={component.id}
              className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-200 hover:shadow-xl"
            >
              {/* Preview Area */}
              <div className="aspect-video bg-gray-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-white/10">{component.name}</div>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Link
                    href={`/components/${component.id}`}
                    className="p-2 bg-gray-900/80 rounded-lg text-gray-300 hover:text-white transition-colors"
                    title="View Component"
                  >
                    <Eye className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{component.name}</h3>
                  <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                    {component.category}
                  </span>
                </div>

                <p className="text-gray-300 text-sm mb-4">{component.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {component.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Complexity: {component.complexity}</span>
                  <span>Updated: {component.lastUpdated}</span>
                </div>

                <div className="mt-4 flex space-x-2">
                  <Link
                    href={`/components/${component.id}`}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded-lg transition-colors text-sm font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredComponents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto mb-4" />
              <p className="text-lg">No components found</p>
              <p className="text-sm">Try adjusting your search or filter criteria</p>
            </div>
          </div>
        )}
      </div>
      <Footer size="small" />
    </div>
  )
}
