import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Lock } from 'lucide-react';
import { slideInRight } from '../lib/animations';
import './SignIn.css';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual authentication
    console.log('Signing in with:', { email, password });
  };

  return (
    <div className="min-h-screen flex bg-brand-surface font-sans">
      {/* Left Panel - Image/Brand with dynamic pathing */}
      <div className="signin-brand-panel">
        <div className="absolute inset-0 bg-[#131118]/40 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/80 to-brand-dark/90 mix-blend-multiply"></div>
        
        <div className="relative z-10 px-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wider"
          >
            Welcome Back
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/80 max-w-md mx-auto font-light leading-relaxed"
          >
            Log in to your Stock Market Luminator account to continue your investment journey with confidence.
          </motion.p>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 relative overflow-y-auto">
        <a 
          href="#" 
          className="absolute top-8 left-8 sm:left-12 flex items-center gap-2 text-gray-500 hover:text-brand-blue transition-colors font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>

        <motion.div 
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md"
        >
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 uppercase tracking-wide">Sign In</h1>
            <p className="text-gray-500 text-sm">Please enter your details to access your account.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3  focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none bg-white/50 text-gray-900"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wider">Password</label>
                <a href="#" className="text-xs font-semibold text-brand-blue hover:text-brand-purple transition-colors">
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3  focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none bg-white/50 text-gray-900"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-4 px-4 border-transparent  shadow-sm text-sm font-bold text-white bg-brand-blue hover:bg-brand-blue-mid focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue uppercase tracking-widest transition-all"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <a href="#signup" className="font-bold text-brand-blue hover:text-brand-purple transition-colors">
              Sign up now
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
