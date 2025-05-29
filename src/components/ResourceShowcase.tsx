import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Brain } from 'lucide-react';

const programs = [
  {
    id: 1,
    title: 'Système Marocain',
    flag: 'https://flagcdn.com/ma.svg',
    levels: ['Primaire', 'Collège', 'Lycée'],
    code: 'MA',
    color: 'from-red-500 to-green-600',
    isAIRecommended: true
  },
  {
    id: 2,
    title: 'Mission Française',
    flag: 'https://flagcdn.com/fr.svg',
    levels: ['CP à Terminale'],
    code: 'FR',
    color: 'from-blue-500 via-white to-red-500',
    isAIRecommended: true
  },
  {
    id: 3,
    title: 'American Curriculum',
    flag: 'https://flagcdn.com/us.svg',
    levels: ['Elementary', 'Middle School', 'High School'],
    code: 'US',
    color: 'from-red-500 via-white to-blue-500',
    isAIRecommended: false
  },
  {
    id: 4,
    title: 'British System',
    flag: 'https://flagcdn.com/gb.svg',
    levels: ['Primary', 'Secondary', 'A-Levels'],
    code: 'GB',
    color: 'from-red-500 to-blue-500',
    isAIRecommended: false
  }
];

const ResourceShowcase: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="resources" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary rounded-full"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `pulse ${Math.random() * 2 + 2}s infinite`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-full mb-4">
            <Brain size={18} className="text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Nos Programmes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Des cours adaptés aux programmes officiels</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pour accompagner tous les élèves dans leur parcours scolaire
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {programs.map((program) => (
            <motion.div
              key={program.id}
              className="relative bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              onHoverStart={() => setHoveredId(program.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className={`h-2 w-full bg-gradient-to-r ${program.color}`} />
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={program.flag} 
                    alt={`${program.title} flag`} 
                    className="w-8 h-8 rounded-full mr-3 shadow-sm"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{program.title}</h3>
                    <div className="text-sm text-gray-500">{program.code}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {program.levels.map((level, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
                    >
                      {level}
                    </span>
                  ))}
                </div>

                {program.isAIRecommended && (
                  <div className="absolute top-4 right-4 bg-primary/10 text-primary text-xs px-2 py-1 rounded-full flex items-center">
                    <Brain size={12} className="mr-1" />
                    <span>AI Optimized</span>
                  </div>
                )}

                <motion.div 
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                  animate={hoveredId === program.id ? { scale: 1.1 } : { scale: 1 }}
                >
                  <button className="bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:bg-primary/90 transition-colors">
                    <BookOpen size={16} />
                    <span>Explorer</span>
                  </button>
                </motion.div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceShowcase;