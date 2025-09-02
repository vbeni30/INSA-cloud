"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Server, Cpu, HardDrive, Zap, Shield, Clock, CheckCircle, ArrowLeft, Calculator, Database } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const serverTypes = [
  {
    id: "general",
    name: "General Purpose",
    description: "Balanced compute, memory, and networking resources for a variety of workloads",
    icon: <Server className="h-6 w-6" />,
    useCases: ["Web applications", "Small to medium databases", "Development environments", "Code repositories"],
    specs: {
      vcpu: "1-8 vCPUs",
      memory: "1-32 GB RAM",
      storage: "20-500 GB",
      network: "Up to 10 Gbps",
    },
  },
  {
    id: "compute",
    name: "Compute Optimized",
    description: "High-performance processors for compute-intensive applications",
    icon: <Cpu className="h-6 w-6" />,
    useCases: ["High-performance web servers", "Scientific computing", "Batch processing", "Gaming servers"],
    specs: {
      vcpu: "2-16 vCPUs",
      memory: "4-64 GB RAM",
      storage: "50-1000 GB",
      network: "Up to 25 Gbps",
    },
  },
  {
    id: "memory",
    name: "Memory Optimized",
    description: "Fast performance for workloads that process large data sets in memory",
    icon: <Database className="h-6 w-6" />,
    useCases: ["In-memory databases", "Real-time analytics", "High-performance databases", "Distributed caches"],
    specs: {
      vcpu: "2-32 vCPUs",
      memory: "8-256 GB RAM",
      storage: "100-2000 GB",
      network: "Up to 25 Gbps",
    },
  },
  {
    id: "storage",
    name: "Storage Optimized",
    description: "High sequential read and write access to large data sets",
    icon: <HardDrive className="h-6 w-6" />,
    useCases: ["Data warehousing", "Log processing", "File systems", "Data lakes"],
    specs: {
      vcpu: "4-48 vCPUs",
      memory: "16-384 GB RAM",
      storage: "500-10000 GB",
      network: "Up to 100 Gbps",
    },
  },
]

const features = [
  {
    icon: <Shield className="h-6 w-6 text-green-600" />,
    title: "Enterprise Security",
    description: "Government-grade security with encryption at rest and in transit",
  },
  {
    icon: <Clock className="h-6 w-6 text-blue-600" />,
    title: "99.99% Uptime SLA",
    description: "Guaranteed high availability with redundant infrastructure",
  },
  {
    icon: <Zap className="h-6 w-6 text-yellow-600" />,
    title: "High Performance",
    description: "Latest generation processors with NVMe SSD storage",
  },
  {
    icon: <Server className="h-6 w-6 text-purple-600" />,
    title: "Flexible Scaling",
    description: "Scale resources up or down based on your needs",
  },
]

export default function CloudServersPage() {
  const [vcpu, setVcpu] = useState(2)
  const [memory, setMemory] = useState(4)
  const [storage, setStorage] = useState(50)
  const [storageType, setStorageType] = useState("ssd")

  const calculatePrice = () => {
    const storageMultiplier = storageType === "ssd" ? 10 : 5
    return vcpu * 930 + memory * 210 + storage * storageMultiplier
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-slate-600">
            <Link href="/services" className="hover:text-green-600 flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">Cloud Servers</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-100 text-green-800 mb-4">Most Popular Service</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Cloud Servers</h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Flexible and scalable virtual machine servers designed to handle various workloads, from web hosting to
                enterprise applications. Built on government-grade infrastructure with 99.99% uptime guarantee.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Get Started
                </Button>
                <Button size="lg" variant="outline">
                  Contact Sales
                </Button>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <Calculator className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-slate-900">Pricing Calculator</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="vcpu">vCPU Cores</Label>
                  <Input
                    id="vcpu"
                    type="number"
                    value={vcpu}
                    onChange={(e) => setVcpu(Number(e.target.value))}
                    min="1"
                    max="48"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="memory">Memory (GB)</Label>
                  <Input
                    id="memory"
                    type="number"
                    value={memory}
                    onChange={(e) => setMemory(Number(e.target.value))}
                    min="1"
                    max="384"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="storage">Storage (GB)</Label>
                  <Input
                    id="storage"
                    type="number"
                    value={storage}
                    onChange={(e) => setStorage(Number(e.target.value))}
                    min="20"
                    max="10000"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="storage-type">Storage Type</Label>
                  <Select value={storageType} onValueChange={setStorageType}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ssd">SSD (High Performance)</SelectItem>
                      <SelectItem value="hdd">HDD (Cost Effective)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-slate-900">Monthly Cost:</span>
                    <span className="text-2xl font-bold text-green-600">{calculatePrice().toLocaleString()} Birr</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-2">
                    Formula: (vCPU × 930) + (RAM × 210) + (Storage × {storageType === "ssd" ? "10" : "5"})
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Server Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Server Types</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the right server type optimized for your specific workload requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {serverTypes.map((type) => (
              <Card key={type.id} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-green-100 rounded-lg mr-4">{type.icon}</div>
                    <div>
                      <CardTitle className="text-xl">{type.name}</CardTitle>
                      <CardDescription className="mt-1">{type.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="specs" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="specs">Specifications</TabsTrigger>
                      <TabsTrigger value="usecases">Use Cases</TabsTrigger>
                    </TabsList>
                    <TabsContent value="specs" className="mt-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm font-medium text-slate-900">vCPU</div>
                          <div className="text-sm text-slate-600">{type.specs.vcpu}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900">Memory</div>
                          <div className="text-sm text-slate-600">{type.specs.memory}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900">Storage</div>
                          <div className="text-sm text-slate-600">{type.specs.storage}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900">Network</div>
                          <div className="text-sm text-slate-600">{type.specs.network}</div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="usecases" className="mt-4">
                      <ul className="space-y-2">
                        {type.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Key Features</h2>
            <p className="text-xl text-slate-600">Enterprise-grade features built for government workloads</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 bg-white rounded-xl shadow-sm mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-slate-600">Simple, predictable pricing based on your resource usage</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-6 w-6 text-green-600 mr-2" />
                  SSD Storage
                </CardTitle>
                <CardDescription>High-performance SSD storage for demanding applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-4">
                  (vCPU × 930) + (RAM × 210) + (Storage × 10) Birr/month
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    NVMe SSD storage
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Up to 100,000 IOPS
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Low latency performance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HardDrive className="h-6 w-6 text-blue-600 mr-2" />
                  HDD Storage
                </CardTitle>
                <CardDescription>Cost-effective HDD storage for general workloads</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  (vCPU × 930) + (RAM × 210) + (Storage × 5) Birr/month
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Traditional HDD storage
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cost-effective solution
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Suitable for archival data
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Deploy Your Cloud Servers?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get started with INSA G-Cloud servers today and experience government-grade cloud infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
