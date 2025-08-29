"use client"

import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import type React from "react"
import { useRouter } from "next/navigation"

interface ServiceCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  href?: string
  className?: string
  variant?: "default" | "featured"
  badge?: string
  pricing?: string
}

export function ServiceCard({
  title,
  description,
  icon,
  href,
  className,
  variant = "default",
  badge,
  pricing,
}: ServiceCardProps) {
  const router = useRouter()

  const handleNavigation = (e: React.MouseEvent) => {
    if (href) {
      e.preventDefault()
      router.push(href)
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 100)
    }
  }

  const cardContent = (
    <div
      className={cn(
        "bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-green-300 transition-all duration-200 group cursor-pointer relative",
        variant === "featured" && "border-green-200 bg-green-50 ring-1 ring-green-200",
        className,
      )}
      onClick={handleNavigation}
    >
      {badge && (
        <div className="absolute -top-3 left-6">
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">{badge}</span>
        </div>
      )}

      <div className="flex items-start space-x-4">
        {icon && (
          <div
            className={cn(
              "flex-shrink-0 p-2 rounded-lg",
              variant === "featured" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600",
            )}
          >
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
          {pricing && <div className="text-sm font-medium text-green-600 mb-3">{pricing}</div>}
          {href && (
            <div className="flex items-center text-green-600 text-sm font-medium group-hover:text-green-700">
              Learn more
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          )}
        </div>
      </div>
    </div>
  )

  return cardContent
}
