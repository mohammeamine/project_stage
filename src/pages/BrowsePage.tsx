import { useState, useContext } from "react";
import { ChevronDown, Star as StarIcon, BookOpen } from "lucide-react";
import SubjectCard from "../components/SubjectCard";
import { SidebarContext } from '../components/DashboardSidebar';
import { useNavigate } from 'react-router-dom';

const frenchSchoolLevels = [
  "Terminale",
  "Première",
  "Seconde",
  "Troisième",
  "Quatrième",
  "Cinquième",
  "Sixième",
  "CM2",
  "CM1",
  "CE2",
  "CE1",
  "CP"
];

const subjectsData = [
  {
    title: "Mathématiques",
    description: "Algèbre, géométrie, analyse",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
    progress: 75,
    badge: "Populaire"
  },
  {
    title: "Physique-Chimie",
    description: "Mécanique, thermodynamique, réactions",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    progress: 60,
    badge: "Nouveau"
  },
  {
    title: "Enseignement scientifique",
    description: "Science, climat, énergie, vivant",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    progress: 60,
    badge: "Nouveau"
  },
  {
    title: "Histoire",
    description: "Histoire mondiale, civilisations, événements clés",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80",
    progress: 80
  },
  {
    title: "Géographie",
    description: "Géographie physique, humaine et environnementale",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
    progress: 70
  },
  {
    title: "Français",
    description: "Littérature, grammaire, expression",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    progress: 90
  },
  {
    title: "Anglais",
    description: "Grammaire, vocabulaire, conversation",
    image: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    progress: 85,
    badge: "Populaire"
  },
  {
    title: "Allemand",
    description: "Langue, culture, communication",
    image: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
    progress: 50
  },
  {
    title: "Espagnol",
    description: "Langue, culture, communication",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
    progress: 50
  },
  {
    title: "Philosophie",
    description: "Grands courants, auteurs, réflexion critique",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    progress: 65
  },
  {
    title: "Science Économique et Sociale",
    description: "Économie, sociologie, enjeux contemporains",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    progress: 55
  }
];

const BrowsePage = () => {
  const [selectedLevel, setSelectedLevel] = useState(frenchSchoolLevels[0]);
  const [isLevelDropdownOpen, setIsLevelDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);
  const { open } = useContext(SidebarContext);
  const navigate = useNavigate();

  // Filtrage par recherche
  const filteredSubjects = subjectsData.filter(subject =>
    subject.title.toLowerCase().includes(search.toLowerCase())
  );

  // Favoris
  const favoriteSubjects = filteredSubjects.filter(s => favorites.includes(s.title));
  const otherSubjects = filteredSubjects.filter(s => !favorites.includes(s.title));

  // Gestion favoris
  const toggleFavorite = (title: string) => {
    setFavorites(favs => favs.includes(title) ? favs.filter(f => f !== title) : [...favs, title]);
  };

  return (
    <div className={`pt-4 px-8 transition-all duration-300 ${open ? 'ml-64' : 'ml-20'}`}>
      {/* Header premium */}
      <header className="flex items-center gap-4 px-6 pt-2 md:pt-4 pb-4">
        <span className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
          <BookOpen size={28} className="text-blue-600" />
        </span>
        <h1 className="text-3xl font-extrabold text-gray-900">Parcourir les matières</h1>
      </header>
      <div className="max-w-7xl mx-auto">
        {/* En-tête avec sélecteur de niveau et recherche */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative inline-block">
            <button 
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-blue-500 transition-colors"
              onClick={() => setIsLevelDropdownOpen(!isLevelDropdownOpen)}
            >
              <span className="text-lg font-medium">{selectedLevel}</span>
              <ChevronDown size={20} />
            </button>
            {isLevelDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 w-48">
                {frenchSchoolLevels.map((level) => (
                  <button
                    key={level}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-50 ${
                      selectedLevel === level ? 'bg-blue-50 text-blue-600' : ''
                    }`}
                    onClick={() => {
                      setSelectedLevel(level);
                      setIsLevelDropdownOpen(false);
                    }}
                  >
                    {level}
                  </button>
                ))}
              </div>
            )}
          </div>
          <input
            type="text"
            placeholder="Rechercher une matière..."
            className="w-full md:w-80 px-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Rechercher une matière"
          />
        </div>

        {/* Section Favoris */}
        {favoriteSubjects.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-blue-700 mb-4">Vos favoris</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteSubjects.map((subject, index) => (
                <div key={subject.title} className="relative group animate-fade-in flex flex-col items-stretch" onClick={() => navigate(`/subject/${encodeURIComponent(subject.title)}`)} style={{cursor:'pointer'}}>
                  {/* Badge favoris */}
                  <button
                    className="absolute top-3 right-3 z-10 bg-white rounded-full p-1 shadow hover:bg-blue-50"
                    aria-label="Retirer des favoris"
                    onClick={e => {e.stopPropagation(); toggleFavorite(subject.title);}}
                  >
                    <StarIcon size={22} className="text-yellow-400 fill-yellow-300" />
                  </button>
                  <SubjectCard {...subject} />
                  {/* Bouton Découvrir SOUS la carte */}
                  <button
                    className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all duration-300 opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 sm:opacity-100"
                    style={{display: 'block'}}
                  >
                    Découvrir
                  </button>
                  {/* Badge */}
                  {subject.badge && (
                    <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">{subject.badge}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Grille des matières */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherSubjects.map((subject, index) => (
            <div key={subject.title} className="relative group animate-fade-in flex flex-col items-stretch" onClick={() => navigate(`/subject/${encodeURIComponent(subject.title)}`)} style={{cursor:'pointer'}}>
              {/* Badge favoris */}
              <button
                className={`absolute top-3 right-3 z-10 bg-white rounded-full p-1 shadow ${favorites.includes(subject.title) ? "" : "hover:bg-blue-50"}`}
                aria-label={favorites.includes(subject.title) ? "Retirer des favoris" : "Ajouter aux favoris"}
                onClick={e => {e.stopPropagation(); toggleFavorite(subject.title);}}
              >
                <StarIcon size={22} className={favorites.includes(subject.title) ? "text-yellow-400 fill-yellow-300" : "text-gray-300"} />
              </button>
              <SubjectCard {...subject} />
              {/* Bouton Découvrir SOUS la carte */}
              <button
                className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all duration-300 opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 sm:opacity-100"
                style={{display: 'block'}}
              >
                Découvrir
              </button>
              {/* Badge */}
              {subject.badge && (
                <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">{subject.badge}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowsePage; 