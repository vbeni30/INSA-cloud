"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Search, Menu, X } from "lucide-react"
import { useState } from "react"

export const CloudNavbar = ({
  className,
}: {
  className?: string
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Products", link: "/products", hasDropdown: true },
    { name: "Solutions", link: "/solutions", hasDropdown: true },
    { name: "Pricing", link: "/pricing" },
    { name: "Documentation", link: "/docs" },
    { name: "Support", link: "/support", hasDropdown: true },
    { name: "Partners", link: "/partners" },
    { name: "Services", link: "/services" },
  ]

  return (
    <header className={cn("bg-white border-b border-gray-200 sticky top-0 z-50", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">IC</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">INSA Cloud</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <div key={idx} className="relative group">
                <Link
                  href={item.link}
                  className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg border border-gray-200 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1">
                    <div className="py-2">
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                        Overview
                      </Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                        Features
                      </Link>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                        Case Studies
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <Search className="h-5 w-5" />
            </button>
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                href="/signin"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>
            <button
              className="lg:hidden p-2 text-gray-500 hover:text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <Link
                  href="/signin"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="block px-3 py-2 text-base font-medium bg-blue-600 text-white rounded-md mt-2 text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
