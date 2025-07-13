"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function ContactPage() {
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Send form data to backend API
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    // Instantly show success modal (do not await fetch)
    setShowSuccessModal(true)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#084120]/10 via-[#084120]/5 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#084120]/5 to-[#084120]/3"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-black"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Get in Touch
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-slate-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Have questions about our programs? Want to partner with us? 
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
            >
              <Clock className="w-5 h-5 text-[#084120]" />
              <span className="text-slate-700 font-medium">We respond within 24 hours</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              // {
              //   icon: Mail,
              //   title: "Email Us",
              //   description: "Send us a detailed message",
              //   contact: "info@nourendowment.org",
              //   action: "mailto:info@nourendowment.org"
              // },
              // {
              //   icon: Phone,
              //   title: "Call Us",
              //   description: "Speak with our team directly",
              //   contact: "+1 (555) 123-4567",
              //   action: "tel:+15551234567"
              // },
              // {
              //   icon: MapPin,
              //   title: "Visit Us",
              //   description: "Our main office location",
              //   contact: "123 Main Street, City, State",
              //   action: "#"
              // }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white border border-[#084120]/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-[#084120] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-black">{item.title}</CardTitle>
                    <CardDescription className="text-slate-600">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <a 
                      href={item.action}
                      className="text-lg font-semibold text-[#084120] hover:text-[#084120]/80 transition-colors"
                    >
                      {item.contact}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-[#084120]/5 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
                  Let's Start a Conversation
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  Whether you have general inquiries about the Nour Endowment, want to explore partnership opportunities, or have grant application questions, we’re here to help.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#084120] flex items-center justify-center">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-black mb-1">Email Us</div>
                      <a href="mailto:info@nourendowment.org" className="text-[#084120] hover:underline text-base">info@nourendowment.org</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <a href="https://www.instagram.com/nourendowment/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[#084120] hover:underline">
                      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1 0 2a1 1 0 0 1 0-2z"/></svg>
                      <span>Instagram</span>
                    </a>
                    <a href="https://www.linkedin.com/company/nour-endowment/about/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[#084120] hover:underline">
                      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75s1.75.78 1.75 1.75s-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47c-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54c3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#084120]/10 to-[#084120]/5 rounded-3xl transform rotate-3"></div>
                <img
                  src="/6.jpg"
                  alt="Contact Us"
                  className="relative rounded-3xl shadow-2xl max-w-full transform -rotate-1 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 bg-white border border-[#084120]/20 rounded-3xl shadow-2xl">
                <CardHeader className="px-0 pt-0 pb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#084120] flex items-center justify-center">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-black">Send us a Message</CardTitle>
                      <CardDescription className="text-slate-600">We'll get back to you within 24 hours</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                        <Input 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John" 
                          className="border-slate-200 focus:border-[#084120] focus:ring-[#084120]/20 rounded-xl h-12" 
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                        <Input 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe" 
                          className="border-slate-200 focus:border-[#084120] focus:ring-[#084120]/20 rounded-xl h-12" 
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                      <Input 
                        name="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john.doe@example.com" 
                        className="border-slate-200 focus:border-[#084120] focus:ring-[#084120]/20 rounded-xl h-12" 
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                      <Input 
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="How can we help you?" 
                        className="border-slate-200 focus:border-[#084120] focus:ring-[#084120]/20 rounded-xl h-12" 
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                      <Textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your inquiry, partnership interest, or funding needs..." 
                        rows={6} 
                        className="border-slate-200 focus:border-[#084120] focus:ring-[#084120]/20 rounded-xl resize-none" 
                        required
                      />
                    </div>
                    <motion.div {...scaleOnHover}>
                      <Button type="submit" className="w-full bg-[#084120] hover:bg-[#084120]/90 text-white text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                        Send Message
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="max-w-md w-[95vw] bg-white/95 backdrop-blur-lg border-0 shadow-2xl rounded-3xl p-0 overflow-hidden">
          <div className="flex flex-col items-center text-center p-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-20 h-20 rounded-full bg-[#084120] flex items-center justify-center mb-6 shadow-lg"
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </motion.div>
            
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-black mb-2">
                Message Sent Successfully!
              </DialogTitle>
            </DialogHeader>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 mb-6 leading-relaxed"
            >
              Thank you for reaching out to us. We've received your message and will get back to you within 24 hours.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                onClick={() => setShowSuccessModal(false)}
                className="bg-[#084120] hover:bg-[#084120]/90 text-white px-8 py-3 rounded-xl"
              >
                Close
              </Button>
            </motion.div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
