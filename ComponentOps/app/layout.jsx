import "./globals.css"

export const metadata = {
  title: "ComponentOps - React Component Library",
  description: "Discover, preview, and integrate beautiful React components into your projects.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white antialiased">{children}</body>
    </html>
  )
}
