import { BookOpen, Users, Layers, TrendingUp, Star, Award, Zap, Smile, LayoutDashboard } from "lucide-react";
import StatsCard from "../components/StatsCard";
import ProgressChart from "../components/ProgressChart";
import RecentActivity from "../components/RecentActivity";
import CourseCard from "../components/CourseCard";
import SubjectCard from "../components/SubjectCard";
import { useState, useContext } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, BarChart, Bar } from 'recharts';
import { SidebarContext } from '../components/DashboardSidebar';

// À la une
const featured = [
  {
    title: "Physique-Chimie",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
    progress: 60,
    badge: "Nouveau"
  }
];

// Statistiques fictives
const stats = [
  {
    title: "Utilisateurs",
    value: "1 250",
    subtitle: "Actifs ce mois-ci",
    color: "text-blue-600",
    icon: <Users size={24} />
  },
  {
    title: "Classes",
    value: "32",
    subtitle: "Groupes actifs",
    color: "text-green-600",
    icon: <Layers size={24} />
  },
  {
    title: "Matières",
    value: "14",
    subtitle: "Enseignées",
    color: "text-purple-600",
    icon: <BookOpen size={24} />
  },
  {
    title: "Progression",
    value: "68%",
    subtitle: "Moyenne générale",
    color: "text-orange-600",
    icon: <TrendingUp size={24} />
  }
];

// Données pour le graphique de progression (ligne)
const progressionData = [
  { mois: 'Jan', progression: 45 },
  { mois: 'Fév', progression: 52 },
  { mois: 'Mar', progression: 58 },
  { mois: 'Avr', progression: 61 },
  { mois: 'Mai', progression: 66 },
  { mois: 'Juin', progression: 68 },
];

// Données pour le camembert (répartition utilisateurs par classe)
const pieData = [
  { name: 'Classe A', value: 400 },
  { name: 'Classe B', value: 300 },
  { name: 'Classe C', value: 200 },
  { name: 'Classe D', value: 100 },
];
const COLORS = ['#3B82F6', '#10B981', '#8B5CF6', '#F59E42'];

// Progression par matière (remplace l'assiduité)
const subjectProgressData = [
  { subject: 'Mathématiques', progress: 80 },
  { subject: 'Anglais', progress: 65 },
  { subject: 'Physique', progress: 70 },
  { subject: 'Histoire', progress: 60 },
  { subject: 'SVT', progress: 55 },
];

const courses = [
  {
    title: "Mathématiques avancées",
    instructor: "-",
    progress: 80,
    duration: "12h",
    students: "1 000",
    rating: 4.7,
    image: "bg-gradient-to-br from-blue-500 to-blue-600"
  },
  {
    title: "Anglais B2",
    instructor: "-",
    progress: 60,
    duration: "8h",
    students: "850",
    rating: 4.8,
    image: "bg-gradient-to-br from-purple-500 to-purple-600"
  }
];

// Composant bannière de progression gamifiée avec icône
const ProgressBanner = ({ percent = 68, level = 'Beginner' }) => {
  const left = `calc(${percent}% - 24px)`;
  return (
    <div className="w-full border-2 border-blue-300 rounded-xl bg-blue-50 p-4 mb-8 relative overflow-hidden" style={{ minHeight: 140 }}>
      {/* Décor ciel */}
      <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
        <div className="absolute top-4 left-12 w-16 h-10 bg-white rounded-full opacity-60" />
        <div className="absolute top-8 left-1/2 w-12 h-8 bg-white rounded-full opacity-50" />
        <div className="absolute top-2 right-16 w-10 h-6 bg-white rounded-full opacity-40" />
        {/* Arbres */}
        <div className="absolute bottom-8 left-24 w-8 h-16">
          <div className="w-6 h-6 bg-purple-200 rounded-full absolute left-1 top-2" />
          <div className="w-2 h-8 bg-purple-500 rounded-b-full absolute left-3 top-8" />
        </div>
        <div className="absolute bottom-10 left-1/2 w-10 h-20">
          <div className="w-8 h-8 bg-purple-200 rounded-full absolute left-1 top-2" />
          <div className="w-2 h-10 bg-purple-500 rounded-b-full absolute left-4 top-10" />
        </div>
        <div className="absolute bottom-8 right-32 w-8 h-16">
          <div className="w-6 h-6 bg-purple-200 rounded-full absolute left-1 top-2" />
          <div className="w-2 h-8 bg-purple-500 rounded-b-full absolute left-3 top-8" />
        </div>
      </div>
      {/* Sol */}
      <div className="absolute left-0 right-0 bottom-0 h-1/2 bg-purple-100 z-0" />
      {/* Barre de progression */}
      <div className="relative z-10 flex items-center mt-12">
        <div className="w-full h-3 bg-purple-200 rounded-full relative">
          <div className="h-3 bg-purple-500 rounded-full transition-all duration-500" style={{ width: `${percent}%` }} />
          {/* Icône sur la barre */}
          <div className="absolute -top-10" style={{ left }}>
            <div className="w-12 h-12 rounded-full border-4 border-white shadow-lg bg-white flex items-center justify-center">
              <Smile size={32} className="text-purple-500" />
            </div>
          </div>
          {/* Pourcentage */}
          <div className="absolute left-1/2 -bottom-8 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow text-base font-bold text-purple-700 border border-purple-200">
            {percent}%
          </div>
        </div>
        {/* Trophée / niveau */}
        <div className="flex flex-col items-center ml-4">
          <div className="w-14 h-14 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 text-2xl font-bold shadow">
            <Award size={32} />
          </div>
          <span className="text-sm text-gray-600 mt-1 font-semibold">{level}</span>
        </div>
      </div>
    </div>
  );
};

const DashboardPage = () => {
  const { open } = useContext(SidebarContext);
  // Action rapide : découvrir une matière au hasard
  const handleDiscoverRandom = () => {
    alert(`Découvre la matière : Mathématiques avancées`);
  };

  return (
    <div className={`pt-4 px-4 md:px-8 bg-gray-50 min-h-screen transition-all duration-300 ${open ? 'ml-64' : 'ml-20'}`}>
      {/* Header premium */}
      <header className="flex items-center gap-4 px-6 pt-2 md:pt-4 pb-4">
        <span className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
          <LayoutDashboard size={28} className="text-blue-600" />
        </span>
        <h1 className="text-3xl font-extrabold text-gray-900">Tableau de bord</h1>
      </header>
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm p-4 md:p-8">
        {/* Résumé de progression globale et actions rapides */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 animate-fade-in">
        
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              <Star size={18} /> Continuer là où j'en étais
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-lg shadow hover:bg-blue-50 transition" onClick={handleDiscoverRandom}>
              <Zap size={18} /> Découvrir au hasard
            </button>
          </div>
        </div>

        {/* Bannière de progression gamifiée */}
        <ProgressBanner percent={68} level="Beginner" />

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-fade-in">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Graphiques principaux */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 animate-fade-in">
          {/* Progression globale (ligne) */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Progression globale</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={progressionData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mois" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="progression" stroke="#3B82F6" strokeWidth={3} dot={{ r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* Répartition par classe (camembert) */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Répartition des utilisateurs par classe</h3>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Progression par matière (barres) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8 animate-fade-in">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Progression par matière</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subjectProgressData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="subject" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="progress" fill="#3B82F6" name="Progression (%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Activité récente */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 animate-fade-in">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Mes cours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </div>
          <div>
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
