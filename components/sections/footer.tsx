import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">INSA</span>
              </div>
              <span className="text-xl font-semibold">INSA G-Cloud</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Information Network Security Administration (INSA) Government Cloud provides secure, reliable, and
              scalable cloud solutions designed specifically for government agencies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Cloud Servers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Backup Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Storage & Archival
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Remote Access
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Government Agencies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Security & Compliance
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Data Management
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  24/7 Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Training Services
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; 2024 Information Network Security Administration (INSA). All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
