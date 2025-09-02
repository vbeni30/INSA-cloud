"use client"

import { motion } from "framer-motion"
import { Cpu, HardDrive, Database, Zap, Network, BarChart3 } from "lucide-react"
import { ServiceCard } from "@/components/ui/service-card"

const services = [
  {
    title: "Compute Engine",
    description:
      "Scalable virtual machines with high-performance processors, GPUs, and custom machine types optimized for academic workloads.",
    icon: <Cpu className="h-6 w-6" />,
    href: "/compute",
    badge: "Popular",
  },
  {
    title: "Cloud Storage",
    description: "Secure, durable object storage with global edge caching and automatic data lifecycle management.",
    icon: <HardDrive className="h-6 w-6" />,
    href: "/storage",
  },
  {
    title: "Managed Databases",
    description: "Fully managed relational and NoSQL databases with automatic scaling, backups, and high availability.",
    icon: <Database className="h-6 w-6" />,
    href: "/database",
  },
  {
    title: "AI & Machine Learning",
    description: "Pre-trained models, custom ML pipelines, and GPU-accelerated training environments for research.",
    icon: <Zap className="h-6 w-6" />,
    href: "/ai-ml",
    variant: "featured" as const,
  },
  {
    title: "Networking & CDN",
    description: "Global network infrastructure with low-latency connections and advanced security features.",
    icon: <Network className="h-6 w-6" />,
    href: "/networking",
  },
  {
    title: "Analytics & Big Data",
    description: "Real-time data processing, warehousing, and visualization tools for research insights.",
    icon: <BarChart3 className="h-6 w-6" />,
    href: "/analytics",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-3">Core Services</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive cloud infrastructure for academic excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to power research, education, and institutional operations with enterprise-grade
            reliability and security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
