import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Shield, Clock, CheckCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 opacity-5 rounded-full -translate-x-32 -translate-y-32 animate-pulse" />
      <div
        className="absolute bottom-0 right-0 w-48 h-48 bg-cyan-500 opacity-5 rounded-full translate-x-24 translate-y-24 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-400 opacity-5 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6 group">
              <div className="relative">
                <Image
                  src="/images/gotera-logo.webp"
                  alt="GOTERA Cloud Logo"
                  width={100}
                  height={100}
                  className="mr-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-400 opacity-20 rounded-full blur-lg group-hover:opacity-30 transition-opacity duration-300" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                GOTERA Cloud
              </span>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-sm">
              Gotera Cloud provides secure, reliable, and
              scalable cloud solutions designed specifically for government agencies.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 p-4 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-lg border border-blue-500/20 hover:border-blue-400/40 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">99.99%</span>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-white">Uptime SLA</div>
                  <div className="text-gray-400">Infrastructure</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-lg border border-cyan-500/20 hover:border-cyan-400/40 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-white">24/7 Support</div>
                  <div className="text-gray-400">Always Available</div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300 hover:text-white transition-colors duration-200">
                <Mail className="h-4 w-4 mr-3 text-blue-400" />
                <span>info@gotera.gov.et</span>
              </div>
              <div className="flex items-center text-sm text-gray-300 hover:text-white transition-colors duration-200">
                <Phone className="h-4 w-4 mr-3 text-cyan-400" />
                <span>+251-11-XXX-XXXX</span>
              </div>
              <div className="flex items-center text-sm text-gray-300 hover:text-white transition-colors duration-200">
                <MapPin className="h-4 w-4 mr-3 text-blue-400" />
                <span>Wello Sefer, Addis Ababa</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white text-lg flex items-center">
              <div className="w-2 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mr-3"></div>
              Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="/services/cloud-servers"
                  className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <CheckCircle className="h-3 w-3 mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Cloud Servers
                </Link>
              </li>
              <li>
                <Link
                  href="/services/backup-services"
                  className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <CheckCircle className="h-3 w-3 mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Backup Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/storage-archival"
                  className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <CheckCircle className="h-3 w-3 mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Storage & Archival
                </Link>
              </li>
              <li>
                <Link
                  href="/services/remote-access"
                  className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <CheckCircle className="h-3 w-3 mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Remote Access
                </Link>
              </li>
              <li>
                <Link
                  href="/services/monitoring-security"
                  className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <CheckCircle className="h-3 w-3 mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Security Monitoring
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white text-lg flex items-center">
              <div className="w-2 h-6 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full mr-3"></div>
              Solutions
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="/solutions"
                  className="hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                >
                  <CheckCircle className="h-3 w-3 mr-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Government Agencies
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                >
                  <CheckCircle className="h-3 w-3 mr-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Security & Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                >
                  <CheckCircle className="h-3 w-3 mr-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Data Management
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                >
                  <CheckCircle className="h-3 w-3 mr-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  About GOTERA
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white text-lg flex items-center">
              <div className="w-2 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mr-3"></div>
              Support
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <CheckCircle className="h-3 w-3 mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Contact Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <CheckCircle className="h-3 w-3 mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  24/7 Technical Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <CheckCircle className="h-3 w-3 mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Training Services
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <CheckCircle className="h-3 w-3 mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Pricing Information
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <p className="text-sm text-gray-400">
                &copy; 2025 Gotera Cloud. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full border border-blue-500/30">
                  <Shield className="h-4 w-4 text-blue-400" />
                  <span className="text-xs text-blue-300 font-medium">Government Grade Security</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-8">
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
