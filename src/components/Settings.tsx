/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Settings, Copy, CheckCircle } from 'lucide-react';

function Setting() {
  const [apiKey, setApiKey] = useState(''); // Simulated API key
  const [copied, setCopied] = useState(false);

  const copyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 p-6">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <Settings className="text-blue-500" size={24} />
        API Settings
      </h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2" >
            Your API Key
          </label>
          <div className="flex items-center gap-2">
            <input
              placeholder="Login to Generate"
              type="text"
              value={apiKey}
              readOnly
              className="flex-1 px-4 py-3 bg-black border border-zinc-800 rounded-lg text-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={copyApiKey}
              className="px-4 py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2"
            >
              {copied ? (
                <>
                  <CheckCircle size={16} />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={16} />
                  Copy
                </>
              )}
            </button>
          </div>
          <p className="mt-2 text-sm text-zinc-400">
            Keep this key secure. Do not share it publicly.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4">Rate Limits</h3>
          <div className="bg-black rounded-lg p-4 border border-zinc-800">
            <div className="flex justify-between items-center mb-2">
              <span className="text-zinc-300">Requests per minute</span>
              <span className="text-blue-500 font-medium">60</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-300">Emails per day</span>
              <span className="text-blue-500 font-medium">1000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;