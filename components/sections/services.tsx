"use client"

import { motion } from "framer-motion"
import { Server, HardDrive, Database, Shield, Wifi, Globe, Headphones, GraduationCap, Monitor } from "lucide-react"
import { ServiceCard } from "@/components/ui/service-card"
import { useState } from "react"
import { useRouter } from "next/navigation"

const services = [
  {
    title: "Cloud Servers",
    description:
      "Flexible and scalable virtual machine servers with General Purpose, Compute Optimized, Memory Optimized, and Storage Optimized configurations.",
    icon: <Server className="h-6 w-6" />,
    href: "/services/servers",
    badge: "Popular",
    category: "compute",
  },
  {
    title: "Backup Services",
    description:
      "Automated backup solutions with full backup, snapshot backup, and encrypted storage for business continuity.",
    icon: <Database className="h-6 w-6" />,
    href: "/services/backup",
    category: "storage",
  },
  {
    title: "Storage & Archival",
    description:
      "Flexible cloud storage solutions from high-speed SSD storage to cost-effective HDD storage for long-term archival.",
    icon: <HardDrive className="h-6 w-6" />,
    href: "/services/storage",
    category: "storage",
  },
  {
    title: "Remote Access Services",
    description:
      "Secure remote access solutions with Remote Access Portal (RAP) and WireGuard VPN for connecting to cloud resources.",
    icon: <Shield className="h-6 w-6" />,
    href: "/services/remote-access",
    variant: "featured" as const,
    category: "security",
  },
  {
    title: "Monitoring & Security",
    description:
      "Fully managed SIEM and health monitoring services providing real-time monitoring and security event detection.",
    icon: <Monitor className="h-6 w-6" />,
    href: "/services/monitoring",
    category: "security",
  },
  {
    title: "Internet Bandwidth",
    description:
      "Scalable Internet bandwidth options measured by Mbps with maximum rate limits to match your cloud needs.",
    icon: <Wifi className="h-6 w-6" />,
    href: "/services/bandwidth",
    category: "network",
  },
  {
    title: "Public IP Addresses",
    description: "Public IP addresses assigned exclusively to your cloud resources with shared and dedicated options.",
    icon: <Globe className="h-6 w-6" />,
    href: "/services/public-ip",
    category: "network",
  },
  {
    title: "Support Services",
    description:
      "24/7 technical support with Basic (email) and Premium (phone & email) support options with dedicated managers.",
    icon: <Headphones className="h-6 w-6" />,
    href: "/services/support",
    category: "support",
  },
  {
    title: "Training & Deployment",
    description:
      "Custom training sessions and deployment assistance to help efficiently deploy, manage, and optimize cloud environments.",
    icon: <GraduationCap className="h-6 w-6" />,
    href: "/services/training",
    category: "support",
  },
]

const categories = [
  { id: "all", label: "All Services", color: "bg-blue-600" },
  { id: "compute", label: "Compute", color: "bg-cyan-600" },
  { id: "storage", label: "Storage", color: "bg-blue-700" },
  { id: "security", label: "Security", color: "bg-cyan-700" },
  { id: "network", label: "Network", color: "bg-blue-800" },
  { id: "support", label: "Support", color: "bg-cyan-800" },
]

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const router = useRouter()

  const filteredServices =
    activeCategory === "all" ? services : services.filter((service) => service.category === activeCategory)

  const handleNavigation = (href: string) => {
    router.push(href)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full opacity-30"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-full opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            GOTERA G-Cloud Services
          </motion.div>
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Comprehensive cloud infrastructure for government agencies
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Nine core services designed to meet the specific needs of government institutions, supporting
            mission-critical operations with robust and secure solutions.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? `${category.color} text-white shadow-lg scale-105`
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
              whileHover={{ y: -5 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-base"
              onClick={() => handleNavigation("/services")}
            >
              Explore All Services
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
