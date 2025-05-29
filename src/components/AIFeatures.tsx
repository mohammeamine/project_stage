import React from 'react';
import { motion } from 'framer-motion';
import { Brain, CheckCircle, BarChart2 } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-12 h-12 text-[#3D5AFE]" />,
    title: 'Smart Recommendations',
    description: 'Get resources tailored to your learning style and progress.'
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-[#3D5AFE]" />,
    title: 'Instant Feedback',
    description: 'Quizzes and exams with immediate, actionable insights.'
  },
  {
    icon: <BarChart2 className="w-12 h-12 text-[#3D5AFE]" />,
    title: 'Progress Insights',
    description: 'Track your growth with detailed AI-driven stats.'
  }
];

const AIFeatures: React.FC = () => {
  return (
    <section className="py-24 neural-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-full mb-4">
            <Brain size={18} className="text-[#3D5AFE] mr-2" />
            <span className="text-sm font-medium text-[#3D5AFE]">AI-Powered</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Powered by AI, Designed for You</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our advanced AI tools analyze your learning patterns and preferences to deliver a personalized educational experience.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16"></div>
              
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center ai-glow">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              
              <div className="absolute bottom-0 left-0 w-full h-1">
                <div className="w-full h-full bg-gradient-to-r from-[#3D5AFE] to-purple-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#3D5AFE] filter blur-xl opacity-20 transform scale-125 rounded-full"></div>
              <button className="btn-primary relative z-10">
                Experience AI-Powered Learning
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;