import React from 'react';
import { motion } from 'framer-motion';
import { Route, Brain, BarChart } from 'lucide-react';

const features = [
  {
    icon: <Route className="w-10 h-10 text-[#3D5AFE]" />,
    title: 'Personalized Learning Paths',
    description: 'Your AI-powered assistant crafts a learning plan tailored to your needs and goals.'
  },
  {
    icon: <Brain className="w-10 h-10 text-[#3D5AFE]" />,
    title: 'Curated Quality Resources',
    description: 'Access only the best resources, handpicked and organized for you.'
  },
  {
    icon: <BarChart className="w-10 h-10 text-[#3D5AFE]" />,
    title: 'Progress Tracking',
    description: 'Visualize your growth with real-time progress bars and AI insights.'
  }
];

const ValueProposition: React.FC = () => {
  return (
    <section id="value-proposition" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-full mb-4">
            <Brain className="w-5 h-5 text-[#3D5AFE] mr-2" />
            <span className="text-sm font-medium text-[#3D5AFE]">Why Choose SoutienAI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Empowering Your Learning Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the future of education with our AI-powered platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center relative">
                    {feature.icon}
                    <div className="absolute inset-0 rounded-full bg-blue-200 animate-ping opacity-20" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1">
                <div className="w-full h-full bg-gradient-to-r from-[#3D5AFE] to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;