import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '../../context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, UserPlus, Check } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const signUpSchema = z.object({
  name: z.string().min(2, 'Enter your full legal name'),
  email: z.string().email('Please enter a valid institutional email address'),
  password: z
    .string()
    .min(10, 'Security key must be at least 10 characters')
    .regex(/[A-Z]/, 'Must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Must contain at least one special character'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Security keys do not match',
  path: ['confirmPassword'],
});

type SignUpValues = z.infer<typeof signUpSchema>;

export const SignUpForm: React.FC = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
  });

  const password = watch('password', '');

  const requirements = [
    { label: '10+ Characters', met: password.length >= 10 },
    { label: 'Uppercase Letter', met: /[A-Z]/.test(password) },
    { label: 'Number', met: /[0-9]/.test(password) },
    { label: 'Special Character', met: /[^A-Za-z0-9]/.test(password) },
  ];

  const onSubmit = async (data: SignUpValues) => {
    setIsLoading(true);
    setError(null);
    try {
      await signup(data.email, data.password, data.name);
      navigate('/verify-mfa');
    } catch {
      setError('Registration failed. Please attempt initialization again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[500px] mx-auto p-8 rounded-[32px] bg-[#1b1b20]/80 backdrop-blur-2xl border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#6305ef]/10 blur-[60px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#6305ef]/10 border border-[#6305ef]/20 text-[#6305ef] mb-4">
            <UserPlus size={24} />
          </div>
          <h2 className="text-[28px] font-black text-white tracking-tight">Initialize Entity</h2>
          <p className="text-white/40 text-[14px]">Establish secure institutional presence on Luminator.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-[12px] font-bold uppercase tracking-widest text-white/50 px-1">
              Full Legal Representative Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="John D. Rockefeller"
              {...register('name')}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-11 rounded-xl"
            />
            {errors.name && (
              <p className="text-rose-500 text-[12px] font-medium px-1 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-[12px] font-bold uppercase tracking-widest text-white/50 px-1">
              Institutional Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="name@foundation.org"
              {...register('email')}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-11 rounded-xl"
            />
            {errors.email && (
              <p className="text-rose-500 text-[12px] font-medium px-1 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password" className="text-[12px] font-bold uppercase tracking-widest text-white/50 px-1">
                New Security Key
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••••••"
                {...register('password')}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-11 rounded-xl"
              />
            </div>
            
            {/* Password Multi-Check UI */}
            <div className="grid grid-cols-2 gap-2 px-1">
              {requirements.map((req) => (
                <div key={req.label} className="flex items-center gap-2">
                  {req.met ? (
                    <Check size={14} className="text-[#00fbfb]" />
                  ) : (
                    <div className="w-1 h-1 rounded-full bg-white/20 ml-1.5 mr-0.5" />
                  )}
                  <span className={`text-[10px] font-bold uppercase tracking-tight ${req.met ? 'text-white/70' : 'text-white/20'}`}>
                    {req.label}
                  </span>
                </div>
              ))}
            </div>
            {errors.password && (
              <p className="text-rose-500 text-[12px] font-medium px-1 mt-1">{errors.password.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-[12px] font-bold uppercase tracking-widest text-white/50 px-1">
              Confirm Security Key
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••••••"
              {...register('confirmPassword')}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-11 rounded-xl"
            />
            {errors.confirmPassword && (
              <p className="text-rose-500 text-[12px] font-medium px-1 mt-1">{errors.confirmPassword.message}</p>
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
            className="w-full bg-[#6305ef] hover:bg-[#00fbfb] text-white hover:text-[#131318] h-12 rounded-xl font-black uppercase tracking-widest transition-all duration-500 shadow-lg shadow-[#6305ef]/10"
          >
            {isLoading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              'Initialize Platform'
            )}
          </Button>
        </form>

        <div className="text-center pt-8 border-t border-white/5">
          <p className="text-white/30 text-[13px] font-medium">
            Existing entity? <Link to="/signin" title="Login" className="text-[#00fbfb] font-bold hover:underline">Verify Identity</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
