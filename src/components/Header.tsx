import React from 'react';
import { Mail, User } from 'lucide-react';

function Header({ activeTab, setActiveTab, setIsSignInOpen }) {
  return (
    <header className="  sticky top-0 z-50 pt-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
           
            <span className="font-bold text-xl">CEG</span>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setActiveTab('email')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'email'
                  ? 'bg-white text-black'
                  : 'text-zinc-300 hover:bg-zinc-800'
              }`}
            >
              Email Generator
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'about'
                  ? 'bg-white text-black'
                  : 'text-zinc-300 hover:bg-zinc-800'
              }`}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'pricing'
                  ? 'bg-white text-black'
                  : 'text-zinc-300 hover:bg-zinc-800'
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => setActiveTab('docs')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'docs'
                  ? 'bg-white text-black'
                  : 'text-zinc-300 hover:bg-zinc-800'
              }`}
            >
              Docs
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'settings'
                  ? 'bg-white text-black'
                  : 'text-zinc-300 hover:bg-zinc-800'
              }`}
            >
              Settings
            </button>
            <button
              onClick={() => setIsSignInOpen(true)}
              className="ml-4 px-4 py-2 bg-white text-black rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
            >
              <User size={16} />
              Sign In
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;