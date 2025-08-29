"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Server, Cpu, HardDrive, MemoryStick, ArrowRight, CheckCircle, Shield, Clock, Zap } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const serverTypes = [
  {
    name: "General Purpose",
    description: "Balanced compute, memory, and networking resources for diverse workloads",
    icon: <Server className="h-8 w-8" />,
    features: [
      "Balanced CPU-to-memory ratio",
      "Moderate network performance",
      "Suitable for web servers",
      "Application hosting",
    ],
    pricing: "Base: 930 Birr/vCPU + 210 Birr/GB RAM",
    popular: false,
  },
  {
    name: "Compute Optimized",
    description: "High-performance processors for compute-intensive applications",
    icon: <Cpu className="h-8 w-8" />,
    features: [
      "High-performance Intel processors",
      "Optimized for CPU-intensive tasks",
      "Scientific computing",
      "Batch processing",
    ],
    pricing: "Base: 930 Birr/vCPU + 210 Birr/GB RAM",
    popular: true,
  },
  {
    name: "Memory Optimized",
    description: "Fast performance for workloads that process large data sets in memory",
    icon: <MemoryStick className="h-8 w-8" />,
    features: [
      "High memory-to-vCPU ratios",
      "In-memory databases",
      "Real-time analytics",
      "High-performance computing",
    ],
    pricing: "Base: 930 Birr/vCPU + 210 Birr/GB RAM",
    popular: false,
  },
  {
    name: "Storage Optimized",
    description: "High sequential read and write access to large data sets",
    icon: <HardDrive className="h-8 w-8" />,
    features: ["High IOPS performance", "NVMe SSD storage", "Data warehousing", "Log processing"],
    pricing: "SSD: +10 Birr/GB, HDD: +5 Birr/GB",
    popular: false,
  },
]

export default function CloudServersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Server className="h-4 w-4 mr-2" />
              Cloud Servers
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Flexible & Scalable
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Virtual Servers
              </span>
            </motion.h1>

            <motion.p
              className="text-gray-600 mb-12 leading-relaxed text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Designed to handle various workloads from web hosting to enterprise applications with government-grade
              security and reliability.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-300 text-blue-700 hover:bg-blue-50 bg-transparent"
                >
                  View Pricing
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Server Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Server Configurations</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Choose from our optimized server configurations designed for different workload requirements.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {serverTypes.map((server, index) => (
              <motion.div
                key={server.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card
                  className={`h-full hover:shadow-xl transition-all duration-300 ${server.popular ? "ring-2 ring-blue-500" : ""}`}
                >
                  {server.popular && (
                    <div className="absolute -top-3 left-6 z-10">
                      <Badge className="bg-blue-500 text-white">Most Popular</Badge>
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-100 text-blue-600 rounded-lg mr-4">{server.icon}</div>
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900">{server.name}</CardTitle>
                        <div className="text-sm font-medium text-blue-600 mt-1">{server.pricing}</div>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600 leading-relaxed">{server.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {server.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Key Features</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Enterprise-grade features built for government and mission-critical applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Security",
                description: "Government-grade security with encryption at rest and in transit",
              },
              {
                icon: Zap,
                title: "Performance",
                description: "High-performance computing with SSD storage and optimized networking",
              },
              {
                icon: Clock,
                title: "Reliability",
                description: "99.99% uptime SLA with automated failover and redundancy",
              },
              {
                icon: Server,
                title: "Scalability",
                description: "Scale resources up or down based on demand with auto-scaling",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="p-4 bg-blue-100 text-blue-600 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Deploy Your Servers?</h2>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Get started with GOTERA Cloud Servers today and experience government-grade infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Contact Sales
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
