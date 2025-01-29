import { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import EmailGenerator from './components/EmailGenerator';
import AuthModal from './components/AuthModal';
import Setting from './components/Settings';
import Docs from './components/Docs ';

function App() {
  const [activeTab, setActiveTab] = useState('email');
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in:', signInEmail, signInPassword);
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Gradient background */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

      {/* Large CEG text background */}
      <div className="opacity-50 fixed inset-0 flex items-center justify-center overflow-hidden select-none pointer-events-none">
        <h1 className="text-[40vw] font-black text-white leading-none tracking-tighter transform -rotate-12 scale-150">
          CEG
        </h1>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="fixed inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>

      {/* Animated grain effect */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 grain-effect"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} setIsSignInOpen={setIsSignInOpen} />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {activeTab === 'email' && <EmailGenerator />}
          {activeTab === 'about' && <About />}
          {activeTab === 'docs' && <Docs />}
          {activeTab === 'settings' && <Setting />}
        </main>
        {isSignInOpen && (
          <AuthModal
            isSignInOpen={isSignInOpen}
            setIsSignInOpen={setIsSignInOpen}
            handleSignIn={handleSignIn}
            signInEmail={signInEmail}
            setSignInEmail={setSignInEmail}
            signInPassword={signInPassword}
            setSignInPassword={setSignInPassword}
          />
        )}
      </div>
    </div>
  );
}

export default App;