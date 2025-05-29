import React from 'react';
import NeuralNetworkBackground from './NeuralNetworkBackground';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[600px] w-full">
      <NeuralNetworkBackground className="h-full w-full" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
          SoutienAI
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
          Votre assistant intelligent pour un apprentissage personnalisé et efficace
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-3 rounded-lg font-bold text-white shadow-md hover:shadow-lg hover:ring-2 hover:ring-[#2962FF] hover:ring-opacity-50 transition-all text-lg"
            style={{
              background: 'linear-gradient(90deg, #2962FF 0%, #3D5AFE 100%)',
              boxShadow: '0 4px 16px 0 rgba(41,98,255,0.10)'
            }}>
            Commencer
          </button>
          <button className="px-8 py-3 rounded-lg font-bold text-[#2962FF] border-2 border-[#2962FF] hover:bg-[#2962FF] hover:text-white transition-all text-lg">
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero; 