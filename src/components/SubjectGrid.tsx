import React from 'react';

const subjects = [
  {
    name: 'Mathématiques',
   
    image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=400&q=80',
    progress: 0.7,
  },
  {
    name: 'Histoire',
   
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80',
    progress: 0.5,
  },
  {
    name: 'Géographie',
  
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
    progress: 0.6,
  },
  {
    name: 'Physique-Chimie',
  
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
    progress: 0.4,
  },
  {
    name: 'Enseignement scientifique',
  
    image: 'https://images.unsplash.com/photo-1559757175-5700dde67548?auto=format&fit=crop&w=400&q=80',
    progress: 0.3,
  },
  {
    name: 'SES',
    
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    progress: 0.2,
  },
  {
    name: 'Anglais',
 
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    progress: 0.8,
  },
  {
    name: 'Allemand',
 
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80',
    progress: 0.5,
  },
  {
    name: 'Espagnol',
    
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80',
    progress: 0.3,
  },
  {
    name: 'Philosophie',
    
    image: 'https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=400&q=80',
    progress: 0.6,
  },
];

const SubjectGrid: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Matières</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {subjects.map(subject => (
          <div
            key={subject.name}
            className="rounded-2xl shadow-md bg-white overflow-hidden flex flex-col items-center transition-transform hover:scale-105 cursor-pointer border border-gray-100"
          >
            <div className="relative w-full h-32 md:h-36">
              <img
                src={subject.image}
                alt={subject.name}
                className="object-cover w-full h-full"
              />
             
            </div>
            <div className="w-full flex flex-col items-center py-4 px-2 bg-white">
              <span className="text-lg font-semibold text-gray-800 text-center mb-2">{subject.name}</span>
              <div className="w-4/5 h-2 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className="h-full rounded-full bg-blue-500 transition-all"
                  style={{ width: `${subject.progress * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubjectGrid; 