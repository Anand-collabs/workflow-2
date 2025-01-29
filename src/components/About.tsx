import React from 'react';
import { Globe, Zap, Shield, Users, Sparkle } from 'lucide-react';

function About() {
  return (
    <div className="space-y-16 mt-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Cold Email Generator <span className='absolute pl-2'><Sparkle></Sparkle></span></h1>
        <p className="text-zinc-400 text-lg">
          We're revolutionizing cold email outreach with AI-powered personalization and automation.
        </p>
      </div>

   

      <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 p-8">
        <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
        <p className="text-zinc-400 leading-relaxed">
          Cold Email Pro was founded with a simple mission: to make cold email outreach more effective and personalized. 
          We believe that every professional deserves the tools to make meaningful connections, and our AI-powered platform 
          makes that possible.
        </p>
      </div>
    </div>
  );
}

export default About;