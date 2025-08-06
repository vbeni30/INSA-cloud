"use client"

import type React from "react"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Headphones, CheckCircle } from "lucide-react"
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
      description: "Get detailed responses to your inquiries",
      contact: "info@insa.gov.et",
      availability: "24/7 Response",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      contact: "+251-11-XXX-XXXX",
      availability: "Business Hours",
    },
    {
      icon: MapPin,
      title: "Office Location",
      description: "Visit our headquarters in Addis Ababa",
      contact: "INSA Headquarters, Addis Ababa, Ethiopia",
      availability: "Mon-Fri 8:00-17:00",
    },
  ]

  const supportTypes = [
    {
      icon: MessageSquare,
      title: "General Inquiries",
      description: "Questions about our services and solutions",
      responseTime: "Within 24 hours",
    },
    {
      icon: Users,
      title: "Sales Consultation",
      description: "Custom quotes and solution design",
      responseTime: "Within 4 hours",
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Existing customer technical assistance",
      responseTime: "Within 2 hours",
    },
  ]

  const services = [
    "Cloud Servers",
    "Backup Services",
    "Storage & Archival",
    "Remote Access Services",
    "Monitoring & Security",
    "Internet Bandwidth",
    "Public IP",
    "Support Services",
    "Training & Deployment",
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
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-24">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-blue-600 border-blue-200">
              Get In Touch
            </Badge>
            <h1 className="text-5xl font-bold text-slate-900 mb-8 leading-tight">Contact INSA G-Cloud</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              For additional information, service customization, or consultation requests, our team of experts is ready
              to help you find the perfect cloud solution for your government organization.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">How to Reach Us</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Multiple ways to connect with our team for all your government cloud needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <method.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{method.title}</h3>
                  <p className="text-slate-600 mb-4">{method.description}</p>
                  <p className="font-semibold text-slate-900 mb-2">{method.contact}</p>
                  <Badge variant="secondary" className="text-xs">
                    {method.availability}
                  </Badge>
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
              <p className="text-slate-600 mb-8">
                Fill out the form below and our team will get back to you with a customized solution for your government
                organization.
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
                    placeholder="Please describe your requirements, expected usage, or any specific questions you have about our services..."
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
              <p className="text-slate-600 mb-8">
                Choose the type of support that best matches your needs for faster assistance.
              </p>

              <div className="space-y-6">
                {supportTypes.map((type, index) => (
                  <Card key={index} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <type.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-slate-900 mb-2">{type.title}</h3>
                          <p className="text-slate-600 mb-3">{type.description}</p>
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
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Our Commitment</h3>
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
                      24/7 monitoring and support
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Government-grade security compliance
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
              Common questions about our government cloud services and support
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">How do I get a custom quote?</h3>
                <p className="text-slate-600">
                  Contact us through the form above or email us directly. We'll assess your requirements and provide a
                  detailed quote within 24 hours.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">What security certifications do you have?</h3>
                <p className="text-slate-600">
                  Our infrastructure meets government-grade security standards with comprehensive compliance frameworks
                  designed for sensitive government data.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Do you offer training services?</h3>
                <p className="text-slate-600">
                  Yes, we provide custom training and deployment assistance tailored to your organization's specific
                  needs and technical requirements.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">What are your service level agreements?</h3>
                <p className="text-slate-600">
                  We guarantee 99.99% uptime for infrastructure and 95.95% for cloud accessibility, with 24/7 monitoring
                  and support.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Can I migrate existing systems?</h3>
                <p className="text-slate-600">
                  Absolutely. Our deployment assistance team will help you migrate your existing systems with minimal
                  downtime and full data integrity.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Are there discounts for long-term contracts?</h3>
                <p className="text-slate-600">
                  Yes, we offer attractive discounts for long-term contracts. Contact us to discuss your specific
                  requirements and available options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
