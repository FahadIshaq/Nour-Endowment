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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    // For now, we'll just show the success modal
    setShowSuccessModal(true)
    
    // Reset form
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
              Have questions about our programs? Want to partner with us? Ready to apply for funding?
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                icon: Mail,
                title: "Email Us",
                description: "Send us a detailed message",
                contact: "info@nourendowment.org",
                action: "mailto:info@nourendowment.org"
              },
              {
                icon: Phone,
                title: "Call Us",
                description: "Speak with our team directly",
                contact: "+1 (555) 123-4567",
                action: "tel:+15551234567"
              },
              {
                icon: MapPin,
                title: "Visit Us",
                description: "Our main office location",
                contact: "123 Main Street, City, State",
                action: "#"
              }
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
      </section>

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
                  Whether you have questions about our programs, want to explore partnership opportunities, or are ready to apply for funding, we're here to help.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#084120] rounded-full"></div>
                    <span className="text-slate-700">General inquiries and questions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#084120] rounded-full"></div>
                    <span className="text-slate-700">Partnership opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#084120] rounded-full"></div>
                    <span className="text-slate-700">Funding applications</span>
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
