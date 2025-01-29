import { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, Mail, Newspaper, Copy, Check, Link, X, RefreshCw, Loader2 } from 'lucide-react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

function EmailGenerator() {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [isServerBusy, setIsServerBusy] = useState(false);
  const [loadingPhase, setLoadingPhase] = useState(0);
  const emailRef = useRef(null);

  const loadingPhrases = [
    "Analyzing job posting details...",
    "Extracting key requirements...",
    "Understanding company culture...",
    "Crafting personalized introduction...",
    "Highlighting relevant experience...",
    "Polishing professional tone...",
    "Adding engaging elements...",
    "Reviewing for authenticity...",
    "Finalizing your perfect email...",
    "Almost ready to impress..."
  ];

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setLoadingPhase((prev) => (prev + 1) % loadingPhrases.length);
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [loading]);

  useEffect(() => {
    if (email && emailRef.current) {
      emailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [email]);
  
  const generateEmail = async () => {
    if (!url.trim()) {
      setShowUrlInput(true);
      return;
    }

    setLoading(true);
    setEmail('');
    setShowUrlInput(false);
    setLoadingPhase(0);

    const busyTimeout = setTimeout(() => {
      setIsServerBusy(true);
    }, 45000);

    try {
      const response = await axios.post(
        'https://backend-woun.onrender.com/generate-email',
        { url },
        { headers: { 'Content-Type': 'application/json' } }
      );
      setEmail(response.data.email);
      clearTimeout(busyTimeout);
      setIsServerBusy(false);
    } catch (error) {
      console.error('Error generating email:', error);
      if (axios.isAxiosError(error)) {
        alert(`Error generating email: ${error.response?.data?.detail || error.message}`);
      } else {
        alert('Error generating email. Please check the URL and try again.');
      }
    } finally {
      setLoading(false);
      clearTimeout(busyTimeout);
      setIsServerBusy(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  const handleRefresh = () => {
    setUrl('');
    setEmail('');
    setCopied(false);
    setShowUrlInput(false);
  };

  const closeServerBusyModal = () => {
    setIsServerBusy(false);
  };

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {!email && (
  <div className="text-center mb-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center mb-6"
    >
      <div className="p-3 bg-white rounded-2xl shadow-lg">
        <Mail size={40} className="text-black" />
      </div>
    </motion.div>
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
    >
      AI Email Generator
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="text-xl text-gray-300 max-w-3xl mx-auto"
    >
      Transform job opportunities into compelling email responses with our advanced AI technology
    </motion.p>
  </div>
)}


        <div className="max-w-4xl mx-auto">
          <AnimatePresence>
            {showUrlInput && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-8"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl blur-lg" />
                  <div className="relative">
                    <input
                      type="text"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="Paste your job posting URL here..."
                      className="w-full pl-12 pr-12 py-4 bg-white rounded-xl text-black placeholder-gray-400 outline-none transition-all text-lg"
                    />
                    <button onClick={() => setShowUrlInput(false)} className="absolute inset-y-0 right-4 flex items-center">
                      <X size={20} className="text-gray-400 hover:text-gray-200 transition-colors" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col items-center gap-4 mb-8">
            <motion.button
              onClick={generateEmail}
              disabled={loading}
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0 }}
              className="px-8 py-4 bg-white text-black font-medium rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="animate-spin" size={20} />
                  <motion.span key={loadingPhase}>{loadingPhrases[loadingPhase]}</motion.span>
                </div>
              ) : (
                <>
                  Generate Email <Sparkles size={20} />
                </>
              )}
            </motion.button>
          </div>
          {email && (
  <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} ref={emailRef}>
    <div className="bg-white rounded-2xl p-6 text-base text-black  border border-gray-700/50">
      <div className="flex items-start gap-6">
        <Mail size={24} className="text-white" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-xl py-4">Your Generated Email</span>
            <motion.button onClick={handleCopy} className="px-6 py-2 bg-gray-800/50 rounded-lg">
              {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-white" />}
            </motion.button>
          </div>
          <TypeAnimation sequence={[email]} wrapper="div" speed={90} style={{ whiteSpace: 'pre-wrap' }} />
        </div>
      </div>
    </div>
    {/* Add the refresh button here */}
    <div className="mt-6 flex justify-center">
      <motion.button
        onClick={handleRefresh}
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0 }}
        className="p-4 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-all focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg"
      >
        <RefreshCw size={20} />
      </motion.button>
    </div>
  </motion.div>
)}

        </div>
      </div>
    </div>
  );
}

export default EmailGenerator;
