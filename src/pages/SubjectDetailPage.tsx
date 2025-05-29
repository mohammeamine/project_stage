import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { SidebarContext } from '../components/DashboardSidebar';

const subjectsData = [
  {
    key: 'mathématiques',
    title: 'Mathématiques',
    level: 'Terminale',
    themes: [
      {
        title: 'Géométrie',
        chapters: [
          { title: 'Manipulation des vecteurs, des droites et des plans de l’espace', number: 1, progress: 0 },
          { title: 'Le produit scalaire', number: 2, progress: 0 },
          { title: 'Représentation paramétrique et équation cartésienne', number: 3, progress: 0 },
        ],
      },
      {
        title: 'Analyse',
        chapters: [
          { title: 'Les suites', number: 4, progress: 0 },
          { title: 'Les limites de fonctions', number: 5, progress: 0 },
          { title: 'La dérivation', number: 6, progress: 0 },
          { title: 'La continuité', number: 7, progress: 0 },
          { title: 'La fonction logarithme', number: 8, progress: 0 },
          { title: 'Les fonctions trigonométriques', number: 9, progress: 0 },
          { title: 'Les primitives', number: 10, progress: 0 },
          { title: 'Les équations différentielles', number: 11, progress: 0 },
          { title: 'Le calcul intégral', number: 12, progress: 0 },
        ],
      },
      {
        title: 'Dénombrement et probabilités',
        chapters: [
          { title: 'Combinatoire et dénombrement', number: 13, progress: 0 },
          { title: 'La loi binomiale', number: 14, progress: 0 },
          { title: 'Les variables aléatoires', number: 15, progress: 0 },
          { title: 'La loi des grands nombres', number: 16, progress: 0 },
        ],
      },
      {
        title: 'Algorithmique et programmation',
        chapters: [
          { title: 'Notion de liste', number: 17, progress: 0 },
        ],
      },
    ],
  },
  {
    key: 'physique-chimie',
    title: 'Physique-Chimie',
    level: 'Terminale',
    themes: [
      {
        title: 'Constitution et transformations de la matière',
        chapters: [
          { title: 'Les transformations acidobasiques en solution aqueuse', number: 1 },
          { title: 'Des méthodes physiques d’analyse d’un système chimique', number: 2 },
          { title: 'Des méthodes chimiques d’analyse d’un système chimique', number: 3 },
          { title: 'La modélisation temporelle d’un système chimique', number: 4 },
          { title: 'La modélisation temporelle d’un système nucléaire', number: 5 },
          { title: 'L’évolution spontanée d’un système chimique', number: 6 },
          { title: 'La force des acides et des bases en solution aqueuse', number: 7 },
          { title: 'L’évolution forcée d’un système chimique', number: 8 },
          { title: 'La structure et les propriétés des molécules en synthèse organique', number: 9 },
        ],
      },
      {
        title: 'Mouvement et interactions',
        chapters: [
          { title: 'La description du mouvement et la deuxième loi de Newton', number: 10 },
          { title: 'Les mouvements dans un champ uniforme', number: 11 },
          { title: 'Le mouvement d’un corps céleste dans un champ de gravitation', number: 12 },
          { title: 'La modélisation de l’écoulement d’un fluide', number: 13 },
          { title: 'La description d’un système thermodynamique : le modèle du gaz parfait', number: 14 },
          { title: 'Les transferts thermiques et bilans d’énergie d’un système thermodynamique', number: 15 },
        ],
      },
      {
        title: 'Ondes et signaux',
        chapters: [
          { title: 'L’intensité sonore et l’effet Doppler', number: 16 },
          { title: 'Les phénomènes de diffraction et d’interférence', number: 17 },
          { title: 'Le modèle optique d’une lunette afocale', number: 18 },
          { title: 'La description de la lumière par un flux de photons', number: 19 },
          { title: 'La dynamique d’un système électrique capacitif', number: 20 },
        ],
      },
    ],
  },
  {
    key: 'enseignement-scientifique',
    title: 'Enseignement scientifique',
    level: 'Terminale',
    themes: [
      {
        title: 'Science, climat et société',
        chapters: [
          { title: "L'atmosphère terrestre et la vie", number: 1 },
          { title: "La complexité du système climatique", number: 2 },
          { title: "Le climat du futur", number: 3 },
          { title: "Énergie, choix de développement et futur climatique", number: 4 },
        ],
      },
      {
        title: 'Le futur des énergies',
        chapters: [
          { title: "Deux siècles d'énergie électrique", number: 5 },
          { title: "Les atouts de l'électricité", number: 6 },
          { title: "Optimisation du transport de l'énergie", number: 7 },
          { title: "Choix énergétiques et impacts sur les sociétés", number: 8 },
        ],
      },
      {
        title: 'Une histoire du vivant',
        chapters: [
          { title: "La biodiversité et son évolution", number: 9 },
          { title: "L'évolution comme grille de lecture du monde", number: 10 },
          { title: "L'évolution humaine", number: 11 },
          { title: "Les modèles démographiques", number: 12 },
          { title: "L'intelligence artificielle", number: 13 },
        ],
      },
    ],
  },
];

const ChapterCard = ({ title, number, progress = 0, isLast = false }: { title: string; number: number; progress?: number; isLast?: boolean }) => (
  <div className="relative bg-blue-50 border border-blue-100 rounded-3xl shadow-md flex flex-col justify-between min-h-[140px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:ring-2 hover:ring-blue-100 cursor-pointer group">
    {/* Motif SVG abstrait (cercles/lignes) */}
    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" fill="none">
      <circle cx="30" cy="30" r="18" stroke="#60A5FA" strokeWidth="2" />
      <circle cx="70" cy="70" r="10" stroke="#3B82F6" strokeWidth="1.5" />
      <line x1="10" y1="90" x2="90" y2="10" stroke="#60A5FA" strokeWidth="1" />
      <line x1="80" y1="20" x2="20" y2="80" stroke="#3B82F6" strokeWidth="1" />
    </svg>
    <div className="relative z-10 font-semibold text-gray-900 mb-2 p-4 pb-0 text-base leading-snug">
      {title}
      {isLast && (
        <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-blue-200 text-blue-800 font-bold animate-pulse">À venir</span>
      )}
    </div>
    <div className="relative z-10 mt-auto p-4 pt-0">
      <div className="text-xs text-gray-500 font-medium mb-2 tracking-wide">CHAPITRE {number}</div>
      <div className="w-full bg-gradient-to-r from-blue-100 to-blue-200 rounded-full h-1.5 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-1.5 rounded-full animate-pulse" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  </div>
);

const SubjectDetailPage = () => {
  const { subjectName } = useParams();
  const { open } = useContext(SidebarContext);
  const navigate = useNavigate();
  // Normalisation du nom pour la recherche (minuscules, tirets)
  const normalized = (str: string | undefined) => (str || '').toLowerCase().replace(/ /g, '-').replace(/é/g, 'e').replace(/è/g, 'e').replace(/ê/g, 'e').replace(/à/g, 'a').replace(/ç/g, 'c');
  const subject = subjectsData.find(s => normalized(s.key) === normalized(subjectName));

  if (!subject) {
    return (
      <div className={`transition-all duration-300 ${open ? 'ml-64' : 'ml-20'} max-w-6xl p-8`}>
        <div className="text-2xl font-bold text-red-500 mb-4">Matière introuvable</div>
        <button onClick={() => navigate('/browse')} className="text-blue-600 underline">Retour à Parcourir</button>
      </div>
    );
  }

  return (
    <div className={`transition-all duration-300 ${open ? 'ml-64' : 'ml-20'} max-w-6xl p-8`}>
      {/* Fil d'Ariane premium */}
      <div className="flex items-center gap-2 text-base font-semibold mb-4">
        <button
          onClick={() => navigate('/browse')}
          className="text-blue-400 hover:text-blue-600 transition-colors focus:outline-none focus:underline"
        >
          {subject.level}
        </button>
        <span className="text-blue-200 text-xl">/</span>
        <span className="text-blue-400 cursor-default select-none">{subject.title}</span>
      </div>
      {/* Titre principal */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">{subject.title}</h1>
      {/* Thèmes et chapitres */}
      {subject.themes.map((theme, idx) => (
        <div key={theme.title} className="mb-12">
          <div className="text-blue-300 text-base font-bold mb-1 tracking-widest uppercase">Thème {idx + 1}</div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">{theme.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {theme.chapters.map((chapter, i) => (
              <ChapterCard key={chapter.title} {...chapter} isLast={i === theme.chapters.length - 1} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubjectDetailPage; 