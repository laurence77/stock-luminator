import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from '@/components/ui/input-otp';
import { Loader2, ShieldAlert, CheckCircle2, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MfaVerification() {
  const { verifyMfa, isMfaRequired } = useAuth();
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // If MFA is not required but user is here, redirect to signin
  useEffect(() => {
    if (!isMfaRequired && !isSuccess) {
       // navigate('/signin');
    }
  }, [isMfaRequired, isSuccess, navigate]);

  const handleComplete = async (code: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const success = await verifyMfa(code);
      if (success) {
        setIsSuccess(true);
        setTimeout(() => navigate('/onboarding'), 1500);
      } else {
        setError('Verification failed. Invalid authentication code.');
        setValue('');
      }
    } catch {
      setError('System synchronization error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#09090b] p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-[480px] p-10 rounded-[40px] bg-[#1b1b20]/60 backdrop-blur-3xl border border-white/5 shadow-[0_0_100px_rgba(0,251,251,0.05)] relative overflow-hidden"
      >
        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00fbfb]/10 blur-[80px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#6305ef]/10 blur-[80px] rounded-full" />

        <div className="relative z-10 flex flex-col items-center text-center space-y-10">
          <div className="space-y-3">
            <div className={`mx-auto w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-700 ${
              isSuccess ? 'bg-[#00fbfb]/20 text-[#00fbfb] rotate-[360deg]' : 'bg-white/5 text-white/40'
            }`}>
              {isSuccess ? <CheckCircle2 size={32} /> : <ShieldAlert size={32} />}
            </div>
            <h2 className="text-[28px] font-black text-white tracking-tight">Two-Step Verification</h2>
            <p className="text-white/40 text-[14px] max-w-[320px] mx-auto leading-relaxed">
              Enter the 6-digit cryptographic code from your institutional authenticator app.
            </p>
          </div>

          <div className="space-y-8 w-full flex flex-col items-center">
            <InputOTP
              maxLength={6}
              value={value}
              onChange={setValue}
              onComplete={handleComplete}
              disabled={isLoading || isSuccess}
              className="gap-2"
              title="Verification Code Input"
            >
              <InputOTPGroup className="gap-2">
                {[0, 1, 2].map((i) => (
                  <InputOTPSlot 
                    key={i} 
                    index={i} 
                    className="w-14 h-16 text-[24px] font-black bg-white/5 border-white/10 text-white rounded-xl data-[active=true]:border-[#00fbfb] data-[active=true]:ring-4 data-[active=true]:ring-[#00fbfb]/10 transition-all"
                  />
                ))}
              </InputOTPGroup>
              <InputOTPSeparator className="text-white/20" />
              <InputOTPGroup className="gap-2">
                {[3, 4, 5].map((i) => (
                  <InputOTPSlot 
                    key={i} 
                    index={i} 
                    className="w-14 h-16 text-[24px] font-black bg-white/5 border-white/10 text-white rounded-xl data-[active=true]:border-[#00fbfb] data-[active=true]:ring-4 data-[active=true]:ring-[#00fbfb]/10 transition-all"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>

            {error && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-rose-500 text-[13px] font-bold"
              >
                {error}
              </motion.p>
            )}
          </div>

          <div className="w-full space-y-4">
            <Button
              className="w-full bg-[#131318] border border-white/10 text-white/40 hover:text-white h-14 rounded-xl font-bold uppercase tracking-widest transition-all group"
              onClick={() => setValue('')}
              disabled={isLoading || isSuccess}
            >
              <span className="flex items-center gap-2">
                <RotateCcw size={16} className="group-hover:-rotate-180 transition-transform duration-500" />
                Regenerate Request
              </span>
            </Button>
            
            <p className="text-[11px] text-white/20 font-bold uppercase tracking-[0.2em]">
              Security Handshake: <span className="text-[#00fbfb]">TLS 1.3 / AES-256</span>
            </p>
          </div>
        </div>

        {isLoading && (
          <div className="absolute inset-0 bg-[#09090b]/40 backdrop-blur-sm z-50 flex items-center justify-center">
            <Loader2 className="text-[#00fbfb] animate-spin" size={40} />
          </div>
        )}
      </motion.div>
    </div>
  );
}
