"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Facebook } from "lucide-react"
import { useState } from "react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { CardContent } from "@/components/ui/card"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
}

export default function TeamPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [openAdvIndex, setOpenAdvIndex] = useState<number | null>(null)
  return (
    <div>
      {/* Hero Section */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold leading-tight mb-8 text-black"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Our Team
            </motion.h1>

            <motion.p
              className="text-xl text-slate-600 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Meet the dedicated individuals working to create change through education.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Board Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h3 variants={fadeInUp} className="text-4xl font-extrabold text-center mb-4 text-[#5B6A3F] drop-shadow-lg tracking-wide">
              Board
            </motion.h3>
            <div className="flex justify-center mb-12">
              <div className="w-24 h-1 rounded-full bg-[#5B6A3F]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Yousef Hammad",
                  role: "Board Member",
                  image: "/yousaf.avif",
                  linkedin: "https://www.linkedin.com/in/yousefham/",
                  bio: `Yousef has over 7 years of investment experience, including roles in public equity investing, investment banking, and building a successful start-up. He graduated from Michigan State University, where he played lacrosse and earned a bachelor’s in finance.\n\nYousef is deeply committed to expanding access to education. He played a key role in building and scaling WaslaConnect, leading corporate partnerships and investor relations. Wasla focuses on providing mentorship and educational support to displaced populations.`
                },
                {
                  name: "Sara Taleb-Agha",
                  role: "Board Member",
                  image: "/sara.avif",
                  linkedin: "https://www.linkedin.com/in/tsara7/",
                  bio: `Sara is a Master’s student at the University of Michigan and a healthcare consultant at Chartis, with 6+ years of experience working with nonprofits at the intersection of public health, health equity, and education access. She holds dual bachelor’s degrees in Biology and Psychology from Michigan.\n\nSara played a pivotal role in launching a tutoring program for underserved students. She is passionate about social impact and committed to empowering others through education and access.`
                },
              ].map((member, index) => (
                <motion.div key={index} variants={fadeInUp} className="flex justify-center items-stretch">
                  <Dialog open={openIndex === index} onOpenChange={open => setOpenIndex(open ? index : null)}>
                    <Card className="w-full max-w-xs flex flex-col items-center justify-between bg-white rounded-3xl border border-[#5B6A3F]/20 shadow-xl hover:shadow-[#5B6A3F]/20 hover:-translate-y-2 hover:scale-[1.025] transition-all duration-300 p-6 group">
                      <CardHeader className="w-full flex flex-col items-center">
                        {/* Decorative accent */}
                        <div className="w-8 h-1 rounded-full bg-[#5B6A3F] mb-4 group-hover:bg-[#5B6A3F]/80 transition" />
                        <div className="w-36 h-36 rounded-full overflow-hidden flex items-center justify-center mb-4 border-4 border-[#5B6A3F]/20 shadow-md bg-white">
                          <img
                            src={member.image}
                            alt={member.name}
                            className={`w-full h-full object-cover ${member.name === "Sara Taleb-Agha" ? '[object-position:center_20%]' : 'object-top'}`}
                          />
                        </div>
                        <CardTitle className="text-2xl font-extrabold text-center text-[#5B6A3F] tracking-wide drop-shadow-sm">
                          {member.name}
                        </CardTitle>
                        <div className="flex items-center gap-2 mb-2 mt-1">
                          <CardDescription className="text-slate-600 text-center">{member.role}</CardDescription>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`LinkedIn profile of ${member.name}`}
                            className="ml-1 text-[#5B6A3F] hover:text-[#5B6A3F]/80 transition"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        </div>
                      </CardHeader>
                      <motion.div {...scaleOnHover} className="mt-4 w-full flex justify-center">
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="w-full max-w-[140px] group-hover:border-[#5B6A3F] group-hover:text-[#5B6A3F]">
                            Learn More
                          </Button>
                        </DialogTrigger>
                      </motion.div>
                    </Card>
                    <DialogContent className="max-w-2xl w-full bg-white/90 backdrop-blur-lg border-0 shadow-2xl rounded-3xl p-0 overflow-hidden">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-4 md:p-8">
                        <div className="w-full flex justify-center md:block md:w-auto mb-4 md:mb-0">
                          <img src={member.image} alt={member.name} className="w-32 h-32 md:w-48 md:h-48 rounded-2xl object-cover object-center border-4 border-emerald-100 shadow-lg" />
                        </div>
                        <div className="flex-1 min-w-0 w-full">
                          <DialogHeader>
                            <DialogTitle className="text-2xl md:text-3xl font-extrabold text-[#5B6A3F] mb-2">
                              {member.name}
                            </DialogTitle>
                            <DialogDescription className="text-base md:text-lg text-slate-700 mb-2 font-semibold">
                              {member.role}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="flex items-center gap-3 mb-4">
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`LinkedIn profile of ${member.name}`}
                            >
                              <Button variant="ghost" size="icon" className="rounded-full bg-[#5B6A3F] text-white hover:bg-[#5B6A3F]/90">
                                <Linkedin className="w-6 h-6" />
                              </Button>
                            </a>
                          </div>
                          <div className="text-slate-700 text-sm md:text-base whitespace-pre-line leading-relaxed">
                            {member.bio}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h3 variants={fadeInUp} className="text-4xl font-extrabold text-center mb-4 text-[#5B6A3F] drop-shadow-lg tracking-wide">
              Advisory Board
            </motion.h3>
            <div className="flex justify-center mb-12">
              <div className="w-24 h-1 rounded-full bg-[#5B6A3F]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Imam Suleiman Hani",
                  role: "Advisory Board Member",
                  image: "/suleman.png",
                  facebook: "https://www.facebook.com/imamsuleimanhani/",
                  bio: `Imam Suleiman Hani is a theologian and human-rights advocate who bridges classical Islamic scholarship with contemporary leadership. He serves as Dean of Academic Affairs at Al Maghrib Institute, guiding the learning of more than 300,000 students across six continents, and is a Research Fellow at Yaqeen Institute for Islamic Research. Holding master's degrees from Harvard University and the University of Jordan, he is completing his doctorate in leadership at New York University.\n\nGrounded in dozens of traditional ijāzahs in Qur'an memorization, ḥadīth sciences, and Islamic law, Imam Suleiman pairs that expertise with modern academic rigor to address today's ethical and social-justice challenges. Over the past decade he has lectured in 50+ countries, advised national and international organizations, and authored widely read books.\n\nHis scholarship and leadership perfectly align with Nour Endowment's mission to invest in education and community uplift, offering an authentic voice rooted in faith, justice, and global experience.`
                },
                {
                  name: "Jawad Mourabet",
                  role: "Advisory Board Member",
                  image: "/jawad.avif",
                  linkedin: "https://www.linkedin.com/in/jawadmourabet/",
                  bio: `Jawad is an Engagement Manager at McKinsey & Company, advising financial institutions on technology strategy, with a focus on generative AI, cloud infrastructure, and team design. He previously held technology roles at Li & Fung, Verizon, and Cognizant.\n\nHe holds a Bachelors in Engineering from Stony Brook, a Master's in Civil Engineering from MIT, and an MBA from MIT Sloan, where he was an LGO Fellow.`
                },
                {
                  name: "Diana Nassar",
                  role: "Advisory Board Member",
                  image: "/diana.avif",
                  linkedin: "https://www.linkedin.com/in/diananassar/",
                  bio: `Diana is a product leader at Prime Video with 10+ years of experience in technology, media, and e-commerce. She has led 0-to-1 innovations and large-scale launches at Souq, Aramex, and now across the US.\n\nDiana holds an MBA from Stanford, a Bachelor's in Computer Engineering from the University of Jordan, and is a TechWomen Fellow. She is passionate about using technology to create impact and empower others to drive change.`
                },
              ].map((member, index) => (
                <motion.div key={index} variants={fadeInUp} className="flex justify-center items-stretch">
                  <Dialog open={openAdvIndex === index} onOpenChange={open => setOpenAdvIndex(open ? index : null)}>
                    <Card className="w-full max-w-xs flex flex-col items-center justify-between bg-white rounded-3xl border border-[#5B6A3F]/20 shadow-xl hover:shadow-[#5B6A3F]/20 hover:-translate-y-2 hover:scale-[1.025] transition-all duration-300 p-6 group">
                      <CardHeader className="w-full flex flex-col items-center">
                        {/* Decorative accent */}
                        <div className="w-8 h-1 rounded-full bg-[#5B6A3F] mb-4 group-hover:bg-[#5B6A3F]/80 transition" />
                        <div className="w-36 h-36 rounded-full overflow-hidden flex items-center justify-center mb-4 border-4 border-[#5B6A3F]/20 shadow-md bg-white">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                        <CardTitle className="text-2xl font-extrabold text-center text-[#5B6A3F] tracking-wide drop-shadow-sm">
                          {member.name}
                        </CardTitle>
                        <div className="flex items-center gap-2 mb-2 mt-1">
                          <CardDescription className="text-slate-600 text-center">{member.role}</CardDescription>
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`LinkedIn profile of ${member.name}`}
                              className="ml-1 text-blue-600 hover:text-teal-600 transition"
                            >
                              <Linkedin className="w-5 h-5" />
                            </a>
                          )}
                          {member.facebook && (
                            <a
                              href={member.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Facebook profile of ${member.name}`}
                              className="ml-1 text-blue-600 hover:text-teal-600 transition"
                            >
                              <Facebook className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </CardHeader>
                      <motion.div {...scaleOnHover} className="mt-4 w-full flex justify-center">
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="w-full max-w-[140px] group-hover:border-[#5B6A3F] group-hover:text-[#5B6A3F]">
                            Learn More
                          </Button>
                        </DialogTrigger>
                      </motion.div>
                    </Card>
                    <DialogContent className="max-w-2xl w-full bg-white/90 backdrop-blur-lg border-0 shadow-2xl rounded-3xl p-0 overflow-hidden">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-4 md:p-8">
                        <div className="w-full flex justify-center md:block md:w-auto mb-4 md:mb-0">
                          <img src={member.image} alt={member.name} className="w-32 h-32 md:w-48 md:h-48 rounded-2xl object-cover object-center border-4 border-blue-100 shadow-lg" />
                        </div>
                        <div className="flex-1 min-w-0 w-full">
                          <DialogHeader>
                            <DialogTitle className="text-2xl md:text-3xl font-extrabold text-[#5B6A3F] mb-2">
                              {member.name}
                            </DialogTitle>
                            <DialogDescription className="text-base md:text-lg text-slate-700 mb-2 font-semibold">
                              {member.role}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="flex items-center gap-3 mb-4">
                            {member.linkedin && (
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`LinkedIn profile of ${member.name}`}
                              >
                                <Button variant="ghost" size="icon" className="rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:from-blue-700 hover:to-teal-700">
                                  <Linkedin className="w-6 h-6" />
                                </Button>
                              </a>
                            )}
                            {member.facebook && (
                              <a
                                href={member.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Facebook profile of ${member.name}`}
                              >
                                <Button variant="ghost" size="icon" className="rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:from-blue-700 hover:to-teal-700">
                                  <Facebook className="w-6 h-6" />
                                </Button>
                              </a>
                            )}
                          </div>
                          <div className="text-slate-700 text-sm md:text-base whitespace-pre-line leading-relaxed">
                            {member.bio}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
