import { Clock, Users, Star } from "lucide-react";

interface CourseCardProps {
  title: string;
  instructor: string;
  progress: number;
  duration: string;
  students: string;
  rating: number;
  image: string;
}

const CourseCard = ({ title, instructor, progress, duration, students, rating, image }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className={`h-32 ${image} relative`}>
        <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-xs font-medium text-gray-600">
          {progress}%
        </div>
      </div>
      
      <div className="p-4">
        <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
        <p className="text-sm text-gray-600 mb-3">by {instructor}</p>
        
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <Clock size={12} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users size={12} />
            <span>{students}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard; 