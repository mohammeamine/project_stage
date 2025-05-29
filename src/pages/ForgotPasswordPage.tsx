import { useState } from "react";
import { KeyRound, Send } from "lucide-react";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        {/* Icône */}
        <div className="bg-blue-100 rounded-2xl p-4 mb-6 flex items-center justify-center">
          <KeyRound className="w-10 h-10 text-blue-500" />
        </div>
        {/* Titre */}
        <h1 className="text-3xl font-extrabold text-blue-600 mb-2 text-center">Mot de passe oublié&nbsp;?</h1>
        <p className="text-gray-500 text-center mb-8">
          Pas d'inquiétude&nbsp;! Entrez votre email et nous vous enverrons un lien de réinitialisation.
        </p>
        {/* Carte formulaire */}
        <form className="bg-white rounded-2xl shadow-xl p-8 w-full flex flex-col gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Adresse email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="votre@email.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow transition text-lg"
          >
            <Send className="w-5 h-5" /> Envoyer le lien de réinitialisation
          </button>
        </form>
        <div className="mt-6 text-center text-gray-500">
          Vous vous souvenez de votre mot de passe&nbsp;?
          <Link to="/login" className="text-blue-600 font-semibold hover:underline ml-1">
            Se connecter
          </Link>
        </div>
      </div>
    </div>
  );
} 