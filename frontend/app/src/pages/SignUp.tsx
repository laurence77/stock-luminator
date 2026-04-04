import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Lock, User, CheckCircle2, ShieldCheck } from 'lucide-react';
import { slideInRight } from '../lib/animations';
import Stepper, { Step } from '../components/ui/Stepper';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value !== '' && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div className="min-h-screen flex bg-brand-surface font-sans">
      {/* Left Panel - Image/Brand */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-black items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/stock.jpg')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/80 to-brand-dark/90 mix-blend-multiply"></div>
        
        <div className="relative z-10 px-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wider"
          >
            Start Your Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/80 max-w-md mx-auto font-light leading-relaxed"
          >
            Create an account today and take the first step towards managing your wealth with professional-grade tools.
          </motion.p>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 relative overflow-y-auto">
        <a 
          href="#" 
          className="absolute top-8 left-8 sm:left-12 flex items-center gap-2 text-gray-500 hover:text-brand-purple transition-colors font-medium text-sm z-50"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>

        <motion.div 
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          className="w-full max-w-lg mt-12"
        >
          <Stepper
            initialStep={1}
            onFinalStepCompleted={() => {
              window.location.hash = '#dashboard';
              console.log("Navigating to Dashboard...");
            }}
            backButtonText="Back"
            nextButtonText="Continue"
          >
            {/* STEP 1: Account Details */}
            <Step>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2 uppercase tracking-wide">Create Account</h1>
                <p className="text-gray-500 text-sm">Fill in your details below to get started entirely free.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-wider">FULL NAME</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3  focus:ring-2 focus:ring-brand-purple outline-none bg-white/50"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-wider">EMAIL ADDRESS</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3  focus:ring-2 focus:ring-brand-purple outline-none bg-white/50"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-wider">PASSWORD</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3  focus:ring-2 focus:ring-brand-purple outline-none bg-white/50"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </div>
            </Step>

            {/* STEP 2: Email Verification */}
            <Step>
              <div className="mb-8 text-center pt-4">
                <div className="w-16 h-16 bg-brand-purple/10  flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-8 w-8 text-brand-purple" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2 uppercase tracking-wide">Verify Your Email</h1>
                <p className="text-gray-500 text-sm">
                  We've sent a 6-digit code to <span className="font-semibold text-gray-900">{email || 'your email'}</span>.<br/>Please enter it below.
                </p>
              </div>

              <div className="flex justify-center gap-2 mb-8">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    title={`Digit ${index + 1}`}
                    aria-label={`Digit ${index + 1}`}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    className="w-12 h-14 text-center text-xl font-bold  focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none bg-white"
                  />
                ))}
              </div>
            </Step>

            {/* STEP 3: Success */}
            <Step>
              <div className="py-12 text-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  className="w-20 h-20 bg-green-100  flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </motion.div>
                <h1 className="text-3xl font-bold text-gray-900 mb-3 uppercase tracking-wide">Account Verified!</h1>
                <p className="text-gray-500 text-sm mb-6">
                  Your identity has been confirmed. You are now ready to make your first deposit and start building your portfolio.
                </p>
              </div>
            </Step>
          </Stepper>

          <div className="mt-8 text-center text-sm text-gray-500 pb-12">
            Already have an account?{' '}
            <a href="#signin" className="font-bold text-brand-purple hover:text-brand-blue transition-colors">
              Sign in securely
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
