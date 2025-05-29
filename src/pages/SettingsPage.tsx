import { useState, useContext, useEffect } from 'react';
import { User, Bell, Lock, Settings, Palette, Key, Trash2, CheckCircle, Globe, Eye, Clock, BookOpen, Video, Volume2, Monitor, Smartphone, LogOut } from 'lucide-react';
import { SidebarContext } from '../components/DashboardSidebar';

const TABS = [
  { label: 'Profil', icon: User },
  { label: 'Apparence', icon: Palette },
  { label: 'Sécurité', icon: Lock },
  { label: 'Notifications', icon: Bell },
];

const SettingsPage = () => {
  const [tab, setTab] = useState('Profil');
  const [avatar, setAvatar] = useState('/avatar.png');
  const [avatarError, setAvatarError] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [accent, setAccent] = useState<'blue' | 'green' | 'purple'>('blue');
  const [font, setFont] = useState<'inter' | 'roboto' | 'opensans'>('inter');
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [readMode, setReadMode] = useState(false);
  const [rounded, setRounded] = useState<'rounded' | 'square'>('rounded');
  const [animations, setAnimations] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [showSessions, setShowSessions] = useState(false);

  const { open } = useContext(SidebarContext);

  // Simule la date d'inscription et le statut
  const inscription = '12/03/2023';
  const statut = 'Premium';

  // Simule les sessions actives
  const activeSessions = [
    { device: 'Chrome sur Windows', location: 'Paris, France', lastActive: 'Il y a 5 minutes' },
    { device: 'Safari sur iPhone', location: 'Paris, France', lastActive: 'Il y a 2 heures' },
  ];

  // Appliquer le thème et la couleur d'accent sur le body
  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
    document.body.classList.remove('accent-blue', 'accent-green', 'accent-purple');
    document.body.classList.add(`accent-${accent}`);
    document.body.classList.remove('font-inter', 'font-roboto', 'font-opensans');
    document.body.classList.add(`font-${font}`);
    document.body.classList.remove('text-sm', 'text-base', 'text-lg');
    document.body.classList.add(`text-${fontSize}`);
    document.body.classList.toggle('read-mode', readMode);
    document.body.classList.toggle('rounded-ui', rounded === 'rounded');
    document.body.classList.toggle('no-animations', !animations);
  }, [theme, accent, font, fontSize, readMode, rounded, animations]);

  const handleAvatarChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setAvatar(url);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className={`flex-1 flex flex-col transition-all duration-300 ${open ? 'ml-64' : 'ml-20'}`}>
        {/* Header */}
        <header className="flex items-center gap-4 px-6 pt-6 md:pt-10 pb-4">
          <span className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
            <Settings size={28} className="text-blue-600" />
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900">Paramètres</h1>
        </header>
        <main className="flex-1 flex flex-col w-full px-4 md:px-8 items-center">
          {/* Toast feedback */}
          {showToast && (
            <div className="fixed top-6 right-6 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-lg shadow flex items-center gap-2 animate-fade-in z-50">
              <span className="font-bold">✔</span> Modifications enregistrées !
            </div>
          )}
          {/* Carte principale fusionnée */}
          <div className="w-full bg-white rounded-2xl shadow-xl border-t-4 border-blue-500 p-0 animate-fade-in overflow-hidden">
            {/* Tabs horizontaux dans la carte, répartis également */}
            <nav className="grid grid-cols-4 w-full p-2 border-b border-gray-100 bg-white sticky top-0 z-10">
              {TABS.map(t => (
                <button
                  key={t.label}
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-semibold text-base transition-all w-full
                    ${tab === t.label ? 'bg-blue-50 text-blue-700 shadow border-b-2 border-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                  onClick={() => setTab(t.label)}
                  aria-current={tab === t.label ? 'page' : undefined}
                >
                  <t.icon size={20} /> {t.label}
                </button>
              ))}
            </nav>
            <div className="p-8 w-full">
              {/* Profil */}
              {tab === 'Profil' && (
                <form className="flex flex-col gap-8" onSubmit={handleSave}>
                  <div className="flex flex-col items-center gap-2 mb-4">
                    <label htmlFor="avatar-upload" className="cursor-pointer relative group">
                      {avatarError ? (
                        <div className="w-24 h-24 flex items-center justify-center rounded-full border-4 border-blue-200 bg-blue-50 shadow">
                          <User size={40} className="text-blue-400" aria-label="Avatar par défaut" />
                        </div>
                      ) : (
                        <img
                          src={avatar}
                          alt="Avatar utilisateur"
                          className="w-24 h-24 rounded-full border-4 border-blue-200 object-cover shadow"
                          onError={() => setAvatarError(true)}
                        />
                      )}
                      <span className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-1 shadow group-hover:bg-blue-700 transition">
                        <User size={16} />
                      </span>
                      <input id="avatar-upload" type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
                    </label>
                    <span className="text-xs text-gray-500">Changer l'avatar (JPG, PNG, GIF, max 2Mo)</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2"><User size={22}/> Informations personnelles</h2>
                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nom d'utilisateur</label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-200" defaultValue="utilisateur" />
                      <span className="text-xs text-gray-400">Il s'agit de votre nom d'affichage public.</span>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-200" defaultValue="Nom Prénom" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input type="email" className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-100" value="utilisateur@email.com" disabled />
                      <span className="text-xs text-gray-400">L'email ne peut pas être modifié directement.</span>
                    </div>
                  </div>
                  <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition self-end">Sauvegarder les modifications</button>
                </form>
              )}
              {/* Apparence */}
              {tab === 'Apparence' && (
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  {/* Colonne options */}
                  <div className="bg-white rounded-2xl shadow-xl border p-6 flex flex-col gap-8">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Couleurs & Thème</h3>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-gray-700">Thème :</span>
                        <button
                          className={`px-4 py-2 rounded-lg border font-semibold transition ${theme === 'light' ? 'bg-blue-50 border-blue-500 text-blue-700 ring-2 ring-blue-200' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-blue-50'}`}
                          onClick={() => setTheme('light')}
                        >
                          Clair
                        </button>
                        <button
                          className={`px-4 py-2 rounded-lg border font-semibold transition ${theme === 'dark' ? 'bg-blue-50 border-blue-500 text-blue-700 ring-2 ring-blue-200' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-blue-50'}`}
                          onClick={() => setTheme('dark')}
                        >
                          Sombre
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-700">Couleur d'accent :</span>
                        <div
                          className={`w-6 h-6 rounded-full border-2 cursor-pointer ${accent === 'blue' ? 'bg-blue-500 border-blue-700 ring-2 ring-blue-200' : 'bg-blue-500 border-blue-300'}`}
                          onClick={() => setAccent('blue')}
                          title="Bleu"
                        />
                        <div
                          className={`w-6 h-6 rounded-full border-2 cursor-pointer ${accent === 'green' ? 'bg-green-500 border-green-700 ring-2 ring-green-200' : 'bg-green-500 border-green-300'}`}
                          onClick={() => setAccent('green')}
                          title="Vert"
                        />
                        <div
                          className={`w-6 h-6 rounded-full border-2 cursor-pointer ${accent === 'purple' ? 'bg-purple-500 border-purple-700 ring-2 ring-purple-200' : 'bg-purple-500 border-purple-300'}`}
                          onClick={() => setAccent('purple')}
                          title="Violet"
                        />
                      </div>
                    </div>
                    <hr className="my-2" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Texte</h3>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-gray-700">Police :</span>
                        <button className={`px-3 py-1 rounded-lg border font-semibold transition ${font === 'inter' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-blue-50'}`} onClick={() => setFont('inter')}>Inter</button>
                        <button className={`px-3 py-1 rounded-lg border font-semibold transition ${font === 'roboto' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-blue-50'}`} onClick={() => setFont('roboto')}>Roboto</button>
                        <button className={`px-3 py-1 rounded-lg border font-semibold transition ${font === 'opensans' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-blue-50'}`} onClick={() => setFont('opensans')}>Open Sans</button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-700">Taille du texte :</span>
                        <button className={`px-3 py-1 rounded-lg border font-semibold transition ${fontSize === 'sm' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-blue-50'}`} onClick={() => setFontSize('sm')}>A-</button>
                        <button className={`px-3 py-1 rounded-lg border font-semibold transition ${fontSize === 'base' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-blue-50'}`} onClick={() => setFontSize('base')}>A</button>
                        <button className={`px-3 py-1 rounded-lg border font-semibold transition ${fontSize === 'lg' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-blue-50'}`} onClick={() => setFontSize('lg')}>A+</button>
                      </div>
                    </div>
                    <hr className="my-2" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Accessibilité & UI</h3>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-gray-700">Mode lecture :</span>
                        <button className={`px-4 py-2 rounded-lg border font-semibold transition ${readMode ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-blue-50'}`} onClick={() => setReadMode(v => !v)}>{readMode ? 'Désactiver' : 'Activer'}</button>
                      </div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-gray-700">Arrondis :</span>
                        <button className={`px-3 py-1 rounded-lg border font-semibold transition ${rounded === 'rounded' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-blue-50'}`} onClick={() => setRounded('rounded')}>Arrondi</button>
                        <button className={`px-3 py-1 rounded-lg border font-semibold transition ${rounded === 'square' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-blue-50'}`} onClick={() => setRounded('square')}>Carré</button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-700">Animations UI :</span>
                        <button className={`px-3 py-1 rounded-lg border font-semibold transition ${animations ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-blue-50'}`} onClick={() => setAnimations(true)}>Oui</button>
                        <button className={`px-3 py-1 rounded-lg border font-semibold transition ${!animations ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-blue-50'}`} onClick={() => setAnimations(false)}>Non</button>
                      </div>
                    </div>
                  </div>
                  {/* Colonne aperçu */}
                  <div className="bg-white rounded-2xl shadow-xl border p-8 flex flex-col items-center justify-center min-h-[400px]">
                    <div className="mb-2 text-lg font-bold">Aperçu en direct :</div>
                    <div className="p-6 bg-gray-50 border rounded-xl flex flex-col gap-2 shadow-sm w-full max-w-md">
                      <div className="font-semibold text-blue-600">Titre de carte</div>
                      <div className="text-gray-700">Ceci est un exemple de texte avec vos préférences d'apparence.</div>
                      <button className="px-4 py-2 mt-2 font-semibold text-white rounded-lg w-fit" style={{background: 'var(--tw-gradient-stops, #3B82F6)'}}>Bouton principal</button>
                    </div>
                  </div>
                </div>
              )}
              {/* Sécurité */}
              {tab === 'Sécurité' && (
                <div className="flex flex-col gap-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2"><Lock size={22}/> Sécurité du compte</h2>
                  <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg p-4 flex items-center gap-3">
                    <span className="font-bold">⚠</span>
                    <div>
                      <div className="font-semibold">Recommandation de sécurité</div>
                      <div className="text-sm">Pour une meilleure sécurité, nous vous recommandons d'activer l'authentification à deux facteurs.</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Lock size={20} className="text-blue-600" />
                      <div>
                        <h3 className="font-medium">Authentification à deux facteurs</h3>
                        <p className="text-sm text-gray-500">Sécurisez votre compte avec une double authentification</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" disabled />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                    <span className="text-xs text-gray-400 ml-2">Bientôt disponible</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Key size={20} className="text-blue-600" />
                      <div>
                        <h3 className="font-medium">Changement de mot de passe</h3>
                        <p className="text-sm text-gray-500">Mettez à jour votre mot de passe</p>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-semibold">Modifier</button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <User size={20} className="text-blue-600" />
                      <div>
                        <h3 className="font-medium">Sessions actives</h3>
                        <p className="text-sm text-gray-500">Gérez les appareils connectés</p>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-semibold">Voir</button>
                  </div>
                </div>
              )}
              {/* Notifications */}
              {tab === 'Notifications' && (
                <div className="flex flex-col gap-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2"><Bell size={22}/> Préférences de notifications</h2>
                  <p className="text-gray-500 mb-2">Personnalisez les notifications que vous souhaitez recevoir.</p>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Bell size={20} className="text-blue-600" />
                      <div>
                        <h3 className="font-medium">Nouveaux cours et concours</h3>
                        <p className="text-sm text-gray-500">Soyez informé dès qu'un nouveau concours est disponible</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <User size={20} className="text-blue-600" />
                      <div>
                        <h3 className="font-medium">Résultats et corrections</h3>
                        <p className="text-sm text-gray-500">Notifications lorsque vos résultats sont disponibles</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Bell size={20} className="text-blue-600" />
                      <div>
                        <h3 className="font-medium">Rappels et échéances</h3>
                        <p className="text-sm text-gray-500">Rappels pour les concours et tests à venir</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Settings size={20} className="text-blue-600" />
                      <div>
                        <h3 className="font-medium">Mise à jour du compte</h3>
                        <p className="text-sm text-gray-500">Informations importantes sur votre compte</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 text-blue-700 rounded-lg p-4 mt-2 text-sm">
                    Vous pouvez également gérer vos préférences d'emails en cliquant sur le lien "Gérer les abonnements" dans nos emails.
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage; 