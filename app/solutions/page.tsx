"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Server,
  Database,
  Network,
  Users,
  ArrowRight,
  CheckCircle,
  Cloud,
  Lock,
  Zap,
  Monitor,
  ChevronDown,
  ChevronUp,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function SolutionsPage() {
  const [expandedModel, setExpandedModel] = useState<number | null>(null)
  const [activeDefinition, setActiveDefinition] = useState(0)
  const [hoveredSolution, setHoveredSolution] = useState<number | null>(null)

  const cloudModels = [
    {
      icon: Cloud,
      title: "Infrastructure as a Service (IaaS)",
      description: "Cloud service model providing virtualized computing resources over the internet",
      features: ["Virtual Machine Servers", "Storage Solutions", "Network Infrastructure", "Backup Services"],
      services: ["Cloud Servers", "Storage & Archival", "Public IP", "Internet Bandwidth"],
      benefits:
        "Complete control over your computing infrastructure with the flexibility to scale resources up or down based on demand.",
      details:
        "IaaS provides the fundamental building blocks for cloud IT infrastructure. Government agencies can rent IT infrastructure—servers, virtual machines, storage, networks, and operating systems—from a cloud provider on a pay-as-you-use basis.",
      useCases: [
        "Development and testing environments",
        "Website hosting",
        "Storage and backup",
        "High-performance computing",
      ],
    },
    {
      icon: Lock,
      title: "Platform as a Service (PaaS)",
      description:
        "Cloud service model offering hardware and software tools over the internet for application development",
      features: ["Development Platforms", "Database Management", "Application Hosting", "API Management"],
      services: ["Remote Access Services", "Monitoring & Security", "Support Services"],
      benefits:
        "Focus on application development while we manage the underlying infrastructure and platform components.",
      details:
        "PaaS provides a complete development and deployment environment in the cloud, with resources that enable government agencies to deliver everything from simple cloud-based apps to sophisticated, cloud-enabled enterprise applications.",
      useCases: [
        "Application development",
        "API development and management",
        "Business analytics",
        "Database management",
      ],
    },
    {
      icon: Zap,
      title: "Software as a Service (SaaS)",
      description:
        "Cloud service model delivering software applications over the internet, typically on a subscription basis",
      features: ["Ready-to-use Applications", "Automatic Updates", "Multi-tenant Architecture", "Subscription Based"],
      services: ["Custom Training", "Deployment Assistance", "Managed Services"],
      benefits:
        "Access fully functional applications without the need for installation, maintenance, or infrastructure management.",
      details:
        "SaaS allows government agencies to connect to and use cloud-based apps over the Internet. Common examples include email, calendaring, and office tools. SaaS provides a complete software solution that you purchase on a pay-as-you-go basis.",
      useCases: [
        "Email and collaboration",
        "Customer relationship management",
        "Enterprise resource planning",
        "Document management",
      ],
    },
  ]

  const solutions = [
    {
      icon: Server,
      title: "Compute Solutions",
      description:
        "Scalable virtual machine servers designed to handle various workloads from web hosting to enterprise applications",
      services: ["Cloud Servers", "Backup Services"],
      benefits: [
        "99.99% Uptime SLA",
        "Auto-scaling Capabilities",
        "Multiple Server Types",
        "SSD & HDD Storage Options",
      ],
      pricing: "Starting from calculated rates based on vCPU, RAM, and storage requirements",
      stats: { uptime: "99.99%", scaling: "Auto", types: "4+" },
    },
    {
      icon: Database,
      title: "Storage Solutions",
      description:
        "Flexible cloud storage solutions for various performance needs, from high-speed SSD to cost-effective HDD storage",
      services: ["Storage & Archival Services", "Backup Services"],
      benefits: ["Cost-effective HDD Storage", "High-performance SSD", "Automated Backup Systems", "Data Encryption"],
      pricing: "SSD: 20 Birr/GB/Month | HDD: 11 Birr/GB/Month",
      stats: { ssd: "20 Birr/GB", hdd: "11 Birr/GB", encryption: "256-bit" },
    },
    {
      icon: Network,
      title: "Connectivity Solutions",
      description: "Secure network access and internet connectivity options to match your cloud infrastructure needs",
      services: ["Remote Access Services", "Internet Bandwidth", "Public IP"],
      benefits: ["VPN Access", "Dedicated IP Addresses", "Scalable Bandwidth", "Secure Remote Connections"],
      pricing: "RAP: 100 Birr/User/Month | VPN: 150 Birr/User/Month",
      stats: { vpn: "WireGuard", ips: "Dedicated", access: "24/7" },
    },
    {
      icon: Monitor,
      title: "Security Solutions",
      description:
        "Comprehensive security monitoring and threat detection managed entirely by INSA with proactive response",
      services: ["Monitoring & Security Services"],
      benefits: ["24/7 SOC Monitoring", "SIEM Integration", "Real-time Threat Detection", "Incident Response"],
      pricing: "SIEM: 1000 Birr/agent/month | Monitoring: 500 Birr/agent/month",
      featured: true,
      stats: { monitoring: "24/7", response: "<1hr", threats: "Real-time" },
    },
    {
      icon: Users,
      title: "Support Solutions",
      description: "Professional support and training services to help manage and optimize your cloud environments",
      services: ["Support Services", "Custom Training & Deployment"],
      benefits: [
        "24/7 Technical Support",
        "Dedicated Support Managers",
        "Custom Training Programs",
        "Deployment Assistance",
      ],
      pricing: "Basic: 500 Birr/month | Premium: 1000 Birr/month",
      stats: { support: "24/7", managers: "Dedicated", training: "Custom" },
    },
  ]

  const deploymentModels = [
    {
      title: "Private Cloud",
      description:
        "Cloud environment operated exclusively for a single government organization, offering greater control and security",
      features: [
        "Dedicated Infrastructure",
        "Enhanced Security Controls",
        "Full Administrative Control",
        "Compliance Ready",
      ],
      ideal: "Sensitive government data and mission-critical applications requiring maximum security and control",
      benefits: [
        "Complete data sovereignty",
        "Customizable security policies",
        "Dedicated resources",
        "Regulatory compliance",
      ],
      icon: Lock,
      color: "blue",
    },
    {
      title: "Hybrid Cloud",
      description:
        "Cloud environment combining public and private clouds, allowing data and applications to be shared between them",
      features: ["Flexible Deployment Options", "Cost Optimization", "Scalable Resources", "Data Portability"],
      ideal: "Organizations with varying security and performance requirements across different workloads",
      benefits: ["Workload flexibility", "Cost efficiency", "Scalability on demand", "Risk distribution"],
      icon: Cloud,
      color: "cyan",
    },
  ]

  const cloudDefinitions = [
    {
      term: "Scalability",
      definition:
        "Capability of a cloud service to handle growing amounts of work or its potential to be enlarged to accommodate that growth.",
      icon: ArrowRight,
      example: "Adding more servers during peak government service periods",
    },
    {
      term: "Elasticity",
      definition: "Ability of a cloud system to automatically adjust capacity to meet changing demand.",
      icon: Zap,
      example: "Automatic resource allocation during tax filing season",
    },
    {
      term: "Cloud Security",
      definition:
        "Broad set of policies, technologies, and controls deployed to protect data, applications, and infrastructure associated with cloud computing.",
      icon: Lock,
      example: "Multi-layered protection for sensitive government data",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDefinition((prev) => (prev + 1) % cloudDefinitions.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const ActiveDefinitionIcon = cloudDefinitions[activeDefinition].icon
  const ActiveDefinitionTerm = cloudDefinitions[activeDefinition].term
  const ActiveDefinitionDefinition = cloudDefinitions[activeDefinition].definition
  const ActiveDefinitionExample = cloudDefinitions[activeDefinition].example

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-surface to-surface-light py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-neutral-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-40 h-40 bg-primary/10 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-32 left-16 w-32 h-32 bg-accent/10 rounded-full opacity-30"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-1/2 right-1/3 w-20 h-20 border-2 border-primary/20 rounded-full opacity-40"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Badge
                variant="outline"
                className="mb-6 text-primary border-primary/20 px-4 py-2 hover:bg-primary/5 transition-colors cursor-pointer font-body"
              >
                Government Cloud Solutions
              </Badge>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl font-heading font-black text-foreground mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Comprehensive Cloud Solutions
              </motion.span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground leading-relaxed mb-8 lg:text-lg font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Secure, compliant, and scalable cloud solutions designed for handling sensitive data and mission-critical operations with the highest standards of reliability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 font-body"
                asChild
              >
                <Link href="#solutions">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cloud Service Models */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-black text-foreground mb-6">Cloud Service Models</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg font-body">
              Choose the right cloud service model that fits your government organization's specific requirements and
              operational needs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cloudModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-background cursor-pointer">
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <model.icon className="h-8 w-8 text-primary" />
                    </motion.div>
                    <CardTitle className="text-xl text-foreground font-heading font-black">{model.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 flex-grow">
                    <p className="text-muted-foreground leading-relaxed font-body">{model.description}</p>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3 font-heading">Key Features:</h4>
                      <ul className="space-y-2">
                        {model.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-center text-sm text-muted-foreground font-body"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <motion.button
                      onClick={() => setExpandedModel(expandedModel === index ? null : index)}
                      className="flex items-center justify-between w-full text-left font-semibold text-primary hover:text-primary/80 transition-colors font-body"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span>Learn More</span>
                      {expandedModel === index ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </motion.button>

                    <AnimatePresence>
                      {expandedModel === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden space-y-4"
                        >
                          <div className="border-t border-border pt-4">
                            <h4 className="font-semibold text-foreground mb-2 font-heading">Detailed Overview:</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4 font-body">
                              {model.details}
                            </p>

                            <h4 className="font-semibold text-foreground mb-2 font-heading">Common Use Cases:</h4>
                            <ul className="space-y-1">
                              {model.useCases.map((useCase, idx) => (
                                <li key={idx} className="flex items-center text-sm text-muted-foreground font-body">
                                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                                  {useCase}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3 font-heading">Benefits:</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed font-body">{model.benefits}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3 font-heading">Related Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {model.services.map((service, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                              {service}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      <section id="solutions" className="py-24 bg-surface relative overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-surface to-surface-light rounded-full opacity-30"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-black text-foreground mb-6">Solution Categories</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg font-body">
              Comprehensive solutions organized by functionality to meet all your government cloud infrastructure needs
              with security, compliance, and reliability at the forefront.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredSolution(index)}
                onHoverEnd={() => setHoveredSolution(null)}
              >
                <Card
                  className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full ${
                    solution.featured
                      ? "ring-2 ring-primary/20 bg-gradient-to-br from-background to-surface"
                      : "bg-background"
                  }`}
                >
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <motion.div
                        className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <solution.icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      {solution.featured && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Badge className="bg-primary text-white">Fully Managed</Badge>
                        </motion.div>
                      )}
                    </div>

                    <h3 className="text-xl font-heading font-black text-foreground mb-4">{solution.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow font-body">
                      {solution.description}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 font-heading">Services Included:</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {solution.services.map((service, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <Badge variant="outline" className="text-xs border-primary/20 text-primary">
                                {service}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2 font-heading">Key Benefits:</h4>
                        <ul className="space-y-1">
                          {solution.benefits.map((benefit, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-center text-sm text-muted-foreground font-body"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <CheckCircle className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                              {benefit}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <AnimatePresence>
                        {hoveredSolution === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                              <h4 className="font-semibold text-foreground mb-2 font-heading">Quick Stats:</h4>
                              <div className="grid grid-cols-3 gap-2 text-xs">
                                {Object.entries(solution.stats).map(([key, value]) => (
                                  <div key={key} className="text-center">
                                    <div className="font-bold text-primary font-heading">{value}</div>
                                    <div className="text-muted-foreground capitalize font-body">{key}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="bg-surface p-4 rounded-lg border border-primary/10">
                        <h4 className="font-semibold text-foreground mb-2 font-heading">Pricing:</h4>
                        <p className="text-sm text-muted-foreground font-body">{solution.pricing}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Models */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-black text-foreground mb-6">Deployment Models</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg font-body">
              Choose the deployment model that best fits your security requirements, operational needs, and compliance
              standards
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {deploymentModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-background h-full">
                  <CardContent className="p-10">
                    <div className="flex items-center mb-6">
                      <motion.div
                        className={`w-16 h-16 ${model.color === "primary" ? "bg-primary/10" : "bg-accent/10"} rounded-full flex items-center justify-center mr-4`}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <model.icon
                          className={`h-8 w-8 ${model.color === "primary" ? "text-primary" : "text-accent"}`}
                        />
                      </motion.div>
                      <h3 className="text-2xl font-heading font-black text-foreground">{model.title}</h3>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed font-body">{model.description}</p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 font-heading">Features:</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {model.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center text-sm text-muted-foreground font-body"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                              {feature}
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <motion.div
                        className={`${model.color === "primary" ? "bg-primary/5 border-primary/10" : "bg-accent/5 border-accent/10"} p-4 rounded-lg border`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <h4 className="font-semibold text-foreground mb-2 font-heading">Ideal For:</h4>
                        <p className="text-sm text-muted-foreground font-body">{model.ideal}</p>
                      </motion.div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3 font-heading">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {model.benefits.map((benefit, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-center text-sm text-muted-foreground font-body"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                              {benefit}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Computing Definitions */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-black text-foreground mb-6">Key Cloud Computing Concepts</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg font-body">
              Understanding essential cloud computing terms that define our service capabilities and your benefits
            </p>
          </motion.div>

          <motion.div
            className="mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-surface to-surface-light border-0 shadow-lg">
              <CardContent className="p-8">
                <motion.div
                  key={activeDefinition}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-4">
                    <motion.div
                      className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ActiveDefinitionIcon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <h3 className="text-2xl font-heading font-black text-foreground">{ActiveDefinitionTerm}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 font-body">{ActiveDefinitionDefinition}</p>
                  <div className="flex items-center justify-center text-sm text-primary">
                    <Lightbulb className="h-4 w-4 mr-2" />
                    <span className="font-medium font-body">Example: {ActiveDefinitionExample}</span>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {cloudDefinitions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onClick={() => setActiveDefinition(index)}
              >
                <Card
                  className={`border-0 shadow-lg text-center bg-background hover:shadow-xl transition-all duration-300 cursor-pointer ${
                    activeDefinition === index ? "ring-2 ring-primary/20 bg-surface" : ""
                  }`}
                >
                  <CardContent className="p-8">
                    <motion.div
                      className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <item.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-heading font-black text-foreground mb-4">{item.term}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm font-body">{item.definition}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
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
            className="text-4xl font-heading font-black text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Government Operations?
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-neutral-100 shadow-lg hover:shadow-xl transition-all duration-300 font-body"
                asChild
              >
                <Link href="/contact">
                  Contact Our Experts
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 font-body"
                asChild
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
