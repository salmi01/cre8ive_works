"use client";

import IconCloud from "@/components/ui/icon-cloud";
import { Computer, Network } from "lucide-react";
import { Cloud, ShoppingCart, Code, Briefcase, Layout } from "lucide-react"
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import DevServiceProcess from "./components/devServiceProcess";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const services = [
  { icon: Cloud, title: "SaaS Development", description: "Build scalable, secure, and fully customized Software-as-a-Service platforms tailored to your business needs, offering seamless user experiences." },
  { icon: Layout, title: "Showcase Websites", description: "Create professional, visually appealing websites designed to showcase your brand and attract potential clients, ensuring a strong online presence." },
  { icon: ShoppingCart, title: "E-Commerce Websites", description: "Develop robust e-commerce platforms with user-friendly interfaces, secure payment systems, and optimized features to boost online sales." },
  { icon: Code, title: "Web Applications", description: "Design and develop custom web applications that streamline processes, enhance user experience, and meet your specific business requirements." },
  { icon: Briefcase, title: "Portfolio Websites", description: "Craft personalized portfolio websites that beautifully display your work, helping you stand out and attract new opportunities." },
]

const projects = [
  { title: "TechSaaS Platform", description: "A comprehensive SaaS solution for tech startups", image: "/placeholder.svg?height=200&width=300", link: "#" },
  { title: "Artisan Showcase", description: "A visually stunning website for a local artisan", image: "/placeholder.svg?height=200&width=300", link: "#" },
  { title: "GourmetMarket", description: "An e-commerce platform for gourmet food products", image: "/placeholder.svg?height=200&width=300", link: "#" },
  { title: "TaskMaster App", description: "A feature-rich web application for project management", image: "/placeholder.svg?height=200&width=300", link: "#" },
  { title: "DesignerPortfolio", description: "A sleek portfolio website for a graphic designer", image: "/placeholder.svg?height=200&width=300", link: "#" },
  { title: "FitnessPal", description: "A SaaS platform for fitness tracking and coaching", image: "/placeholder.svg?height=200&width=300", link: "#" },
]

const features = [
  {
    name: 'Custom Web Solutions',
    description:
      'Tailored websites that align perfectly with your brand and business goals',
    icon: Computer,
  },
  {
    name: 'Lightning Fast Performance',
    description: 'Optimized for speed to ensure the best user experience and SEO rankings',
    icon: Computer,
  },
  {
    name: 'Cutting-edge Technologies',
    description: 'Built with the latest frameworks and tools for scalability and future-proofing',
    icon: Network,
  },
]

const webDev = () => {
  const [activeTab, setActiveTab] = useState("services")

  return (
    <div className="text-white">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center space-y-4 text-center p-4 pt-10 md:p-20 px-2"
      >
        <h2 className="text-3xl p-2 font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#9cff1e] to-[#7acc17]">
          Web Development
        </h2>
        <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          We don't just build websites, we create digital masterpieces that captivate, engage, and convert.
        </p>
      </motion.div>

      <div className="mx-4 md:mx-8 lg:mx-16">

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-12">
          <TabsList className="grid w-full grid-cols-2 bg-gray-800">
            <TabsTrigger value="services">Our Services</TabsTrigger>
            <TabsTrigger value="projects">Our Projects</TabsTrigger>
          </TabsList>
          <TabsContent value="services" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-black text-white">
                    <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                      <service.icon className="h-12 w-12 text-[#9cff1e]" />
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="text-sm text-gray-400">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="projects" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col bg-black text-white">
                    <CardContent className="p-0">
                      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-sm text-gray-400">{project.description}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <Button asChild className="w-full bg-gradient-to-r from-[#9cff1e] to-[#7acc17] text-black hover:from-[#8be619] hover:to-[#69b614]">
                        <a href={project.link}>View Project</a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex justify-center mt-16"
        >
          <Button size="lg" className="bg-gradient-to-r from-[#9cff1e] to-[#7acc17] text-black hover:from-[#8be619] hover:to-[#69b614]">
            Start Your Project
          </Button>
        </motion.div>
      </div>


      {/* 
      <div className="overflow-hidden ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className={`text-2xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 font-semibold tracking-tight dark:text-white text-gray-900`}>
                  Nextjs Starter Kit: A faster way to production
                </p>
                <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
                  Accelerate your development with this powerful Nextjs Starter Kit
                </p>
                <dl className="mt-10 max-w-xl space-y-8 leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold dark:text-gray-100 text-gray-900">
                        <feature.icon className="absolute left-1 top-1 h-5 w-5" aria-hidden="true" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline dark:text-gray-400">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg   px-10 pb-20 pt-8 ">
              <IconCloud iconSlugs={slugs} />
            </div>

          </div>
        </div>
      </div>
      */}
      <DevServiceProcess/>
    </div>
  );
};

export default webDev;
