"use client"

import type React from "react"
import { Suspense } from "react"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, Phone, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

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
  const [result, setResult] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResult("")

    try {
      const payload = new FormData()
      payload.append("access_key", "95592d15-9cca-44cb-8eb8-b1af19b55802")

      payload.append("email", "abrahamgebru@insa.gov.et")

      payload.append("subject", `GOTERA Cloud Contact: ${formData.service || "General Inquiry"} - ${formData.name}`)

      payload.append("from_name", `${formData.name} (${formData.organization})`)
      payload.append("reply_to", formData.email)

      const formattedMessage = `
Contact Form Submission from GOTERA Cloud Website

Name: ${formData.name}
Email: ${formData.email}
Organization: ${formData.organization}
Phone: ${formData.phone || "Not provided"}
Service Interest: ${formData.service || "Not specified"}

Message:
${formData.message}

---
This message was sent through the official GOTERA Cloud contact form.
Sender IP and timestamp are automatically logged for security purposes.
      `.trim()

      payload.append("message", formattedMessage)

      payload.append("_template", "table")
      payload.append("_captcha", "false")
      payload.append("_cc", "")
      payload.append("_autoresponse", "Thank you for contacting GOTERA Cloud. We will respond within 24 hours.")

      Object.entries(formData).forEach(([key, value]) => {
        if (value) {
          payload.append(`form_${key}`, value)
        }
      })

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      })

      const data = await res.json()

      if (data.success) {
        setResult("✅ Message sent successfully!")
        setFormData({
          name: "",
          email: "",
          organization: "",
          phone: "",
          service: "",
          message: "",
        })
      } else {
        setResult("❌ Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setResult("❌ Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    "Cloud Infrastructure",
    "Data Backup & Recovery",
    "Server Management",
    "Network Security",
    "Remote Access Solutions",
    "Storage Solutions",
    "Monitoring & Support",
    "Training & Consultation",
    "Custom Solutions",
  ]

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@insa.gov.et",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+251-11-XXX-XXXX",
      description: "Mon-Fri from 8am to 5pm",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "Addis Ababa, Ethiopia",
      description: "Come say hello at our office",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon-Fri: 8AM-5PM",
      description: "Government working hours",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
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
                  Get in Touch
                </Badge>
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-6xl font-heading font-black text-foreground mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Contact{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  GOTERA Cloud
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-muted-foreground leading-relaxed mb-8 lg:text-lg font-body"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Ready to transform your government operations with secure, reliable cloud solutions? Get in touch with
                our experts to discuss your specific requirements.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-background text-center">
                    <CardContent className="p-8">
                      <motion.div
                        className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <info.icon className="h-8 w-8 text-primary" />
                      </motion.div>
                      <h3 className="text-xl font-heading font-black text-foreground mb-2">{info.title}</h3>
                      <p className="text-lg font-medium text-foreground mb-2">{info.details}</p>
                      <p className="text-sm text-muted-foreground font-body">{info.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-heading font-black text-foreground mb-6">Send us a Message</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-body">
                  Fill out the form below and our team will get back to you within 24 hours. We're here to help you find
                  the perfect cloud solution for your government organization.
                </p>

                <Card className="border-0 shadow-lg bg-surface">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="group">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors duration-200"
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
                            className="bg-background border-border focus:border-primary focus:ring-primary/20"
                            placeholder="Your full name"
                          />
                        </div>
                        <div className="group">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors duration-200"
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
                            className="bg-background border-border focus:border-primary focus:ring-primary/20"
                            placeholder="your.email@gov.et"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                            Government Organization *
                          </label>
                          <Input
                            id="organization"
                            name="organization"
                            type="text"
                            required
                            value={formData.organization}
                            onChange={handleInputChange}
                            className="bg-background border-border focus:border-primary focus:ring-primary/20"
                            placeholder="Ministry/Agency name"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="bg-background border-border focus:border-primary focus:ring-primary/20"
                            placeholder="+251-XX-XXX-XXXX"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                          Service of Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-primary/20 focus:border-primary bg-background"
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
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={6}
                          className="bg-background border-border focus:border-primary focus:ring-primary/20"
                          placeholder="Please describe your requirements, expected usage, compliance needs, or any specific questions you have about our services."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-300"
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

                      {result && (
                        <motion.p
                          className="text-center text-sm mt-4"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {result}
                        </motion.p>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-heading font-black text-foreground mb-4">Why Choose GOTERA Cloud?</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Government-grade security and compliance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>24/7 dedicated support team</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Scalable infrastructure solutions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Expert consultation and training</span>
                    </li>
                  </ul>
                </div>

                <Card className="border-0 shadow-lg bg-background">
                  <CardContent className="p-8 text-center">
                    <h4 className="text-xl font-heading font-black text-foreground mb-4">Need Immediate Assistance?</h4>
                    <p className="text-muted-foreground mb-6 font-body">
                      For urgent inquiries or technical support, contact our dedicated government services team
                      directly.
                    </p>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 bg-transparent"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call Support
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </Suspense>

      <Footer />
    </div>
  )
}
