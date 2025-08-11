"use client"

import type React from "react"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Headphones, CheckCircle, Shield } from 'lucide-react'
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

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed responses to your inquiries and service customization requests",
      contact: "info@insa.gov.et",
      availability: "24/7 Response",
      note: "For additional information and consultation requests"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our cloud specialists for immediate assistance",
      contact: "+251-11-XXX-XXXX",
      availability: "Business Hours",
      note: "Direct consultation for complex requirements"
    },
    {
      icon: MapPin,
      title: "Office Location",
      description: "Visit our headquarters for in-person consultations",
      contact: "INSA Headquarters, Addis Ababa, Ethiopia",
      availability: "Mon-Fri 8:00-17:00",
      note: "Schedule appointments for detailed discussions"
    },
  ]

  const supportTypes = [
    {
      icon: MessageSquare,
      title: "General Inquiries",
      description: "Questions about our services, pricing, and general information",
      responseTime: "Within 24 hours",
      details: "Perfect for initial consultations and service overview requests"
    },
    {
      icon: Users,
      title: "Sales Consultation",
      description: "Custom quotes, solution design, and service customization",
      responseTime: "Within 4 hours",
      details: "Dedicated sales team for government agency requirements"
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Existing customer technical assistance and troubleshooting",
      responseTime: "Within 2 hours",
      details: "24/7 technical support for mission-critical operations"
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-blue-600 border-blue-200 px-4 py-2">
              Get In Touch
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">Contact INSA G-Cloud</h1>
            <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed mb-8">
              For additional information, service customization, or consultation requests, our team of experts is ready
              to help you find the perfect cloud solution for your government organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">How to Reach Us</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Multiple ways to connect with our team for all your government cloud infrastructure needs and requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center h-full"
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <method.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{method.title}</h3>
                  <p className="text-slate-600 mb-4 flex-grow">{method.description}</p>
                  <p className="font-semibold text-slate-900 mb-2">{method.contact}</p>
                  <Badge variant="secondary" className="text-xs mb-3">
                    {method.availability}
                  </Badge>
                  <p className="text-sm text-slate-500 italic">{method.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you with a customized solution for your government
                organization. We understand the unique requirements of government agencies and are committed to providing
                secure, compliant, and reliable cloud solutions.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="your.email@gov.et"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-2">
                      Government Organization *
                    </label>
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      required
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Ministry/Agency name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="+251-XX-XXX-XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full"
                    placeholder="Please describe your requirements, expected usage, compliance needs, or any specific questions you have about our services. Include details about your current infrastructure and timeline if applicable."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Support Types */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Support Types</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Choose the type of support that best matches your needs for faster assistance and more targeted responses
                from our specialized teams.
              </p>

              <div className="space-y-6">
                {supportTypes.map((type, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <type.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-slate-900 mb-2">{type.title}</h3>
                          <p className="text-slate-600 mb-3 leading-relaxed">{type.description}</p>
                          <p className="text-sm text-slate-500 mb-3">{type.details}</p>
                          <div className="flex items-center text-sm text-green-600">
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
              <Card className="mt-8 border-0 bg-gradient-to-br from-blue-50 to-green-50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-lg font-bold text-slate-900">Our Service Commitment</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      99.99% uptime annually for infrastructure
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      95.95% uptime for cloud accessibility
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      24/7 monitoring and technical support
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Government-grade security compliance
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Dedicated support for mission-critical operations
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Common questions about our government cloud services, support, and implementation process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">How do I get a custom quote?</h3>
                <p className="text-slate-600 leading-relaxed">
                  Contact us through the form above or email us directly at info@insa.gov.et. We'll assess your specific 
                  requirements and provide a detailed, customized quote within 24 hours based on your organization's needs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">What security certifications do you have?</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our infrastructure meets government-grade security standards with comprehensive compliance frameworks
                  designed specifically for sensitive government data and mission-critical operations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Do you offer training services?</h3>
                <p className="text-slate-600 leading-relaxed">
                  Yes, we provide custom training and deployment assistance tailored to your organization's specific
                  needs, technical requirements, and operational procedures. Training is determined based on individual customer requirements.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">What are your service level agreements?</h3>
                <p className="text-slate-600 leading-relaxed">
                  We guarantee 99.99% uptime annually for electricity and air conditioning, and 95.95% uptime for cloud 
                  infrastructure accessibility, with 24/7 monitoring and comprehensive technical support.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Can I migrate existing systems?</h3>
                <p className="text-slate-600 leading-relaxed">
                  Absolutely. Our deployment assistance team will help you migrate your existing systems with minimal
                  downtime, full data integrity, and comprehensive support throughout the transition process.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Are there discounts for long-term contracts?</h3>
                <p className="text-slate-600 leading-relaxed">
                  Yes, we offer attractive discounts for long-term contracts. Contact us to discuss your specific
                  requirements, timeline, and available pricing options for extended service agreements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join the growing number of government agencies that trust INSA G-Cloud for their critical IT infrastructure. 
            Contact us today to begin your cloud transformation journey with secure, reliable, and compliant solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Mail className="mr-2 h-5 w-5" />
              Email: info@insa.gov.et
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent">
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
