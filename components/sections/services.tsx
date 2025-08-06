"use client"

import { motion } from "framer-motion"
import { Server, HardDrive, Database, Shield, Wifi, Globe, Headphones, GraduationCap, Monitor } from "lucide-react"
import { ServiceCard } from "@/components/ui/service-card"

const services = [
  {
    title: "Cloud Servers",
    description:
      "Flexible and scalable virtual machine servers with General Purpose, Compute Optimized, Memory Optimized, and Storage Optimized configurations.",
    icon: <Server className="h-6 w-6" />,
    href: "/services/servers",
    badge: "Popular",
    pricing: "From 930 Birr/vCPU/month",
  },
  {
    title: "Backup Services",
    description:
      "Automated backup solutions with full backup, snapshot backup, and encrypted storage for business continuity.",
    icon: <Database className="h-6 w-6" />,
    href: "/services/backup",
    pricing: "11 Birr/GB/month",
  },
  {
    title: "Storage & Archival",
    description:
      "Flexible cloud storage solutions from high-speed SSD storage to cost-effective HDD storage for long-term archival.",
    icon: <HardDrive className="h-6 w-6" />,
    href: "/services/storage",
    pricing: "SSD: 20 Birr/GB, HDD: 11 Birr/GB",
  },
  {
    title: "Remote Access Services",
    description:
      "Secure remote access solutions with Remote Access Portal (RAP) and WireGuard VPN for connecting to cloud resources.",
    icon: <Shield className="h-6 w-6" />,
    href: "/services/remote-access",
    variant: "featured" as const,
    pricing: "From 100 Birr/user/month",
  },
  {
    title: "Monitoring & Security",
    description:
      "Fully managed SIEM and health monitoring services providing real-time monitoring and security event detection.",
    icon: <Monitor className="h-6 w-6" />,
    href: "/services/monitoring",
    pricing: "SIEM: 1000 Birr/agent, Monitoring: 500 Birr/agent",
  },
  {
    title: "Internet Bandwidth",
    description:
      "Scalable Internet bandwidth options measured by Mbps with maximum rate limits to match your cloud needs.",
    icon: <Wifi className="h-6 w-6" />,
    href: "/services/bandwidth",
    pricing: "Custom Quote",
  },
  {
    title: "Public IP Addresses",
    description: "Public IP addresses assigned exclusively to your cloud resources with shared and dedicated options.",
    icon: <Globe className="h-6 w-6" />,
    href: "/services/public-ip",
    pricing: "Shared: Free, Dedicated: 18 Birr/IP/month",
  },
  {
    title: "Support Services",
    description:
      "24/7 technical support with Basic (email) and Premium (phone & email) support options with dedicated managers.",
    icon: <Headphones className="h-6 w-6" />,
    href: "/services/support",
    pricing: "Basic: 500 Birr, Premium: 1000 Birr/month",
  },
  {
    title: "Training & Deployment",
    description:
      "Custom training sessions and deployment assistance to help efficiently deploy, manage, and optimize cloud environments.",
    icon: <GraduationCap className="h-6 w-6" />,
    href: "/services/training",
    pricing: "Custom Quote",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="text-green-600 font-semibold text-sm uppercase tracking-wide mb-3">INSA G-Cloud Services</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive cloud infrastructure for government agencies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nine core services designed to meet the specific needs of government institutions, supporting
            mission-critical operations with robust and secure solutions.
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
