"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { HardDrive, CheckCircle, ArrowRight, Shield, Clock, Database, Zap, Archive, FileCheck } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const storageTypes = [
  {
    name: "Cloud SSD Storage",
    description: "High-performance SSD storage for applications requiring fast data access and low latency.",
    price: "20 Birr/GB/Month",
    features: [
      "High IOPS performance",
      "Low latency access",
      "Ideal for databases",
      "Real-time applications",
      "Automatic scaling",
    ],
    icon: <Zap className="h-6 w-6" />,
    color: "primary",
  },
  {
    name: "Cloud HDD Storage",
    description: "Cost-effective HDD storage perfect for long-term archival and backup solutions.",
    price: "11 Birr/GB/Month",
    features: [
      "Cost-effective solution",
      "Large capacity storage",
      "Perfect for archival",
      "Backup storage",
      "Long-term retention",
    ],
    icon: <Archive className="h-6 w-6" />,
    color: "accent",
  },
]

const keyFeatures = [
  {
    icon: <Database className="h-6 w-6" />,
    title: "Tiered Storage",
    description: "Automatically move data between storage tiers based on access patterns and cost optimization.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Lifecycle Management",
    description: "Automated policies to manage data lifecycle from creation to deletion or archival.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Data Deduplication",
    description: "Reduce storage costs by eliminating duplicate data while maintaining data integrity.",
  },
  {
    icon: <FileCheck className="h-6 w-6" />,
    title: "Compliance Ready",
    description: "Meet regulatory requirements with built-in compliance features and audit trails.",
  },
]

export default function StorageArchivalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-surface via-surface-light to-surface py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-neutral-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <HardDrive className="h-4 w-4 mr-2" />
              Storage & Archival Solutions
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-6xl font-heading font-black text-foreground mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Flexible Cloud
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Storage Solutions
              </span>
            </motion.h1>

            <motion.p
              className="text-muted-foreground mb-12 leading-relaxed text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Flexible cloud storage solutions designed to meet various performance needs, from high-speed SSD storage
              to cost-effective HDD storage for long-term archival and compliance requirements.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                <Link href="/contact">Get Custom Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Storage Types */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-black text-foreground mb-6">Storage Options</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Choose the right storage solution for your needs, from high-performance SSD to cost-effective HDD storage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {storageTypes.map((storage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-background border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        className={`p-3 ${storage.color === "primary" ? "bg-primary/10" : "bg-accent/10"} rounded-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className={storage.color === "primary" ? "text-primary" : "text-accent"}>
                          {storage.icon}
                        </div>
                      </motion.div>
                      <Badge
                        className={`${storage.color === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`}
                      >
                        {storage.price}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-heading font-black text-foreground">{storage.name}</CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {storage.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {storage.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-black text-foreground mb-6">Key Features</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Advanced storage management features designed to optimize performance, reduce costs, and ensure
              compliance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-background border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
                  <CardHeader className="pb-4">
                    <motion.div
                      className="mx-auto p-3 bg-primary/10 rounded-lg w-fit mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-primary">{feature.icon}</div>
                    </motion.div>
                    <CardTitle className="text-lg font-heading font-black text-foreground">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Details */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-black text-foreground mb-6">Transparent Pricing</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Simple, predictable pricing based on your storage needs. No hidden fees or complex calculations.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-surface to-surface-light border-0 shadow-xl">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-heading font-black text-foreground mb-4">
                    Storage Pricing Structure
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-lg">
                    Pay only for what you use with our flexible storage pricing model
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <motion.div
                        className="text-4xl font-heading font-black text-primary mb-2"
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        viewport={{ once: true }}
                      >
                        20 Birr
                      </motion.div>
                      <p className="text-muted-foreground mb-4">per GB/Month</p>
                      <Badge className="bg-primary/10 text-primary mb-4">SSD Storage</Badge>
                      <p className="text-sm text-muted-foreground">
                        High-performance storage for demanding applications
                      </p>
                    </div>
                    <div className="text-center">
                      <motion.div
                        className="text-4xl font-heading font-black text-accent mb-2"
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        11 Birr
                      </motion.div>
                      <p className="text-muted-foreground mb-4">per GB/Month</p>
                      <Badge className="bg-accent/10 text-accent mb-4">HDD Storage</Badge>
                      <p className="text-sm text-muted-foreground">Cost-effective storage for archival and backup</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            className="text-3xl lg:text-4xl font-heading font-black mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Optimize Your Storage?
          </motion.h2>
          <motion.p
            className="text-white/90 mb-12 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get started with our flexible storage solutions today. Our team will help you choose the right storage mix
            for your specific needs.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-neutral-100 font-medium px-8 py-4 text-lg"
              asChild
            >
              <Link href="/contact">
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent font-medium px-8 py-4 text-lg"
              asChild
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
