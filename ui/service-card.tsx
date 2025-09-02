"use client"

import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import type React from "react"

interface ServiceCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  href?: string
  className?: string
  variant?: "default" | "featured"
  badge?: string
}

export function ServiceCard({
  title,
  description,
  icon,
  href,
  className,
  variant = "default",
  badge,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-200 group cursor-pointer relative",
        variant === "featured" && "border-blue-200 bg-blue-50 ring-1 ring-blue-200",
        className,
      )}
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
              variant === "featured" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600",
            )}
          >
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
          {href && (
            <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
              Learn more
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
