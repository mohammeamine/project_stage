import React from 'react';

const StudentIllustration = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 180 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ maxWidth: 220, width: '100%', height: 'auto', display: 'block' }}
  >
    {/* Corps */}
    <rect x="50" y="90" width="80" height="80" rx="28" fill="#6366F1" />
    {/* Tête */}
    <circle cx="90" cy="60" r="28" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="2" />
    {/* Cheveux */}
    <ellipse cx="90" cy="50" rx="18" ry="12" fill="#374151" />
    {/* Sac à dos */}
    <rect x="120" y="110" width="32" height="50" rx="16" fill="#FBBF24" />
    {/* Bras gauche */}
    <rect x="30" y="110" width="22" height="60" rx="11" fill="#A5B4FC" />
    {/* Bras droit */}
    <rect x="128" y="120" width="18" height="60" rx="9" fill="#A5B4FC" />
    {/* Main gauche */}
    <circle cx="41" cy="170" r="11" fill="#F3F4F6" />
    {/* Main droite */}
    <circle cx="137" cy="180" r="9" fill="#F3F4F6" />
    {/* Téléphone */}
    <rect x="130" y="170" width="14" height="22" rx="4" fill="#F87171" />
    {/* Jambes */}
    <rect x="60" y="170" width="18" height="70" rx="8" fill="#6B7280" />
    <rect x="102" y="170" width="18" height="70" rx="8" fill="#6B7280" />
    {/* Chaussures */}
    <ellipse cx="69" cy="245" rx="12" ry="7" fill="#111827" />
    <ellipse cx="111" cy="245" rx="12" ry="7" fill="#111827" />
    {/* Bulle emoji */}
    <ellipse cx="40" cy="40" rx="18" ry="14" fill="#FDE68A" />
    <circle cx="34" cy="38" r="2.5" fill="#111827" />
    <circle cx="46" cy="38" r="2.5" fill="#111827" />
    <path d="M34 44c2 2 8 2 10 0" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
    <ellipse cx="46" cy="32" rx="3" ry="2" fill="#111827" />
  </svg>
);

export default StudentIllustration; 