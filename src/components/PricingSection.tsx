import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Basique',
    price: 'Gratuit',
    description: 'Accès limité pour découvrir la plateforme',
    features: [
      'Accès à 5 cours gratuits',
      "Quiz d'entraînement limités",
      'Tableau de bord basique',
      'Support par email',
    ],
    featured: false,
  },
  {
    name: 'Standard',
    price: '149 DH',
    period: 'par mois',
    description: 'Pour les élèves cherchant à améliorer leurs résultats',
    features: [
      'Accès à tous les cours',
      "Quiz d'entraînement illimités",
      'Suivi de progression détaillé',
      'Support prioritaire',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: '299 DH',
    period: 'par mois',
    description: 'Accompagnement complet pour réussir',
    features: [
      'Tout du plan Standard',
      'Sessions de tutorat individuel',
      'Préparation aux examens',
      'Cours en direct',
    ],
    featured: false,
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Nos Tarifs</h2>
        <p className="text-gray-500 mb-12">Des formules adaptées à tous les besoins et tous les budgets pour accompagner chaque élève vers la réussite.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className={`rounded-2xl border bg-white p-8 shadow-sm flex flex-col items-start transition-all duration-300 group relative overflow-hidden ${
                plan.featured
                  ? 'border-2 border-[#3D5AFE] shadow-lg scale-105 z-10' // carte mise en avant
                  : 'border-gray-200'
              } ${
                plan.featured
                  ? 'hover:scale-110 hover:shadow-2xl'
                  : 'hover:scale-105 hover:shadow-lg'
              }`}
            >
              <div className="mb-2 text-left w-full">
                <span className="font-semibold text-gray-700 text-lg">{plan.name}</span>
              </div>
              <div className="mb-2 text-left w-full">
                <span className="text-2xl md:text-3xl font-extrabold text-gray-900">{plan.price}</span>
                {plan.period && <span className="text-gray-500 font-medium ml-1">{plan.period}</span>}
              </div>
              <div className="mb-4 text-left w-full text-gray-500 text-sm">{plan.description}</div>
              <ul className="mb-6 space-y-2 w-full">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-[#3D5AFE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-bold transition-all text-white text-base mt-auto focus:outline-none focus:ring-2 focus:ring-[#3D5AFE] focus:ring-opacity-50 ${
                  plan.featured
                    ? 'bg-[#3D5AFE] shadow-md hover:bg-[#2952E3] hover:scale-105' // bouton bleu pour la carte en avant
                    : 'bg-gray-300 hover:bg-gray-400 text-gray-700 hover:scale-105'
                }`}
              >
                {plan.featured ? 'Choisir Standard' : 'Choisir'}
              </button>
              {/* Animation de halo pour la carte en avant */}
              {plan.featured && (
                <div className="absolute -inset-2 rounded-2xl pointer-events-none animate-pulse bg-blue-100 opacity-30 z-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 