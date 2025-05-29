import { useState, useContext } from 'react';
import { Mail, MessageCircle, HelpCircle, Phone, ExternalLink, Send, X, FileText, Video, Users } from 'lucide-react';
import { SidebarContext } from '../components/DashboardSidebar';

const faqs = [
  {
    question: "Comment contacter le support ?",
    answer: "Vous pouvez nous écrire à support@soutienai.com ou utiliser le formulaire de contact ci-dessous."
  },
  {
    question: "Comment signaler un bug ou un problème ?",
    answer: "Utilisez le bouton 'Signaler un problème' ou envoyez-nous un email avec une description détaillée."
  },
  {
    question: "Où trouver les guides d'utilisation ?",
    answer: "Consultez la section 'Ressources' ou la FAQ pour des tutoriels et vidéos explicatives."
  }
];

const resources = [
  { label: "Guide de démarrage", url: "https://docs.soutienai.com/start", icon: ExternalLink },
  { label: "Vidéos tutorielles", url: "https://youtube.com/@soutienai", icon: ExternalLink },
  { label: "Forum d'entraide", url: "https://forum.soutienai.com", icon: ExternalLink },
];

const SupportPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', content: 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?' }
  ]);
  const { open } = useContext(SidebarContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    setChatMessages(prev => [...prev, { type: 'user', content: message }]);
    setMessage('');
    
    // Simuler une réponse du bot
    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        type: 'bot', 
        content: 'Je vais vous aider avec votre question. Un de nos agents vous répondra dans les plus brefs délais.' 
      }]);
    }, 1000);
  };

  return (
    <div className={`pt-4 px-8 transition-all duration-300 ${open ? 'ml-64' : 'ml-20'}`}>
      {/* Header premium */}
      <header className="flex items-center gap-4 px-6 pt-2 md:pt-4 pb-4">
        <span className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
          <HelpCircle size={28} className="text-blue-600" />
        </span>
        <h1 className="text-3xl font-extrabold text-gray-900">Support & Aide</h1>
      </header>

      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sticky top-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Ressources</h2>
            <nav className="space-y-2">
              <a href="#faq" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition">
                <HelpCircle size={20} className="text-blue-600" />
                <span>FAQ</span>
              </a>
              <a href="#contact" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition">
                <Mail size={20} className="text-blue-600" />
                <span>Contact</span>
              </a>
              <a href="#chat" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition">
                <MessageCircle size={20} className="text-blue-600" />
                <span>Chat en direct</span>
              </a>
              <div className="pt-4 mt-4 border-t">
                <h3 className="text-sm font-medium text-gray-500 mb-2 px-3">Ressources utiles</h3>
                <a href="https://docs.soutienai.com/start" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition">
                  <FileText size={20} className="text-blue-600" />
                  <span>Guide de démarrage</span>
                </a>
                <a href="https://youtube.com/@soutienai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition">
                  <Video size={20} className="text-blue-600" />
                  <span>Vidéos tutorielles</span>
                </a>
                <a href="https://forum.soutienai.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition">
                  <Users size={20} className="text-blue-600" />
                  <span>Forum d'entraide</span>
                </a>
              </div>
            </nav>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="flex-1">
          <div className="flex flex-col gap-8">
            {/* FAQ Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Questions fréquentes</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-100 rounded-lg overflow-hidden">
                    <button
                      className="flex items-center justify-between w-full text-left p-4 bg-gray-50 hover:bg-gray-100 transition"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      <span className={`ml-2 transition-transform ${openFaq === i ? 'rotate-90' : ''}`}>▶</span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40' : 'max-h-0'}`}>
                      <div className="p-4 text-gray-600">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Contactez-nous</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Méthodes de contact */}
                <div className="space-y-4">
                  <a href="mailto:support@soutienai.com" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <Mail size={24} className="text-blue-600" />
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <div className="text-sm text-gray-500">support@soutienai.com</div>
                    </div>
                  </a>
                  <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <Phone size={24} className="text-green-600" />
                    <div>
                      <div className="font-medium text-gray-900">WhatsApp</div>
                      <div className="text-sm text-gray-500">+212 600-000000</div>
                    </div>
                  </a>
                  <a href="https://t.me/soutienai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <MessageCircle size={24} className="text-blue-400" />
                    <div>
                      <div className="font-medium text-gray-900">Telegram</div>
                      <div className="text-sm text-gray-500">@soutienai</div>
                    </div>
                  </a>
                </div>

                {/* Formulaire de contact */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Votre email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition" 
                      placeholder="Votre adresse email" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Votre message</label>
                    <textarea 
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition" 
                      rows={4} 
                      placeholder="Décrivez votre question ou problème..." 
                      required 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    <Mail size={18} /> Envoyer
                  </button>
                  {sent && (
                    <div className="text-green-600 font-medium text-center">
                      Votre message a bien été envoyé !
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {!showChat ? (
          <button
            onClick={() => setShowChat(true)}
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            <MessageCircle size={24} />
          </button>
        ) : (
          <div className="bg-white rounded-xl shadow-xl w-96 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b flex justify-between items-center bg-gray-50">
              <h3 className="font-semibold text-gray-900">Chat avec le support</h3>
              <button onClick={() => setShowChat(false)} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>
            {/* Messages */}
            <div className="p-4 flex-1 max-h-96 overflow-y-auto space-y-4">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
            {/* Input */}
            <form onSubmit={handleChatSubmit} className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Écrivez votre message..."
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupportPage;