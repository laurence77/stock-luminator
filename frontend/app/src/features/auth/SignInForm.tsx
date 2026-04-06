import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '../../context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, ShieldCheck, ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const signInSchema = z.object({
  email: z.string().email('Please enter a valid institutional email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type SignInValues = z.infer<typeof signInSchema>;

export const SignInForm: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInValues) => {
    setIsLoading(true);
    setError(null);
    try {
      await login(data.email, data.password);
      // login will trigger isMfaRequired in AuthContext
      navigate('/verify-mfa');
    } catch {
      setError('Invalid credentials. Please verify your institutional access.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[450px] mx-auto p-8 rounded-[32px] bg-[#1b1b20]/80 backdrop-blur-2xl border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#00fbfb]/10 blur-[60px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#00fbfb]/10 border border-[#00fbfb]/20 text-[#00fbfb] mb-4">
            <ShieldCheck size={24} />
          </div>
          <h2 className="text-[28px] font-black text-white tracking-tight">Institutional Login</h2>
          <p className="text-white/40 text-[14px]">Secure access to the Luminator dashboard.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[12px] font-bold uppercase tracking-widest text-white/50 px-1">
              Work Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="name@institution.com"
              {...register('email')}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 rounded-xl focus:ring-[#00fbfb]/50 transition-all"
            />
            {errors.email && (
              <p className="text-rose-500 text-[12px] font-medium px-1 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <Label htmlFor="password" className="text-[12px] font-bold uppercase tracking-widest text-white/50">
                Security Key
              </Label>
              <Link to="/forgot-password" title="Recover Access" className="text-[11px] font-bold text-[#00fbfb] hover:underline">Recover Access</Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register('password')}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 rounded-xl focus:ring-[#00fbfb]/50 transition-all"
            />
            {errors.password && (
              <p className="text-rose-500 text-[12px] font-medium px-1 mt-1">{errors.password.message}</p>
            )}
          </div>

          {error && (
            <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl">
              <p className="text-rose-500 text-[12px] font-medium text-center">{error}</p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#00fbfb] hover:bg-[#6305ef] text-[#131318] hover:text-white h-12 rounded-xl font-black uppercase tracking-widest transition-all duration-500 shadow-lg shadow-[#00fbfb]/10"
          >
            {isLoading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <span className="flex items-center gap-2">
                Verify Identity <ArrowRight size={18} />
              </span>
            )}
          </Button>
        </form>

        <div className="text-center pt-8 border-t border-white/5">
          <p className="text-white/30 text-[13px] font-medium">
            New entity? <Link to="/signup" title="Create Account" className="text-[#00fbfb] font-bold hover:underline">Initialize Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
