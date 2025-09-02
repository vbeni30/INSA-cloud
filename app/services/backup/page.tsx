"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Database, Shield, Clock, HardDrive, ArrowRight, CheckCircle, Lock } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const backupTypes = [
  {
    name: "Full Backup",
    description: "Complete backup of all data and system configurations",
    icon: <Database className="h-8 w-8" />,
    features: ["Complete system backup", "All files and databases", "System configurations", "Application data"],
    pricing: "11 Birr/GB/month",
    popular: true,
  },
  {
    name: "Snapshot Backup",
    description: "Point-in-time snapshots for quick recovery",
    icon: <Clock className="h-8 w-8" />,
    features: [
      "Instant point-in-time recovery",
      "Minimal storage overhead",
      "Quick backup process",
      "Incremental changes",
    ],
    pricing: "11 Birr/GB/month",
    popular: false,
  },
  {
    name: "Encrypted Backup",
    description: "Secure encrypted backup with government-grade encryption",
    icon: <Lock className="h-8 w-8" />,
    features: ["AES-256 encryption", "Secure key management", "Compliance ready", "End-to-end security"],
    pricing: "11 Birr/GB/month",
    popular: false,
  },
]

export default function BackupServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-cyan-50 py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Database className="h-4 w-4 mr-2" />
              Backup Services
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Automated Backup
              <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </motion.h1>

            <motion.p
              className="text-gray-600 mb-12 leading-relaxed text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Protect your cloud server data with automated backup solutions ensuring business continuity and data
              safety with government-grade security.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link href="/contact">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-300 text-green-700 hover:bg-green-50 bg-transparent"
                >
                  View Pricing
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Backup Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Backup Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Choose from our comprehensive backup solutions designed to protect your critical data.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {backupTypes.map((backup, index) => (
              <motion.div
                key={backup.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card
                  className={`h-full hover:shadow-xl transition-all duration-300 ${backup.popular ? "ring-2 ring-green-500" : ""}`}
                >
                  {backup.popular && (
                    <div className="absolute -top-3 left-6 z-10">
                      <Badge className="bg-green-500 text-white">Recommended</Badge>
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-green-100 text-green-600 rounded-lg mr-4">{backup.icon}</div>
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900">{backup.name}</CardTitle>
                        <div className="text-sm font-medium text-green-600 mt-1">{backup.pricing}</div>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600 leading-relaxed">{backup.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {backup.features.map((feature, idx) => (
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
              Advanced backup features designed for government and enterprise requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Automated Scheduling",
                description: "Set up automated backup schedules with flexible timing options",
              },
              {
                icon: Shield,
                title: "Point-in-time Recovery",
                description: "Restore data to any specific point in time with precision",
              },
              {
                icon: Lock,
                title: "Encryption at Rest",
                description: "All backup data encrypted with AES-256 government-grade encryption",
              },
              {
                icon: HardDrive,
                title: "Cross-region Replication",
                description: "Backup data replicated across multiple secure data centers",
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
                <div className="p-4 bg-green-100 text-green-600 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
      <section className="py-24 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Protect Your Data Today</h2>
            <p className="text-green-100 mb-8 text-lg max-w-2xl mx-auto">
              Don't risk data loss. Set up automated backups with GOTERA Cloud Backup Services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                  Start Backup Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
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
