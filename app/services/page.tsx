"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Server,
  HardDrive,
  Database,
  Shield,
  Wifi,
  Globe,
  Headphones,
  GraduationCap,
  Monitor,
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useMemo } from "react"

const services = [
  {
    id: "servers",
    title: "Cloud Servers",
    description:
      "Flexible and scalable virtual machine servers designed to handle various workloads, from web hosting to enterprise applications.",
    icon: <Server className="h-8 w-8" />,
    types: ["General Purpose", "Compute Optimized", "Memory Optimized", "Storage Optimized"],
    pricing: {
      ssd: "SSD Based: (vCPU × 930) + (RAM × 210) + (Storage × 10) Birr/month",
      hdd: "HDD Based: (vCPU × 930) + (RAM × 210) + (Storage × 5) Birr/month",
    },
    popular: true,
    category: "compute",
    features: ["Auto-scaling", "Load Balancing", "24/7 Monitoring", "Backup Integration"],
  },
  {
    id: "backup",
    title: "Backup Services for Cloud Servers",
    description:
      "Automated backup solutions to protect cloud server data ensuring business continuity and data safety.",
    icon: <Database className="h-8 w-8" />,
    types: ["Full backup", "Snapshot backup", "Encrypted"],
    pricing: {
      hdd: "HDD: 11 Birr/GB/month",
    },
    category: "storage",
    features: ["Automated Scheduling", "Point-in-time Recovery", "Encryption at Rest", "Cross-region Replication"],
  },
  {
    id: "storage",
    title: "Storage and Archival Services",
    description:
      "Flexible cloud storage solutions designed to meet various performance needs, from high-speed SSD storage to cost-effective HDD storage for long-term archival.",
    icon: <HardDrive className="h-8 w-8" />,
    types: ["Cloud SSD Storage", "Cloud HDD Storage"],
    pricing: {
      ssd: "SSD: 20 Birr/GB/Month",
      hdd: "HDD: 11 Birr/GB/Month",
    },
    category: "storage",
    features: ["Tiered Storage", "Lifecycle Management", "Data Deduplication", "Compliance Ready"],
  },
  {
    id: "remote-access",
    title: "Remote Access Services",
    description: "Secure remote access solutions enabling users to connect to their cloud resources.",
    icon: <Shield className="h-8 w-8" />,
    types: ["Remote Access Portal (RAP)", "WireGuard VPN"],
    pricing: {
      rap: "RAP: Starting from 100 Birr/User/Month",
      vpn: "WireGuard VPN: Starting from 150 Birr/User/Month",
    },
    category: "security",
    features: ["Multi-factor Authentication", "Session Recording", "Access Logging", "Role-based Access"],
  },
  {
    id: "monitoring",
    title: "Monitoring and Security Services",
    description:
      "A fully managed service providing real time monitoring and security event detection. This service is managed entirely by INSA ensuring proactive management and response.",
    icon: <Monitor className="h-8 w-8" />,
    types: ["Managed SIEM Agent", "Managed Service and Health Monitoring Agent"],
    pricing: {
      siem: "Starting from 1000 Birr/SIEM-agent/month",
      monitoring: "Starting from 500 Birr/Mon-agent/month",
    },
    featured: true,
    category: "security",
    features: ["Real-time Alerts", "Threat Intelligence", "Compliance Reporting", "Incident Response"],
  },
  {
    id: "bandwidth",
    title: "Internet Bandwidth",
    description: "Scalable Internet bandwidth options to match your cloud needs.",
    icon: <Wifi className="h-8 w-8" />,
    types: ["Measured by Mbps"],
    pricing: {
      custom: "Maximum Rate limit with Custom Quote (Future Plan)",
    },
    category: "network",
    features: ["Dedicated Bandwidth", "Burst Capability", "Traffic Analytics", "QoS Management"],
  },
  {
    id: "public-ip",
    title: "Public IP",
    description: "Public IP addresses assigned exclusively to your cloud resources.",
    icon: <Globe className="h-8 w-8" />,
    types: ["Shared", "Dedicated"],
    pricing: {
      shared: "Shared: Free",
      dedicated: "Dedicated: 18 Birr/IP/Month",
    },
    category: "network",
    features: ["Static IP Assignment", "DNS Management", "Reverse DNS", "IP Reputation Monitoring"],
  },
  {
    id: "support",
    title: "Support Services",
    description:
      "24/7 technical support services tailored to help manage and troubleshoot cloud environments, ensuring smooth operations and quick resolution of technical issues.",
    icon: <Headphones className="h-8 w-8" />,
    types: [
      "Basic Support: Email support with response times during business hours",
      "Premium Support: Phone and email support with prioritized response times. With dedicated support manager",
    ],
    pricing: {
      basic: "Basic Support: Starting from 500 Birr/month",
      premium: "Premium Support: Starting from 1000 Birr/month",
    },
    category: "support",
    features: ["Dedicated Account Manager", "Priority Queue", "Knowledge Base Access", "Training Resources"],
  },
  {
    id: "training",
    title: "Custom Training and Deployment Assistance",
    description:
      "Tailored training and consulting services designed to help customers efficiently deploy, manage, and optimize their cloud environments.",
    icon: <GraduationCap className="h-8 w-8" />,
    types: ["Custom Training Sessions Only", "Deployment Assistance and Consulting Package"],
    pricing: {
      custom: "Determined based on individual customer requirements. Contact us for a customized quote.",
    },
    category: "support",
    features: ["Hands-on Training", "Best Practices Guide", "Migration Assistance", "Performance Optimization"],
  },
]

const categories = [
  { id: "all", label: "All Services", count: services.length },
  { id: "compute", label: "Compute", count: services.filter((s) => s.category === "compute").length },
  { id: "storage", label: "Storage", count: services.filter((s) => s.category === "storage").length },
  { id: "security", label: "Security", count: services.filter((s) => s.category === "security").length },
  { id: "network", label: "Network", count: services.filter((s) => s.category === "network").length },
  { id: "support", label: "Support", count: services.filter((s) => s.category === "support").length },
]

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedService, setExpandedService] = useState<string | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const filteredServices = useMemo(() => {
    let filtered = services

    if (selectedCategory !== "all") {
      filtered = filtered.filter((service) => service.category === selectedCategory)
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (service) =>
          service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.types.some((type) => type.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    return filtered
  }, [selectedCategory, searchQuery])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-surface via-surface-light to-surface py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-neutral-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full opacity-30"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-32 left-16 w-24 h-24 bg-accent/10 rounded-full opacity-20"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 font-body"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Shield className="h-4 w-4 mr-2" />
              Government Grade Cloud Services
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-6xl font-heading font-black text-foreground mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              GOTERA Cloud
              <motion.span
                className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-5xl"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Service Catalog
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-muted-foreground mb-12 leading-relaxed text-lg font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Comprehensive cloud solutions designed specifically for government agencies. Our services ensure seamless
              performance while maintaining the highest level of security and compliance.
            </motion.p>

            {/* Key Features */}
            <motion.div
              className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {[
                { icon: Shield, text: "Government Grade Security", color: "primary" },
                { icon: Server, text: "99.99% Infrastructure Uptime", color: "accent" },
                { icon: Headphones, text: "24/7 Support Available", color: "foreground" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center justify-center bg-background px-6 py-4 rounded-xl shadow-sm border ${
                    feature.color === "primary"
                      ? "border-primary/10"
                      : feature.color === "accent"
                        ? "border-accent/10"
                        : "border-border"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon
                    className={`h-5 w-5 mr-3 flex-shrink-0 ${
                      feature.color === "primary"
                        ? "text-primary"
                        : feature.color === "accent"
                          ? "text-accent"
                          : "text-foreground"
                    }`}
                  />
                  <span className="text-muted-foreground font-medium font-body">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-black text-foreground mb-6">Our Cloud Services</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg font-body">
              Choose from our comprehensive range of cloud services, each designed to meet the specific needs of
              government agencies with robust security and reliability.
            </p>
          </motion.div>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
              <div className="relative flex-1 max-w-md"></div>

              <motion.button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-4 py-3 bg-surface hover:bg-surface-light rounded-lg transition-colors font-body"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters
                {showFilters ? <ChevronUp className="h-4 w-4 ml-2" /> : <ChevronDown className="h-4 w-4 ml-2" />}
              </motion.button>
            </div>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-3 p-6 bg-surface rounded-lg border border-border">
                    {categories.map((category) => (
                      <motion.button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 font-body ${
                          selectedCategory === category.id
                            ? "bg-primary text-white shadow-lg"
                            : "bg-background text-muted-foreground hover:bg-surface-light border border-border"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {category.label} ({category.count})
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8" layout>
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  layout
                  whileHover={{ y: -5 }}
                  className="h-full"
                >
                  <Card
                    className={`h-full hover:shadow-xl transition-all duration-300 group cursor-pointer relative border-0 shadow-lg ${
                      service.featured
                        ? "bg-gradient-to-br from-surface to-surface-light ring-2 ring-primary/20"
                        : "bg-background"
                    }`}
                  >
                    {service.popular && (
                      <motion.div
                        className="absolute -top-3 left-6 z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Badge className="bg-red-500 hover:bg-red-600 text-white shadow-lg">
                          <Star className="h-3 w-3 mr-1" />
                          Most Popular
                        </Badge>
                      </motion.div>
                    )}
                    {service.featured && (
                      <motion.div
                        className="absolute -top-3 left-6 z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Badge className="bg-primary hover:bg-primary/90 text-white shadow-lg">Fully Managed</Badge>
                      </motion.div>
                    )}

                    <CardHeader className="pb-4">
                      <motion.div
                        className={`inline-flex p-4 rounded-xl mb-6 w-fit transition-colors ${
                          service.featured
                            ? "bg-primary/10 text-primary group-hover:bg-primary/20"
                            : "bg-foreground/10 text-foreground group-hover:bg-foreground/20"
                        }`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {service.icon}
                      </motion.div>
                      <CardTitle className="text-xl font-heading font-black text-foreground group-hover:text-primary transition-colors mb-3">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed text-base font-body">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide font-heading">
                            Service Types
                          </h4>
                          <ul className="space-y-3">
                            {service.types.map((type, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-start text-sm text-muted-foreground font-body"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                              >
                                <CheckCircle className="h-4 w-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
                                <span className="leading-relaxed">{type}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <motion.button
                            onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                            className="flex items-center justify-between w-full text-left font-semibold text-foreground text-sm uppercase tracking-wide mb-4 hover:text-primary transition-colors font-heading"
                            whileHover={{ scale: 1.02 }}
                          >
                            Key Features
                            {expandedService === service.id ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </motion.button>

                          <AnimatePresence>
                            {expandedService === service.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <ul className="space-y-2 mb-4">
                                  {service.features.map((feature, idx) => (
                                    <motion.li
                                      key={idx}
                                      className="flex items-center text-sm text-muted-foreground font-body"
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                                      {feature}
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="border-t border-border pt-6">
                          <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide font-heading">
                            Pricing
                          </h4>
                          <div className="space-y-2">
                            {Object.entries(service.pricing).map(([key, value]) => (
                              <div key={key} className="text-sm">
                                <span className="font-medium text-primary font-body">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4">
                          <Link href={`/services/${service.id}`} className="block">
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg transition-all duration-200 group-hover:shadow-lg font-body">
                                View Details
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            </motion.div>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredServices.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-muted-foreground mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-muted-foreground mb-2 font-heading">No services found</h3>
              <p className="text-muted-foreground font-body">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* SLA Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-black text-foreground mb-6">
              Service Level Agreements
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg font-body">
              Gotera Cloud will exert every possible effort to ensure the maximum availability of the cloud
              infrastructure created and allocated to its customers while adhering to operational functionality
              parameters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Server,
                title: "Infrastructure Uptime",
                value: "99.99%",
                description:
                  "Uptime annually for electricity and/or air conditioning systems ensuring continuous operation of your cloud infrastructure.",
                color: "primary",
              },
              {
                icon: Globe,
                title: "Cloud Accessibility",
                value: "95.95%",
                description:
                  "Uptime annually for the accessibility of the cloud infrastructure created and allocated by INSA for its clients.",
                color: "accent",
              },
            ].map((sla, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-background border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-xl font-heading font-black text-foreground">
                      <motion.div
                        className={`p-3 ${sla.color === "primary" ? "bg-primary/10" : "bg-accent/10"} rounded-lg mr-4`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <sla.icon className={`h-6 w-6 ${sla.color === "primary" ? "text-primary" : "text-accent"}`} />
                      </motion.div>
                      {sla.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      className={`text-5xl font-heading font-black ${sla.color === "primary" ? "text-primary" : "text-accent"} mb-4`}
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {sla.value}
                    </motion.div>
                    <p className="text-muted-foreground leading-relaxed font-body">{sla.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start">
                <motion.div
                  className="p-2 bg-amber-100 rounded-lg mr-4 flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Clock className="h-5 w-5 text-amber-600" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-amber-800 mb-2 font-heading">Important Notice</h4>
                  <p className="text-amber-700 leading-relaxed font-body">
                    Uptime excludes scheduled maintenance windows and unforeseen circumstances beyond INSA's control.
                    All maintenance activities are scheduled during off-peak hours with advance notification.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-black text-foreground mb-6">Terms and Conditions</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg font-body">
              Clear and transparent terms to ensure smooth service delivery and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: CheckCircle,
                title: "Pricing & Contracts",
                color: "primary",
                items: [
                  "All pricing is based on standard configurations and usage; custom solutions may incur additional costs.",
                  "Discounts available for long-term contracts.",
                  "Service modifications during the contract period may result in price adjustments. Changes will be communicated and agreed upon before implementation.",
                ],
              },
              {
                icon: Headphones,
                title: "Customer Responsibilities",
                color: "accent",
                items: [
                  "Customers are responsible for providing accurate information, timely access, and cooperation necessary for service delivery.",
                  "Regular backup and security practices are recommended for optimal service performance.",
                  "Service level agreements are maintained through collaborative partnership and clear communication.",
                ],
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-background border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-xl font-heading font-black text-foreground flex items-center">
                      <motion.div
                        className={`p-2 ${section.color === "primary" ? "bg-primary/10" : "bg-accent/10"} rounded-lg mr-3`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <section.icon
                          className={`h-5 w-5 ${section.color === "primary" ? "text-primary" : "text-accent"}`}
                        />
                      </motion.div>
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {section.items.map((item, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div
                            className={`w-2 h-2 ${section.color === "primary" ? "bg-primary" : "bg-accent"} rounded-full mt-2 mr-4 flex-shrink-0`}
                          ></div>
                          <span className="text-muted-foreground leading-relaxed font-body">{item}</span>
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

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-white/5 rounded-full"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            className="text-3xl lg:text-4xl font-heading font-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-neutral-100 font-medium px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 font-body"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent font-medium px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 font-body"
                asChild
              >
                <Link href="/solutions">Explore Solutions</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
