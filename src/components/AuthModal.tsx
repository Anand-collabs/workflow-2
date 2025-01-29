import React from 'react';
import { Lock } from 'lucide-react';

function AuthModal({ isSignInOpen, setIsSignInOpen, handleSignIn, signInEmail, setSignInEmail, signInPassword, setSignInPassword }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Sign In</h2>
          <button
            onClick={() => setIsSignInOpen(false)}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Email
            </label>
            <input
              type="email"
              value={signInEmail}
              onChange={(e) => setSignInEmail(e.target.value)}
              className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Password
            </label>
            <input
              type="password"
              value={signInPassword}
              onChange={(e) => setSignInPassword(e.target.value)}
              className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-white text-black rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
          >
            <Lock size={16} />
            Sign In
          </button>
          <p className="text-center text-sm text-zinc-400">
            Don't have an account?{' '}
            <button className="text-blue-500 hover:text-blue-400 transition-colors">
              Sign up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default AuthModal;