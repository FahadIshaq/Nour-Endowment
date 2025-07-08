"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import "./globals.css"

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-200"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/">
                <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Nour Endowment
                  </span>
                </motion.div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navigation.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <motion.span
                      className={`text-slate-700 hover:text-emerald-600 font-medium transition-colors ${
                        pathname === item.href ? "text-emerald-600 font-semibold" : ""
                      }`}
                      whileHover={{ y: -2 }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                ))}
                <Link href="/donate">
                  <motion.div {...scaleOnHover}>
                    <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                      Contribute Now
                    </Button>
                  </motion.div>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pb-4 border-t border-slate-200"
              >
                <div className="flex flex-col space-y-4 pt-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-slate-700 hover:text-emerald-600 font-medium ${
                        pathname === item.href ? "text-emerald-600 font-semibold" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link href="/donate" onClick={() => setIsMenuOpen(false)}>
                    <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 w-full">Contribute Now</Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </motion.nav>

        {/* Main Content */}
        <main className="pt-20">{children}</main>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Link href="/">
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold">Nour Endowment</span>
                </div>
              </Link>
              <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
                Building a sustainable endowment to expand educational opportunities for historically marginalized and
                under-resourced populations.
              </p>
              <div className="border-t border-slate-800 pt-8">
                <p className="text-slate-400">
                  © {new Date().getFullYear()} Nour Endowment. All rights reserved. | Tax ID: 99-3778982 (Wasla Connect)
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
