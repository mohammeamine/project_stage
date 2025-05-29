import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const SignInPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function validateEmail(value: string) {
    // Validation simple d'email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    let valid = true;
    if (!email) {
      setEmailError('Veuillez entrer votre email.');
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Veuillez entrer un email valide.');
      valid = false;
    }
    if (!password) {
      alert('Veuillez entrer votre mot de passe.');
      valid = false;
    }
    if (!valid) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="w-full flex justify-start px-10 pt-6 pb-2"></div>
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-4 md:px-0">
        {/* Colonne gauche */}
        <div className="md:w-1/2 w-full flex flex-col justify-center items-start md:pl-24 md:pr-8 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
            Bienvenue sur SoutienAI
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-2xl">
            Votre assistant d'apprentissage intelligent qui s'adapte à votre rythme et vos besoins
          </p>
          <div className="mb-8">
            <span className="text-gray-700 text-base">
              Nouveau sur SoutienAI ?<br />
              Rejoignez notre communauté d'apprenants
            </span>
            <Link
              to="/register"
              className="block mt-2 text-blue-600 font-medium hover:text-blue-800 transition"
            >
              Créer un compte gratuit →
            </Link>
          </div>
        </div>
        {/* Colonne droite */}
        <div className="md:w-1/2 w-full flex justify-center items-center md:pl-8">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-blue-100 p-6">
            <h3 className="text-2xl font-bold text-blue-600 mb-6 text-center">Connexion</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Entrez votre email"
                  className={`w-full px-4 py-2.5 rounded-lg bg-blue-50 border ${emailError ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'border-blue-100 focus:border-blue-500 focus:ring-blue-200'} focus:ring-2 placeholder-gray-500 outline-none transition text-base focus:shadow-lg`}
                  required
                />
                {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
              </div>
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Mot de passe
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Entrez votre mot de passe"
                    className="w-full px-4 py-2.5 rounded-lg bg-blue-50 border border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 placeholder-gray-500 outline-none transition text-base pr-10 focus:shadow-lg"
                    required
                  />
                  <button 
                    type="button" 
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 hover:text-blue-600 transition-colors"
                    onClick={() => setShowPassword(v => !v)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              <div className="flex justify-end text-sm">
                <Link to="/forgot-password" className="text-blue-600 hover:text-blue-800 transition">
                  Mot de passe oublié ?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full py-2.5 rounded-lg font-bold text-white shadow-md hover:shadow-lg hover:ring-2 hover:ring-blue-500 hover:ring-opacity-50 transition-all text-base mt-2 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(90deg, #2563EB 0%, #1D4ED8 100%)',
                  boxShadow: '0 4px 16px 0 rgba(37,99,235,0.20)'
                }}
                disabled={loading}
              >
                {loading && (
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                )}
                Se connecter
              </button>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">ou continuer avec</span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
                  onClick={() => alert('Google cliqué !')}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
                  onClick={() => alert('Facebook cliqué !')}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#1877F2"
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
                  onClick={() => alert('Apple cliqué !')}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#000000"
                      d="M17.05 20.28c-.98.95-2.05.88-3.08.41-1.09-.47-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.41C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.78 1.18-.19 2.31-.89 3.51-.84 1.54.07 2.7.61 3.44 1.57-3.14 1.88-2.29 5.13.89 6.41-.65 1.29-1.51 2.58-2.92 3.05zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage; 