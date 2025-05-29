interface SubjectCardProps {
  title: string;
  progress?: number;
  image?: string;
}

const emojiMap: Record<string, string> = {
  'Mathématiques': '🧮',
  'Histoire': '👑',
  'Géographie': '🌍',
  'Physique-Chimie': '🧪',
  'Enseignement scientifique': '🔬',
  'Enseignement Scientifique': '🔬',
  'SES': '🏛️',
  'Anglais': '🇬🇧',
  'Allemand': '🇩🇪',
  'Espagnol': '🇪🇸',
  'Philosophie': '🏛️',
  'SVT': '🧬',
  'Français': '📚',
};

const pastelMap: Record<string, string> = {
  'Mathématiques': 'bg-blue-100',
  'Histoire': 'bg-yellow-100',
  'Géographie': 'bg-green-100',
  'Physique-Chimie': 'bg-purple-100',
  'Enseignement scientifique': 'bg-pink-100',
  'SES': 'bg-orange-100',
  'Anglais': 'bg-indigo-100',
  'Allemand': 'bg-gray-100',
  'Espagnol': 'bg-red-100',
  'Philosophie': 'bg-yellow-100',
  'SVT': 'bg-green-100',
  'Français': 'bg-pink-100',
};

const SubjectCard = ({ title, progress = 0, image }: SubjectCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
      <div className="w-full h-36">
        {image && (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
            style={{ borderTopLeftRadius: '0.75rem', borderTopRightRadius: '0.75rem' }}
          />
        )}
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-gray-800 text-center mb-3">{title}</h4>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard; 