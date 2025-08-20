"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Headphones,
  CheckCircle,
  Shield,
  ChevronDown,
  ChevronUp,
  Award,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed responses to your inquiries and service customization requests",
      contact: "info@gotera.gov.et",
      availability: "24/7 Response",
      note: "For additional information and consultation requests",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our cloud specialists for immediate assistance",
      contact: "+251-11-XXX-XXXX",
      availability: "Business Hours",
      note: "Direct consultation for complex requirements",
    },
    {
      icon: MapPin,
      title: "Office Location",
      description: "Visit our headquarters for in-person consultations",
      contact: "GOTERA Headquarters, Addis Ababa, Ethiopia",
      availability: "Mon-Fri 8:00-17:00",
      note: "Schedule appointments for detailed discussions",
    },
  ]

  const supportTypes = [
    {
      icon: MessageSquare,
      title: "General Inquiries",
      description: "Questions about our services, pricing, and general information",
      responseTime: "Within 24 hours",
      details: "Perfect for initial consultations and service overview requests",
    },
    {
      icon: Users,
      title: "Sales Consultation",
      description: "Custom quotes, solution design, and service customization",
      responseTime: "Within 4 hours",
      details: "Dedicated sales team for government agency requirements",
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Existing customer technical assistance and troubleshooting",
      responseTime: "Within 2 hours",
      details: "24/7 technical support for mission-critical operations",
    },
  ]

  const services = [
    "Cloud Servers",
    "Backup Services for Cloud Servers",
    "Storage and Archival Services",
    "Remote Access Services",
    "Monitoring and Security Services",
    "Internet Bandwidth",
    "Public IP",
    "Support Services",
    "Custom Training and Deployment Assistance",
  ]

  const faqs = [
    {
      question: "How do I get a custom quote?",
      answer:
        "Contact us through the form above or email us directly at info@gotera.gov.et. We'll assess your specific requirements and provide a detailed, customized quote within 24 hours based on your organization's needs.",
    },
    {
      question: "What security certifications do you have?",
      answer:
        "Our infrastructure meets government-grade security standards with comprehensive compliance frameworks designed specifically for sensitive government data and mission-critical operations.",
    },
    {
      question: "Do you offer training services?",
      answer:
        "Yes, we provide custom training and deployment assistance tailored to your organization's specific needs, technical requirements, and operational procedures. Training is determined based on individual customer requirements.",
    },
    {
      question: "What are your service level agreements?",
      answer:
        "We guarantee 99.99% uptime annually for electricity and air conditioning, and 95.95% uptime for cloud infrastructure accessibility, with 24/7 monitoring and comprehensive technical support.",
    },
    {
      question: "Can I migrate existing systems?",
      answer:
        "Absolutely. Our deployment assistance team will help you migrate your existing systems with minimal downtime, full data integrity, and comprehensive support throughout the transition process.",
    },
    {
      question: "Are there discounts for long-term contracts?",
      answer:
        "Yes, we offer attractive discounts for long-term contracts. Contact us to discuss your specific requirements, timeline, and available pricing options for extended service agreements.",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitSuccess(true)

    // Reset form after success
    setTimeout(() => {
      setSubmitSuccess(false)
      setFormData({
        name: "",
        email: "",
        organization: "",
        phone: "",
        service: "",
        message: "",
      })
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative bg-gradient-to-br from-muted/50 to-background py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full opacity-60"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full opacity-60"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-6 text-primary border-primary/20 px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h1 className="heading-primary mb-8">Contact GOTERA Cloud</h1>
            <p className="body-large mb-8">
              For additional information, service customization, or consultation requests, our team of experts is ready
              to help you find the perfect cloud solution for your government organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/20 text-primary hover:bg-primary/5 bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-secondary mb-6">How to Reach Us</h2>
            <p className="body-large max-w-3xl mx-auto">
              Multiple ways to connect with our team for all your government cloud infrastructure needs and requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card className="card-modern text-center h-full group">
                  <CardContent className="p-8 h-full flex flex-col">
                    <motion.div
                      className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <method.icon className="h-8 w-8 text-primary" />
                    </motion.div>
                    <h3 className="heading-tertiary mb-4 group-hover:text-primary transition-colors duration-300">
                      {method.title}
                    </h3>
                    <p className="body-regular mb-4 flex-grow">{method.description}</p>
                    <p className="font-semibold text-foreground mb-2">{method.contact}</p>
                    <Badge variant="secondary" className="text-xs mb-3 bg-primary/10 text-primary border-0">
                      <Clock className="w-3 h-3 mr-1" />
                      {method.availability}
                    </Badge>
                    <p className="body-small italic">{method.note}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-secondary mb-6">Send Us a Message</h2>
              <p className="body-regular mb-8">
                Fill out the form below and our team will get back to you with a customized solution for your government
                organization. We understand the unique requirements of government agencies and are committed to
                providing secure, compliant, and reliable cloud solutions.
              </p>

              {submitSuccess && (
                <motion.div
                  className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <p className="text-primary font-medium">Message sent successfully! We'll get back to you soon.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="block body-small font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors duration-200"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input bg-background border-border focus:border-primary focus:ring-primary/20"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block body-small font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors duration-200"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input bg-background border-border focus:border-primary focus:ring-primary/20"
                      placeholder="your.email@gov.et"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organization" className="block body-small font-medium text-foreground mb-2">
                      Government Organization *
                    </label>
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      required
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="form-input bg-background border-border focus:border-primary focus:ring-primary/20"
                      placeholder="Ministry/Agency name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block body-small font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input bg-background border-border focus:border-primary focus:ring-primary/20"
                      placeholder="+251-XX-XXX-XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block body-small font-medium text-foreground mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-primary/20 focus:border-primary"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block body-small font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="form-input bg-background border-border focus:border-primary focus:ring-primary/20"
                    placeholder="Please describe your requirements, expected usage, compliance needs, or any specific questions you have about our services. Include details about your current infrastructure and timeline if applicable."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Support Types */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-secondary mb-6">Support Types</h2>
              <p className="body-regular mb-8">
                Choose the type of support that best matches your needs for faster assistance and more targeted
                responses from our specialized teams.
              </p>

              <div className="space-y-6">
                {supportTypes.map((type, index) => (
                  <Card key={index} className="card-modern bg-white group hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform">
                          <type.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="heading-tertiary mb-2 group-hover:text-primary transition-colors duration-300">
                            {type.title}
                          </h3>
                          <p className="body-regular mb-3 leading-relaxed">{type.description}</p>
                          <p className="body-small mb-3">{type.details}</p>
                          <div className="flex items-center text-sm text-cyan-600">
                            <Clock className="h-4 w-4 mr-1" />
                            Response: {type.responseTime}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Service Level Agreement */}
              <Card className="mt-8 card-modern bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="heading-tertiary text-slate-900">Our Service Commitment</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                      99.99% uptime annually for infrastructure
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                      95.95% uptime for cloud accessibility
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                      24/7 monitoring and technical support
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                      Government-grade security compliance
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                      Dedicated support for mission-critical operations
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-3">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Common questions about our government cloud services, support, and implementation process
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-2">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-foreground pr-4">{faq.question}</h3>
                    <div className="flex-shrink-0">
                      {expandedFaq === index ? (
                        <ChevronUp className="h-4 w-4 text-primary transform transition-transform duration-200" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-muted-foreground transform transition-transform duration-200" />
                      )}
                    </div>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-4 pb-4 animate-fade-in">
                      <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse" />
        <div
          className="absolute bottom-10 right-10 w-24 h-24 bg-white opacity-5 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-5 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="heading-secondary mb-6 text-white">Ready to Get Started?</h2>
          <p className="body-large text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join the growing number of government agencies that trust GOTERA G-Cloud for their critical IT
            infrastructure. Contact us today to begin your cloud transformation journey with secure, reliable, and
            compliant solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="btn-secondary">
              <Mail className="mr-2 h-5 w-5" />
              Email: info@gotera.gov.et
            </Button>
            <Button size="lg" variant="outline" className="btn-outline bg-transparent">
              <Phone className="mr-2 h-5 w-5" />
              Phone: +251-11-XXX-XXXX
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
