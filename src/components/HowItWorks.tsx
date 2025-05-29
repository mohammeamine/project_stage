import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Brain, BarChart as ChartBar } from 'lucide-react';

const steps = [
  {
    icon: <BookOpen className="w-8 h-8 text-white" />,
    title: 'Select Your Subject',
    description: 'Choose a subject you want to learn or improve in from our extensive library.'
  },
  {
    icon: <Brain className="w-8 h-8 text-white" />,
    title: 'AI Matches Resources',
    description: 'Our AI analyzes your learning style and goals to match you with the best resources.',
    isAI: true
  },
  {
    icon: <ChartBar className="w-8 h-8 text-white" />,
    title: 'Learn and Track Progress',
    description: 'Study at your own pace and track your progress with detailed analytics.'
  }
];

const HowItWorks: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const lineProgress = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">How It Works</h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <motion.div 
            className="absolute top-24 left-1/2 w-0.5 bg-gray-200 transform -translate-x-1/2"
            style={{ 
              height: "calc(100% - 80px)",
              scaleY: lineProgress,
              transformOrigin: "top"
            }}
          />
          
          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex mb-16 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                <div className="relative flex-shrink-0 z-10">
                  <div className={`w-16 h-16 flex items-center justify-center rounded-full ${step.isAI ? 'bg-[#3D5AFE] ai-glow' : 'bg-[#3D5AFE]'}`}>
                    {step.icon}
                    {step.isAI && (
                      <div className="absolute inset-0 rounded-full" style={{ 
                        boxShadow: '0 0 15px rgba(61, 90, 254, 0.7)',
                        animation: 'glow 2s ease-in-out infinite'
                      }}></div>
                    )}
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <span className="text-lg font-bold text-white">{index + 1}</span>
                  </div>
                </div>
                
                <div className={`flex-1 p-6 bg-white rounded-lg shadow-md ${step.isAI ? 'border border-blue-100' : ''}`}>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  
                  {step.isAI && (
                    <div className="mt-4 flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#3D5AFE] mr-2"></div>
                      <span className="text-sm text-[#3D5AFE] font-medium">AI-Powered</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;