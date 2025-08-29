"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { HardDrive, Zap, Archive, Shield, ArrowRight, CheckCircle, Clock, Database } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const storageTypes = [
  {
    name: "Cloud SSD Storage",
    description: "High-speed SSD storage for performance-critical applications",
    icon: <Zap className="h-8 w-8" />,
    features: ["High IOPS performance", "Low latency access", "NVMe SSD technology", "Real-time applications"],
    pricing: "20 Birr/GB/Month",
    popular: true,
  },
  {
    name: "Cloud HDD Storage",
    description: "Cost-effective HDD storage for long-term archival and backup",
    icon: <Archive className="h-8 w-8" />,
    features: ["Cost-effective storage", "Large capacity options", "Long-term archival", "Backup storage"],
    pricing: "11 Birr/GB/Month",
    popular: false,
  },
]

export default function StorageArchivalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <HardDrive className="h-4 w-4 mr-2" />
              Storage & Archival Services
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Flexible Cloud
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Storage Solutions
              </span>
            </motion.h1>

            <motion.p
              className="text-gray-600 mb-12 leading-relaxed text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              From high-speed SSD storage to cost-effective HDD storage for long-term archival, designed to meet various
              performance needs.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link href="/contact">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50 bg-transparent"
                >
                  View Pricing
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Storage Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Storage Options</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Choose the right storage solution for your performance and cost requirements.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {storageTypes.map((storage, index) => (
              <motion.div
                key={storage.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card
                  className={`h-full hover:shadow-xl transition-all duration-300 ${storage.popular ? "ring-2 ring-purple-500" : ""}`}
                >
                  {storage.popular && (
                    <div className="absolute -top-3 left-6 z-10">
                      <Badge className="bg-purple-500 text-white">High Performance</Badge>
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-purple-100 text-purple-600 rounded-lg mr-4">{storage.icon}</div>
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900">{storage.name}</CardTitle>
                        <div className="text-sm font-medium text-purple-600 mt-1">{storage.pricing}</div>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600 leading-relaxed">{storage.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {storage.features.map((feature, idx) => (
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Advanced Features</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Enterprise storage features designed for government and mission-critical applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Database,
                title: "Tiered Storage",
                description: "Automatic data tiering based on access patterns and performance needs",
              },
              {
                icon: Clock,
                title: "Lifecycle Management",
                description: "Automated data lifecycle policies for cost optimization",
              },
              {
                icon: Shield,
                title: "Data Deduplication",
                description: "Reduce storage costs with intelligent data deduplication",
              },
              {
                icon: CheckCircle,
                title: "Compliance Ready",
                description: "Meet government compliance requirements with audit trails",
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
                <div className="p-4 bg-purple-100 text-purple-600 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
      <section className="py-24 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Scale Your Storage Today</h2>
            <p className="text-purple-100 mb-8 text-lg max-w-2xl mx-auto">
              Get flexible, secure, and cost-effective storage solutions for your government operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                  Get Storage Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
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
