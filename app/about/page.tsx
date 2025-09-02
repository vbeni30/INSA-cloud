"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Cloud, Users, Award, Target, CheckCircle, ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function AboutPage() {
  const [expandedValue, setExpandedValue] = useState<number | null>(null)
  const [currentStat, setCurrentStat] = useState(0)

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description:
        "We prioritize the highest level of security and compliance for all government operations, ensuring data protection and regulatory adherence.",
      details:
        "Our security framework includes multi-layered protection, end-to-end encryption, regular security audits, and compliance with government standards including ISO 27001 and SOC 2 Type II.",
    },
    {
      icon: Cloud,
      title: "Cloud Excellence",
      description:
        "Delivering cutting-edge cloud solutions with seamless performance, scalability, and reliability designed specifically for government needs.",
      details:
        "Built on enterprise-grade infrastructure with auto-scaling capabilities, load balancing, and distributed architecture ensuring optimal performance across all government workloads.",
    },
    {
      icon: Users,
      title: "Government Focus",
      description:
        "Exclusively serving government agencies with tailored, mission-critical solutions that understand the unique challenges of public sector IT.",
      details:
        "Deep expertise in government workflows, regulatory requirements, and public sector challenges. Our team includes former government IT professionals who understand your specific needs.",
    },
    {
      icon: Award,
      title: "Reliability",
      description:
        "99.99% uptime commitment ensuring your operations never stop, with robust infrastructure and proactive monitoring.",
      details:
        "Redundant systems, automated failover, real-time monitoring, and disaster recovery protocols ensure continuous operation of critical government services.",
    },
  ]

  const capabilities = [
    "Virtual machine servers for various workloads",
    "Robust backup and storage solutions",
    "Secure remote access capabilities",
    "Advanced monitoring and security tools",
    "Flexible internet bandwidth options",
    "Dedicated public IP addresses",
    "Comprehensive support and training services",
  ]

  const stats = [
    { value: "99.99%", label: "Infrastructure Uptime", color: "text-primary" },
    { value: "95.95%", label: "Cloud Accessibility", color: "text-accent" },
    { value: "24/7", label: "Support Available", color: "text-foreground" },
    { value: "9", label: "Core Services", color: "text-primary" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-surface via-surface-light to-surface py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-neutral-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full opacity-30"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge
                variant="outline"
                className="mb-6 text-primary border-primary/20 px-4 py-2 hover:bg-primary/5 transition-colors cursor-pointer font-body"
              >
                Information Network Security Administration
              </Badge>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl font-heading font-black text-foreground mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              About{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                GOTERA Cloud
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground leading-relaxed mb-8 lg:text-lg font-body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              At INSA, we are dedicated to providing secure, reliable, and scalable cloud solutions. Our services are
              designed to ensure seamless performance while maintaining the highest level of security and compliance for
              government institutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 font-body"
                asChild
              >
                <Link href="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                  <Target className="h-8 w-8 text-primary mr-3" />
                </motion.div>
                <h2 className="text-3xl lg:text-4xl font-heading font-black text-foreground">Our Strategic Mission</h2>
              </div>

              <motion.p
                className="text-lg text-muted-foreground mb-6 leading-relaxed font-body"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                INSA is launching a strategic initiative to become a leading cloud service provider (CSP) for government
                agencies. As government entities increasingly depend on information and communication technology (ICT),
                the demand for a secure, compliant, and efficient cloud infrastructure has never been greater.
              </motion.p>

              <motion.p
                className="text-lg text-muted-foreground mb-8 leading-relaxed font-body"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Government agencies handle sensitive data and mission-critical operations, making it essential to
                provide cloud solutions that not only meet their performance and scalability requirements but also
                adhere to rigorous security and regulatory standards.
              </motion.p>

              <motion.div
                className="bg-gradient-to-r from-surface to-surface-light border border-primary/10 p-6 rounded-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-heading font-black text-foreground mb-4">Our Commitment</h3>
                <p className="text-muted-foreground font-body">
                  This service catalog outlines our comprehensive offerings, each tailored to meet the specific needs of
                  government institutions, supporting their mission-critical operations with robust and adaptable
                  solutions.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center">
                  <div className="">
                    <Image
                      src="/images/gotera-logo.webp"
                      alt="GOTERA Cloud Logo"
                      width={280}
                      height={280}
                      className="mx-auto mb-6"
                    />
                  </div>
                  <h3 className="text-2xl font-heading font-black text-foreground mb-3">Leading CSP</h3>
                  <p className="text-muted-foreground text-lg font-body">For Government Agencies</p>
                  <div className="mt-6 flex justify-center space-x-4">
                    {["Secure", "Compliant", "Efficient"].map((badge, index) => (
                      <motion.div
                        key={badge}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge
                          variant="secondary"
                          className={`${
                            index === 0
                              ? "bg-primary/10 text-primary"
                              : index === 1
                                ? "bg-accent/10 text-accent"
                                : "bg-foreground/10 text-foreground"
                          }`}
                        >
                          {badge}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-black text-foreground mb-6">Our Core Values</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg font-body">
              Every decision we make is guided by our commitment to security, reliability, and excellence in serving
              government institutions with the highest standards of cloud computing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-background cursor-pointer">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <motion.div
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <value.icon className="h-8 w-8 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-heading font-black text-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow mb-4 font-body">
                      {value.description}
                    </p>

                    <motion.button
                      onClick={() => setExpandedValue(expandedValue === index ? null : index)}
                      className="flex items-center justify-center text-primary hover:text-primary/80 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-sm font-medium mr-2 font-body">
                        {expandedValue === index ? "Show Less" : "Learn More"}
                      </span>
                      {expandedValue === index ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </motion.button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedValue === index ? "auto" : 0,
                        opacity: expandedValue === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-border mt-4">
                        <p className="text-sm text-muted-foreground leading-relaxed font-body">{value.details}</p>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-black text-foreground mb-6">Comprehensive Cloud Capabilities</h2>
            <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed text-lg font-body">
              INSA's cloud services are specifically designed to help government organizations securely manage their IT
              needs in a cloud environment that prioritizes security, compliance, and reliability.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-heading font-black text-foreground mb-8">Our Service Portfolio Includes:</h3>
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start group cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle className="h-6 w-6 text-accent mr-4 mt-0.5 flex-shrink-0 group-hover:text-accent/90 transition-colors" />
                    <span className="text-lg text-muted-foreground group-hover:text-foreground transition-colors font-body">
                      {capability}
                    </span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 font-body"
                  asChild
                >
                  <Link href="/services">
                    View All Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-surface to-surface-light rounded-2xl p-10 shadow-lg border border-primary/10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center">
                <h3 className="text-2xl font-heading font-black text-foreground mb-6">
                  Designed for Government Excellence
                </h3>
                <p className="text-lg text-muted-foreground mb-8 font-body">
                  Our offerings encompass everything government organizations need to modernize their IT infrastructure
                  while maintaining the highest standards of security and operational excellence.
                </p>

                <motion.div
                  className="mb-6 p-4 bg-background rounded-lg shadow-sm border border-primary/10"
                  key={currentStat}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`text-3xl font-heading font-black ${stats[currentStat].color} mb-1`}>
                    {stats[currentStat].value}
                  </div>
                  <div className="text-sm text-muted-foreground font-body">{stats[currentStat].label}</div>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className={`p-4 rounded-lg shadow-sm border transition-all duration-300 cursor-pointer ${
                        index === currentStat
                          ? "bg-primary/10 border-primary/20 shadow-md"
                          : "bg-background border-border hover:bg-foreground/10"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setCurrentStat(index)}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`text-2xl font-heading font-black mb-1 ${stat.color}`}>{stat.value}</div>
                      <div className="text-sm text-muted-foreground font-body">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose INSA */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-black text-foreground mb-6">Why Choose GOTERA Cloud?</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg font-body">
              We understand the unique challenges government agencies face and have built our cloud platform
              specifically to address these requirements with uncompromising quality and security.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Government-Grade Security",
                description:
                  "Built with rigorous security standards and regulatory compliance to protect sensitive government data and mission-critical operations.",
                color: "primary",
              },
              {
                icon: Cloud,
                title: "Scalable & Reliable",
                description:
                  "Elastic cloud infrastructure that grows with your needs while maintaining consistent performance and availability for critical government services.",
                color: "accent",
              },
              {
                icon: Users,
                title: "Expert Support",
                description:
                  "Dedicated support team with deep understanding of government requirements, providing 24/7 assistance and specialized training services.",
                color: "foreground",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="border-0 shadow-lg text-center bg-background hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <motion.div
                      className={`w-16 h-16 ${
                        item.color === "primary"
                          ? "bg-primary/10"
                          : item.color === "accent"
                            ? "bg-accent/10"
                            : "bg-foreground/10"
                      } rounded-full flex items-center justify-center mx-auto mb-6`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <item.icon
                        className={`h-8 w-8 ${
                          item.color === "primary"
                            ? "text-primary"
                            : item.color === "accent"
                              ? "text-accent"
                              : "text-foreground"
                        }`}
                      />
                    </motion.div>
                    <h3 className="text-xl font-heading font-black text-foreground mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-body">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
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
