import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { PhoneCall, FileText, ClipboardList, PenTool, CheckCircle, Globe, Wrench } from "lucide-react"

const steps = [
  { icon: PhoneCall, title: "Initial Contact", description: "We start by understanding your needs and goals through a detailed consultation." },
  { icon: FileText, title: "Project Definition", description: "Work with our experts to define a custom web project, outlining clear and precise requirements." },
  { icon: ClipboardList, title: "Planning & Organization", description: "We assign an experienced project manager and create a detailed timeline to ensure smooth project execution." },
  { icon: PenTool, title: "Design & Development", description: "We integrate your design and develop a custom solution, ensuring high-quality performance and functionality." },
  { icon: CheckCircle, title: "Quality Control", description: "A rigorous quality assurance process ensures that the final product meets all expectations and standards." },
  { icon: Globe, title: "Project Delivery & Hosting", description: "Your website is hosted and launched with a focus on stability, security, and performance." },
  { icon: Wrench, title: "Maintenance & Support", description: "We offer ongoing maintenance and updates to ensure your site adapts to evolving needs and technologies." },
]

export default function DevServiceProcess() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32  text-white">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-4 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#9cff1e] to-[#7acc17]">
            Our Web Development Process
          </h2>
          <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            From concept to launch, we follow a structured approach to deliver exceptional results.
          </p>
        </motion.div>

        <div className="mt-16 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#9cff1e] opacity-20"></div>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <Card className={`w-full max-w-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'} bg-gray-900 border-[#9cff1e] border-opacity-20`}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#9cff1e] bg-opacity-20 flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-[#9cff1e]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#9cff1e]">{step.title}</h3>
                      <p className="mt-2 text-sm text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#9cff1e]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}