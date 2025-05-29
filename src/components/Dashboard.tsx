import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import SubjectCard from './SubjectCard';
import CourseCard from './CourseCard';
import StatsCard from './StatsCard';
import ProgressChart from './ProgressChart';
import RecentActivity from './RecentActivity';
import { BookOpen, BarChart3, Users } from 'lucide-react';

const subjects = [
  {
    title: 'Mathématiques',
    image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=400&q=80',
    progress: 70,
  },
  {
    title: 'Histoire',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80',
    progress: 50,
  },
  {
    title: 'Géographie',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
    progress: 60,
  },
  {
    title: 'Physique-Chimie',
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
    progress: 40,
  },
];

const courses = [
  {
    title: 'Introduction à React',
    instructor: 'Mme Dupont',
    progress: 80,
    duration: '3h',
    students: '120',
    rating: 4.8,
    image: 'bg-blue-100',
  },
  {
    title: 'Bases de la chimie',
    instructor: 'M. Martin',
    progress: 55,
    duration: '2h',
    students: '90',
    rating: 4.5,
    image: 'bg-green-100',
  },
];

const stats = [
  {
    title: 'Cours suivis',
    value: '12',
    subtitle: 'Total cette année',
    color: 'text-blue-600',
    icon: <BookOpen size={24} className="text-blue-600" />,
  },
  {
    title: 'Heures étudiées',
    value: '45h',
    subtitle: 'Cette semaine',
    color: 'text-green-600',
    icon: <BarChart3 size={24} className="text-green-600" />,
  },
  {
    title: 'Membres',
    value: '320',
    subtitle: 'Dans votre niveau',
    color: 'text-purple-600',
    icon: <Users size={24} className="text-purple-600" />,
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col p-6 md:p-10">
        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, i) => (
            <StatsCard key={i} {...stat} />
          ))}
        </div>
        {/* Matières */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">Matières</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {subjects.map((subject, i) => (
            <SubjectCard key={i} {...subject} />
          ))}
        </div>
        {/* Mes cours */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">Mes cours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {courses.map((course, i) => (
            <CourseCard key={i} {...course} />
          ))}
        </div>
        {/* Progression & Activité */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProgressChart />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 