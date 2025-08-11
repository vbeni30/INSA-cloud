"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Calculator, Server, Shield, Users, HardDrive, Wifi, Phone, GraduationCap, Info, Check, AlertCircle } from 'lucide-react'

interface ServiceConfig {
  // Cloud Servers
  serverType: 'ssd' | 'hdd'
  vcpu: number
  ram: number
  storage: number
  
  // Additional Services
  backupStorage: number
  cloudStorage: number
  cloudStorageType: 'ssd' | 'hdd'
  remoteAccessUsers: number
  remoteAccessType: 'rap' | 'wireguard'
  siemAgents: number
  monitoringAgents: number
  dedicatedIPs: number
  supportType: 'basic' | 'premium' | 'none'
}

const defaultConfig: ServiceConfig = {
  serverType: 'ssd',
  vcpu: 2,
  ram: 4,
  storage: 50,
  backupStorage: 0,
  cloudStorage: 0,
  cloudStorageType: 'ssd',
  remoteAccessUsers: 0,
  remoteAccessType: 'rap',
  siemAgents: 0,
  monitoringAgents: 0,
  dedicatedIPs: 0,
  supportType: 'none'
}

export default function PricingPage() {
  const [config, setConfig] = useState<ServiceConfig>(defaultConfig)
  const [totalCost, setTotalCost] = useState(0)

  const calculateCost = (config: ServiceConfig) => {
    let total = 0

    // Cloud Server Cost - Exact formula from document
    const vcpuCost = config.vcpu * 930
    const ramCost = config.ram * 210
    const storageCost = config.storage * (config.serverType === 'ssd' ? 10 : 5)
    const serverCost = vcpuCost + ramCost + storageCost
    total += serverCost

    // Backup Services - HDD only as per document
    total += config.backupStorage * 11

    // Cloud Storage
    total += config.cloudStorage * (config.cloudStorageType === 'ssd' ? 20 : 11)

    // Remote Access - Starting from prices
    const remoteAccessCost = config.remoteAccessType === 'rap' ? 100 : 150
    total += config.remoteAccessUsers * remoteAccessCost

    // Security & Monitoring - Starting from prices
    total += config.siemAgents * 1000
    total += config.monitoringAgents * 500

    // Dedicated IPs
    total += config.dedicatedIPs * 18

    // Support - Starting from prices
    if (config.supportType === 'basic') total += 500
    if (config.supportType === 'premium') total += 1000

    return total
  }

  useEffect(() => {
    setTotalCost(calculateCost(config))
  }, [config])

  const updateConfig = (key: keyof ServiceConfig, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }))
  }

  const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for small government departments getting started with cloud",
      price: "2,580",
      features: [
        "2 vCPU, 4GB RAM, 50GB SSD Storage",
        "Basic Email Support (Business Hours)",
        "99.99% Infrastructure Uptime SLA",
        "95.95% Cloud Accessibility SLA",
        "Shared Public IP Included",
        "Government-Grade Security"
      ],
      config: {
        ...defaultConfig,
        vcpu: 2,
        ram: 4,
        storage: 50,
        supportType: 'basic' as const
      }
    },
    {
      name: "Professional",
      description: "Ideal for medium-sized agencies with growing cloud needs",
      price: "6,860",
      features: [
        "4 vCPU, 8GB RAM, 100GB SSD Storage",
        "Premium Support with Dedicated Manager",
        "20GB Backup Storage Included",
        "2 Remote Access Portal Users",
        "1 Dedicated Public IP",
        "Basic Health Monitoring Agent",
        "24/7 Phone & Email Support"
      ],
      config: {
        ...defaultConfig,
        vcpu: 4,
        ram: 8,
        storage: 100,
        backupStorage: 20,
        remoteAccessUsers: 2,
        dedicatedIPs: 1,
        monitoringAgents: 1,
        supportType: 'premium' as const
      },
      popular: true
    },
    {
      name: "Enterprise",
      description: "Comprehensive solution for large government organizations",
      price: "16,900",
      features: [
        "8 vCPU, 16GB RAM, 200GB SSD Storage",
        "Premium Support with Priority Response",
        "100GB Backup Storage Included",
        "5 WireGuard VPN Users",
        "3 Dedicated Public IPs",
        "SIEM Security Agent",
        "Health Monitoring Agent",
        "Mission-Critical Support"
      ],
      config: {
        ...defaultConfig,
        vcpu: 8,
        ram: 16,
        storage: 200,
        backupStorage: 100,
        remoteAccessUsers: 5,
        remoteAccessType: 'wireguard' as const,
        dedicatedIPs: 3,
        siemAgents: 1,
        monitoringAgents: 1,
        supportType: 'premium' as const
      }
    }
  ]

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              INSA G-Cloud Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent, government-grade cloud pricing designed for Ethiopian public sector organizations. 
              All prices are in Ethiopian Birr (ETB) per month.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <AlertCircle className="w-4 h-4 mr-1 text-green-600" />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center">
                <AlertCircle className="w-4 h-4 mr-1 text-green-600" />
                <span>Long-term Discounts Available</span>
              </div>
            </div>
          </div>

          <Tabs defaultValue="packages" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="packages" className="text-lg py-3">
                Pricing Packages
              </TabsTrigger>
              <TabsTrigger value="calculator" className="text-lg py-3">
                <Calculator className="w-4 h-4 mr-2" />
                Custom Calculator
              </TabsTrigger>
            </TabsList>

            {/* Pricing Packages */}
            <TabsContent value="packages" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <Card key={index} className={`relative ${tier.popular ? 'border-green-500 shadow-lg scale-105' : 'border-gray-200'}`}>
                    {tier.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                      <CardDescription className="text-gray-600">{tier.description}</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-green-600">{tier.price}</span>
                        <span className="text-gray-600 ml-2">ETB/month</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700"
                        onClick={() => {
                          setConfig(tier.config)
                          // Switch to calculator tab to show the configuration
                          const calculatorTab = document.querySelector('[value="calculator"]') as HTMLElement
                          calculatorTab?.click()
                        }}
                      >
                        Configure {tier.name}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Service Breakdown */}
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-center mb-12">Service Catalog & Pricing</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Server className="w-5 h-5 mr-2 text-green-600" />
                        Cloud Servers
                      </CardTitle>
                      <CardDescription>
                        Flexible virtual machines for various workloads
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <p><strong>vCPU:</strong> 930 ETB per core/month</p>
                        <p><strong>RAM:</strong> 210 ETB per GB/month</p>
                        <p><strong>SSD Storage:</strong> 10 ETB per GB/month</p>
                        <p><strong>HDD Storage:</strong> 5 ETB per GB/month</p>
                        <div className="mt-3 p-2 bg-gray-50 rounded text-xs">
                          <strong>Categories:</strong> General Purpose, Compute Optimized, Memory Optimized, Storage Optimized
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <HardDrive className="w-5 h-5 mr-2 text-green-600" />
                        Storage & Backup
                      </CardTitle>
                      <CardDescription>
                        Automated backup and flexible storage solutions
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <p><strong>Backup Services:</strong> 11 ETB per GB/month</p>
                        <p><strong>Cloud SSD Storage:</strong> 20 ETB per GB/month</p>
                        <p><strong>Cloud HDD Storage:</strong> 11 ETB per GB/month</p>
                        <div className="mt-3 p-2 bg-gray-50 rounded text-xs">
                          <strong>Features:</strong> Full backup, Snapshot backup, Encrypted
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Users className="w-5 h-5 mr-2 text-green-600" />
                        Remote Access
                      </CardTitle>
                      <CardDescription>
                        Secure remote access to cloud resources
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <p><strong>Remote Access Portal:</strong> Starting from 100 ETB per user/month</p>
                        <p><strong>WireGuard VPN:</strong> Starting from 150 ETB per user/month</p>
                        <div className="mt-3 p-2 bg-gray-50 rounded text-xs">
                          <strong>Note:</strong> Secure solutions for connecting to cloud resources
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Shield className="w-5 h-5 mr-2 text-green-600" />
                        Security & Monitoring
                      </CardTitle>
                      <CardDescription>
                        Fully managed security and monitoring services
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <p><strong>SIEM Agent:</strong> Starting from 1,000 ETB per agent/month</p>
                        <p><strong>Monitoring Agent:</strong> Starting from 500 ETB per agent/month</p>
                        <div className="mt-3 p-2 bg-gray-50 rounded text-xs">
                          <strong>Managed by INSA:</strong> Real-time monitoring and security event detection
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Wifi className="w-5 h-5 mr-2 text-green-600" />
                        Network & Bandwidth
                      </CardTitle>
                      <CardDescription>
                        Public IPs and internet bandwidth options
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <p><strong>Shared Public IP:</strong> Free</p>
                        <p><strong>Dedicated Public IP:</strong> 18 ETB per IP/month</p>
                        <p><strong>Internet Bandwidth:</strong> Custom Quote</p>
                        <div className="mt-3 p-2 bg-gray-50 rounded text-xs">
                          <strong>Future Plan:</strong> Maximum rate limit with custom pricing
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Phone className="w-5 h-5 mr-2 text-green-600" />
                        Support & Training
                      </CardTitle>
                      <CardDescription>
                        24/7 support and custom training services
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <p><strong>Basic Support:</strong> Starting from 500 ETB/month</p>
                        <p><strong>Premium Support:</strong> Starting from 1,000 ETB/month</p>
                        <p><strong>Custom Training:</strong> Contact for quote</p>
                        <div className="mt-3 p-2 bg-gray-50 rounded text-xs">
                          <strong>Premium includes:</strong> Dedicated support manager, priority response
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Custom Calculator */}
            <TabsContent value="calculator" className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Configuration Panel */}
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Server className="w-5 h-5 mr-2" />
                        Cloud Server Configuration
                      </CardTitle>
                      <CardDescription>
                        Configure your virtual machine specifications using INSA's exact pricing formula
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="serverType" className="flex items-center">
                            Storage Type
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="w-4 h-4 ml-1 text-gray-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>SSD: High performance, 10 ETB/GB<br/>HDD: Cost effective, 5 ETB/GB</p>
                              </TooltipContent>
                            </Tooltip>
                          </Label>
                          <Select value={config.serverType} onValueChange={(value: 'ssd' | 'hdd') => updateConfig('serverType', value)}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ssd">SSD Storage (10 ETB/GB)</SelectItem>
                              <SelectItem value="hdd">HDD Storage (5 ETB/GB)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="vcpu">vCPU Cores (930 ETB/core)</Label>
                          <Input
                            type="number"
                            min="1"
                            max="32"
                            value={config.vcpu}
                            onChange={(e) => updateConfig('vcpu', parseInt(e.target.value) || 1)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="ram">RAM in GB (210 ETB/GB)</Label>
                          <Input
                            type="number"
                            min="1"
                            max="128"
                            value={config.ram}
                            onChange={(e) => updateConfig('ram', parseInt(e.target.value) || 1)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="storage">Storage in GB</Label>
                          <Input
                            type="number"
                            min="10"
                            max="2000"
                            value={config.storage}
                            onChange={(e) => updateConfig('storage', parseInt(e.target.value) || 10)}
                          />
                        </div>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg text-sm">
                        <strong>Pricing Formula:</strong> (vCPU × 930) + (RAM × 210) + (Storage × {config.serverType === 'ssd' ? '10' : '5'}) ETB/month
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Storage & Backup Services</CardTitle>
                      <CardDescription>
                        Add backup and additional storage capacity
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="backupStorage" className="flex items-center">
                            Backup Storage (GB)
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="w-4 h-4 ml-1 text-gray-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Automated backup: Full backup, Snapshot backup, Encrypted</p>
                              </TooltipContent>
                            </Tooltip>
                          </Label>
                          <Input
                            type="number"
                            min="0"
                            value={config.backupStorage}
                            onChange={(e) => updateConfig('backupStorage', parseInt(e.target.value) || 0)}
                          />
                          <p className="text-xs text-gray-600 mt-1">11 ETB per GB/month</p>
                        </div>
                        <div>
                          <Label htmlFor="cloudStorage">Additional Cloud Storage (GB)</Label>
                          <Input
                            type="number"
                            min="0"
                            value={config.cloudStorage}
                            onChange={(e) => updateConfig('cloudStorage', parseInt(e.target.value) || 0)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="cloudStorageType">Cloud Storage Type</Label>
                          <Select value={config.cloudStorageType} onValueChange={(value: 'ssd' | 'hdd') => updateConfig('cloudStorageType', value)}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ssd">SSD Storage (20 ETB/GB)</SelectItem>
                              <SelectItem value="hdd">HDD Storage (11 ETB/GB)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="dedicatedIPs">Dedicated Public IPs</Label>
                          <Input
                            type="number"
                            min="0"
                            max="10"
                            value={config.dedicatedIPs}
                            onChange={(e) => updateConfig('dedicatedIPs', parseInt(e.target.value) || 0)}
                          />
                          <p className="text-xs text-gray-600 mt-1">18 ETB per IP/month (Shared IPs are free)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Remote Access & Security</CardTitle>
                      <CardDescription>
                        Configure user access and security monitoring
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="remoteAccessUsers">Remote Access Users</Label>
                          <Input
                            type="number"
                            min="0"
                            value={config.remoteAccessUsers}
                            onChange={(e) => updateConfig('remoteAccessUsers', parseInt(e.target.value) || 0)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="remoteAccessType">Remote Access Type</Label>
                          <Select value={config.remoteAccessType} onValueChange={(value: 'rap' | 'wireguard') => updateConfig('remoteAccessType', value)}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="rap">Remote Access Portal (100 ETB/user)</SelectItem>
                              <SelectItem value="wireguard">WireGuard VPN (150 ETB/user)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="siemAgents" className="flex items-center">
                            SIEM Agents
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="w-4 h-4 ml-1 text-gray-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Managed SIEM for security event detection</p>
                              </TooltipContent>
                            </Tooltip>
                          </Label>
                          <Input
                            type="number"
                            min="0"
                            value={config.siemAgents}
                            onChange={(e) => updateConfig('siemAgents', parseInt(e.target.value) || 0)}
                          />
                          <p className="text-xs text-gray-600 mt-1">Starting from 1,000 ETB per agent/month</p>
                        </div>
                        <div>
                          <Label htmlFor="monitoringAgents" className="flex items-center">
                            Monitoring Agents
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="w-4 h-4 ml-1 text-gray-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Service and health monitoring managed by INSA</p>
                              </TooltipContent>
                            </Tooltip>
                          </Label>
                          <Input
                            type="number"
                            min="0"
                            value={config.monitoringAgents}
                            onChange={(e) => updateConfig('monitoringAgents', parseInt(e.target.value) || 0)}
                          />
                          <p className="text-xs text-gray-600 mt-1">Starting from 500 ETB per agent/month</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Support Services</CardTitle>
                      <CardDescription>
                        Choose your 24/7 technical support level
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <Label htmlFor="supportType">Support Type</Label>
                        <Select value={config.supportType} onValueChange={(value: 'none' | 'basic' | 'premium') => updateConfig('supportType', value)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">No Support Package</SelectItem>
                            <SelectItem value="basic">Basic Support - Email during business hours (Starting from 500 ETB/month)</SelectItem>
                            <SelectItem value="premium">Premium Support - Phone & email with dedicated manager (Starting from 1,000 ETB/month)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Cost Summary */}
                <div className="lg:col-span-1">
                  <Card className="sticky top-4">
                    <CardHeader>
                      <CardTitle className="text-center">Cost Summary</CardTitle>
                      <CardDescription className="text-center">
                        Monthly pricing breakdown
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Cloud Server</span>
                          <span className="font-medium">
                            {(config.vcpu * 930 + config.ram * 210 + config.storage * (config.serverType === 'ssd' ? 10 : 5)).toLocaleString()} ETB
                          </span>
                        </div>
                        
                        {config.backupStorage > 0 && (
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Backup Storage</span>
                            <span className="font-medium">{(config.backupStorage * 11).toLocaleString()} ETB</span>
                          </div>
                        )}
                        
                        {config.cloudStorage > 0 && (
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Cloud Storage</span>
                            <span className="font-medium">
                              {(config.cloudStorage * (config.cloudStorageType === 'ssd' ? 20 : 11)).toLocaleString()} ETB
                            </span>
                          </div>
                        )}
                        
                        {config.remoteAccessUsers > 0 && (
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Remote Access</span>
                            <span className="font-medium">
                              {(config.remoteAccessUsers * (config.remoteAccessType === 'rap' ? 100 : 150)).toLocaleString()} ETB
                            </span>
                          </div>
                        )}
                        
                        {config.siemAgents > 0 && (
                          <div className="flex justify-between items-center">
                            <span className="text-sm">SIEM Agents</span>
                            <span className="font-medium">{(config.siemAgents * 1000).toLocaleString()} ETB</span>
                          </div>
                        )}
                        
                        {config.monitoringAgents > 0 && (
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Monitoring Agents</span>
                            <span className="font-medium">{(config.monitoringAgents * 500).toLocaleString()} ETB</span>
                          </div>
                        )}
                        
                        {config.dedicatedIPs > 0 && (
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Dedicated IPs</span>
                            <span className="font-medium">{(config.dedicatedIPs * 18).toLocaleString()} ETB</span>
                          </div>
                        )}
                        
                        {config.supportType !== 'none' && (
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Support</span>
                            <span className="font-medium">
                              {config.supportType === 'basic' ? '500' : '1,000'} ETB
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <Separator />
                      
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Total Monthly Cost</span>
                        <span className="text-green-600">{totalCost.toLocaleString()} ETB</span>
                      </div>
                      
                      <div className="text-center text-sm text-gray-600">
                        Annual Cost: {(totalCost * 12).toLocaleString()} ETB
                      </div>
                      
                      <Button className="w-full bg-green-600 hover:bg-green-700 mt-4">
                        Request Quote
                      </Button>
                      
                      <Button variant="outline" className="w-full">
                        Contact Sales Team
                      </Button>

                      <div className="mt-4 p-3 bg-yellow-50 rounded-lg text-xs text-gray-700">
                        <strong>Note:</strong> Internet bandwidth pricing available on request. Custom training and deployment assistance quoted individually.
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* SLA Information */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle className="text-center">Service Level Agreements (SLAs)</CardTitle>
              <CardDescription className="text-center">
                INSA's commitment to reliable service delivery
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">99.99%</div>
                  <p className="text-gray-700 font-medium">Infrastructure Uptime</p>
                  <p className="text-sm text-gray-600 mt-1">Annual uptime for electricity and air conditioning</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">95.95%</div>
                  <p className="text-gray-700 font-medium">Cloud Accessibility</p>
                  <p className="text-sm text-gray-600 mt-1">Annual accessibility of cloud infrastructure</p>
                </div>
              </div>
              <p className="text-center text-sm text-gray-600 mt-6">
                *Uptime excludes scheduled maintenance windows and unforeseen circumstances beyond INSA's control
              </p>
            </CardContent>
          </Card>

          {/* Terms and Conditions */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Terms and Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• All pricing is based on standard configurations and usage; custom solutions may incur additional costs</li>
                <li>• Discounts available for long-term contracts</li>
                <li>• Service modifications during the contract period may result in price adjustments</li>
                <li>• Changes will be communicated and agreed upon before implementation</li>
                <li>• Customers are responsible for providing accurate information, timely access, and cooperation necessary for service delivery</li>
              </ul>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your requirements and get a customized quote for your government organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Request Custom Quote
              </Button>
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              For custom training and deployment assistance, contact us for individualized pricing.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </TooltipProvider>
  )
}
