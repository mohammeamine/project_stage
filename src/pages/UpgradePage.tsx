import { useContext } from 'react';
import { SidebarContext } from '../components/DashboardSidebar';
import PricingSection from '../components/PricingSection';
import { Star } from 'lucide-react';

const UpgradePage = () => {
  const { open } = useContext(SidebarContext);
  return (
    <div className={`p-8 transition-all duration-300 ${open ? 'ml-64' : 'ml-20'}`}>
      {/* Header premium */}
      <header className="flex items-center gap-4 px-0 pt-4 md:pt-10 pb-6">
        <span className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full">
          <Star size={28} className="text-yellow-500" />
        </span>
        <h1 className="text-3xl font-extrabold text-gray-900">Passer Premium</h1>
      </header>
      <PricingSection />
    </div>
  );
};

export default UpgradePage; 