"use client"

import { cn } from "@/lib/utils"
import type React from "react"

interface CloudSectionProps {
  title: string
  subtitle?: string
  description?: string
  children: React.ReactNode
  className?: string
  background?: "white" | "gray" | "blue"
  centered?: boolean
}

export const CloudSection = ({
  title,
  subtitle,
  description,
  children,
  className,
  background = "white",
  centered = true,
}: CloudSectionProps) => {
  const bgClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    blue: "bg-gradient-to-br from-blue-50 to-slate-50",
  }

  return (
    <section className={cn("py-16 lg:py-20", bgClasses[background], className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle || description) && (
          <div className={cn("mb-12 lg:mb-16", centered && "text-center")}>
            {subtitle && (
              <div className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-3">{subtitle}</div>
            )}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
            {description && <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
