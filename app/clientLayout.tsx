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
      <body className="min-h-screen bg-[#f9f7f1]">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-200"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/">
                <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.05 }}>
                  {/* <img src="/logo.png" alt="Nour Endowment" className="h-24 w-auto" /> */}
                  <span className="text-3xl font-bold text-[#084120]">Nour Endowment</span>
                </motion.div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navigation.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <motion.span
                      className={`text-slate-700 hover:text-[#084120] font-medium transition-colors ${
                        pathname === item.href ? "text-[#084120] font-semibold" : ""
                      }`}
                      whileHover={{ y: -2 }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                ))}
                <Link href="/donate">
                  <motion.div {...scaleOnHover}>
                    <Button className="bg-[#084120] hover:bg-[#084120]/90 text-white">
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
                      className={`text-slate-700 hover:text-[#084120] font-medium ${
                        pathname === item.href ? "text-[#084120] font-semibold" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link href="/donate" onClick={() => setIsMenuOpen(false)}>
                    <Button className="bg-[#084120] hover:bg-[#084120]/90 text-white w-full">Contribute Now</Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </motion.nav>

        {/* Main Content */}
        <main className="pt-40">{children}</main>

        {/* Footer */}
        <footer className="bg-white text-white py-16">
          <div className="mx-auto px-4">
            <div className="text-center">
              <Link href="/">
                <div className="flex items-center justify-center mb-6">
                  <img src="/logo.png" alt="Nour Endowment" className="h-56 w-[22rem] sm:h-64 sm:w-[26rem] md:h-72 md:w-[32rem] lg:h-80 lg:w-[38rem] object-contain" />
                 
                </div>
              </Link>
              <p className="text-[#084120] leading-relaxed mx-auto mb-8 font-bold">
              A Sustainable Endowment That Reinvests In Marginalized Communities Through Education

              </p>
              <div className="border-t border-slate-800 pt-8">
                <p className="text-[#084120]">
                  © {new Date().getFullYear()} Nour Endowment. All rights reserved. | Tax ID: 99-3778982
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
