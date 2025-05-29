import { useState, useRef, useEffect, createContext, useContext } from "react";
import { BookOpen, LayoutDashboard, User, LogOut, Menu, X, Star, HelpCircle, Settings } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  {
    title: "Parcourir",
    icon: BookOpen,
    path: "/browse"
  },
  {
    title: "Tableau de bord",
    icon: LayoutDashboard,
    path: "/dashboard"
  },
  {
    title: "Paramètres",
    icon: Settings,
    path: "/settings"
  },
  {
    title: "Support",
    icon: HelpCircle,
    path: "/support"
  }
];

export const SidebarContext = createContext({ open: true, setOpen: (v: boolean) => {} });

const DashboardSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { open, setOpen } = useContext(SidebarContext);
  const [showProfile, setShowProfile] = useState(false);
  const [hasNotif, setHasNotif] = useState(true); // Simule une notif non lue
  const profileRef = useRef(null);

  // Fermer le popover profil si clic en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !(profileRef.current as any).contains(event.target)) {
        setShowProfile(false);
      }
    }
    if (showProfile) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showProfile]);

  // Overlay mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {/* Bouton hamburger, toujours à gauche du contenu principal */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md md:hidden"
        aria-label={open ? "Fermer la navigation" : "Ouvrir la navigation"}
        onClick={() => setOpen(!open)}
        style={{ maxWidth: 48, maxHeight: 48 }}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay mobile */}
      {isMobile && open && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={() => setOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen z-50 bg-white border-r border-gray-200 shadow-lg flex flex-col justify-between transition-all duration-300
        ${open ? "w-64" : "w-20"} ${!open && isMobile ? "-translate-x-full" : "translate-x-0"}`}
        style={{ minWidth: open ? 256 : 80 }}
      >
        {/* Haut : logo, navigation */}
        <div className={`flex flex-col flex-1 ${open ? "items-start" : "items-center"} transition-all duration-300`}> 
          {/* Logo */}
          <div className={`p-6 w-full flex ${open ? "justify-between items-center" : "justify-center items-center"}`}>
            {open && <h1 className={`text-2xl font-extrabold text-blue-600 tracking-tight`}>IAAI</h1>}
            <button className="hidden md:block p-2 rounded-lg hover:bg-gray-100" onClick={() => setOpen(!open)}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          {/* Navigation */}
          <nav className={`flex-1 flex flex-col gap-2 ${open ? "items-start px-2" : "items-center px-0"} mt-2`}> 
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group flex items-center ${open ? "w-full px-4" : "justify-center w-12"} py-3 rounded-lg transition-all duration-200 gap-3
                    ${isActive ? "bg-blue-50 border-r-4 border-blue-600 text-blue-600 font-semibold" : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"}
                  `}
                  style={isActive && open ? { boxShadow: '0 2px 8px 0 rgba(59,130,246,0.07)' } : {}}
                >
                  <item.icon size={24} className={isActive ? "text-blue-600" : "text-gray-500 group-hover:text-blue-600"} />
                  {open && <span className={`transition-colors duration-200 ${isActive ? "text-blue-600 font-semibold" : ""}`}>{item.title}</span>}
                </Link>
              );
            })}
          </nav>
        </div>
        {/* Bas : profil */}
        <div className={`flex flex-col gap-4 pb-8 border-t border-gray-100 ${open ? "items-start px-6 pt-6" : "items-center px-2 pt-4"}`}>
          {/* Profil + badge notif */}
          <div className="relative w-full flex justify-center" ref={profileRef}>
            <button
              className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors w-full ${open ? "justify-start" : "justify-center"}`}
              onClick={() => setShowProfile((v) => !v)}
            >
              <div className="relative">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar utilisateur" className="w-10 h-10 rounded-full border-2 border-blue-500 object-cover" />
                {hasNotif && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse" />
                )}
              </div>
              {open && (
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-gray-800">ethan</span>
                  <span className="text-xs text-gray-500">Terminale</span>
                </div>
              )}
            </button>
            {/* Popover profil */}
            {showProfile && (
              <div className={`absolute bottom-16 left-0 ${open ? "w-56" : "w-48 left-1/2 -translate-x-1/2"} bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-50 animate-fade-in`}> 
                <Link to="/profile" className="flex items-center gap-2 p-2 rounded hover:bg-gray-50">
                  <User size={18} /> Profil
                </Link>
                <Link to="/" className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 w-full text-left mt-1 text-red-600">
                  <LogOut size={18} /> Déconnexion
                </Link>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar; 