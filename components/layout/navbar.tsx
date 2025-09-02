"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

interface NavItem {
  name: string
  link: string
}

const navItems: NavItem[] = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Solutions", link: "/solutions" },
  { name: "Pricing", link: "/pricing" },
  { name: "Contact", link: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (link: string) => {
    if (link === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(link)
  }

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav className="bg-white shadow-lg border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3" onClick={handleNavClick}>
            <Image src="/images/gotera-logo.webp" alt="GOTERA CLOUD" width={300} height={300} className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className={`px-3 py-2 text-sm font-semibold transition-all duration-200 relative ${
                  isActive(item.link)
                    ? "text-blue-600 bg-blue-50 rounded-lg"
                    : "text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg"
                }`}
                onClick={handleNavClick}
              >
                {item.name}
                {isActive(item.link) && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 hover:text-blue-600 p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className={`block px-3 py-2 text-base font-semibold rounded-lg transition-all duration-200 ${
                    isActive(item.link)
                      ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                      : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                  onClick={handleNavClick}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
