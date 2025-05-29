import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-blue-50 relative overflow-hidden">
      {/* Bubbles background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-200 opacity-40 blur-2xl animate-pulse"
            style={{
              width: `${60 + Math.random() * 100}px`,
              height: `${60 + Math.random() * 100}px`,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-[#3D5AFE] mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Take Control of Your Learning?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of students who are mastering subjects at their own pace with personalized, AI-driven learning resources.
          </motion.p>
          
          <motion.div
            className="bg-white rounded-xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-[#3D5AFE] font-bold mb-3">1</div>
                <h3 className="font-bold mb-2">Create an Account</h3>
                <p className="text-gray-600 text-sm">Sign up in less than 2 minutes with just your email.</p>
              </div>
              
              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-[#3D5AFE] font-bold mb-3">2</div>
                <h3 className="font-bold mb-2">Select Your Subjects</h3>
                <p className="text-gray-600 text-sm">Tell us what you're studying and what your goals are.</p>
              </div>
              
              <div className="p-4 border border-gray-100 rounded-lg bg-gray-50">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-[#3D5AFE] font-bold mb-3">3</div>
                <h3 className="font-bold mb-2">Start Learning</h3>
                <p className="text-gray-600 text-sm">Access your personalized learning resources immediately.</p>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group">
                <span>Start</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
             
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;