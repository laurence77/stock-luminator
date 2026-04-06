import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShieldCheck, User, Landmark, FileText, CheckCircle2, ArrowRight, ArrowLeft, UploadCloud, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const steps = [
  { id: 'identity', title: 'Identity', icon: User, description: 'Legal identification details' },
  { id: 'documents', title: 'Documents', icon: FileText, description: 'Institutional verification' },
  { id: 'financial', title: 'Financial', icon: Landmark, description: 'Investment profile' },
];

export default function KycStepper() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { completeKyc } = useAuth();
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setDirection(1);
      setCurrentStep(prev => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleComplete = async () => {
    setIsSubmitting(true);
    try {
      await completeKyc();
      navigate('/dashboard');
    } catch (err) {
      console.error('KYC Submission failed', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center p-6 font-sans">
      <div className="w-full max-w-[900px] grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">
        
        {/* Sidebar Info */}
        <div className="space-y-8 lg:sticky lg:top-12">
          <div className="space-y-2">
            <h1 className="text-[32px] font-black text-white tracking-tight leading-none italic">LUMINATOR</h1>
            <p className="text-[#00fbfb] text-[12px] font-bold uppercase tracking-[0.3em]">Institutional Onboarding</p>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === currentStep;
              const isCompleted = index < currentStep;

              return (
                <div key={step.id} className="flex items-center gap-4 group">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-500 ${
                    isActive ? 'bg-[#00fbfb]/10 border-[#00fbfb] text-[#00fbfb] scale-110 shadow-[0_0_20px_rgba(0,251,251,0.2)]' : 
                    isCompleted ? 'bg-[#00fbfb] border-[#00fbfb] text-[#131318]' : 
                    'bg-white/5 border-white/10 text-white/20'
                  }`}>
                    {isCompleted ? <CheckCircle2 size={20} /> : <Icon size={20} />}
                  </div>
                  <div className="space-y-0.5">
                    <p className={`text-[13px] font-black uppercase tracking-widest ${isActive ? 'text-white' : 'text-white/30'}`}>
                      {step.title}
                    </p>
                    <p className="text-[11px] text-white/20 font-medium">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4">
            <div className="flex items-center gap-3 text-[#00fbfb]">
              <ShieldCheck size={18} />
              <span className="text-[12px] font-bold uppercase tracking-wider">Regulatory Shield</span>
            </div>
            <p className="text-[12px] text-white/40 leading-relaxed">
              Your data is encrypted with AES-256 and stored in compliance with SEC and FINRA data retention policies.
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-[#1b1b20]/60 backdrop-blur-3xl border border-white/5 rounded-[40px] shadow-2xl overflow-hidden relative min-h-[550px] flex flex-col">
          <div className="p-8 lg:p-12 flex-1 relative">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentStep}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-x-0 px-8 lg:px-12"
              >
                {currentStep === 0 && <IdentityStep />}
                {currentStep === 1 && <DocumentStep />}
                {currentStep === 2 && <FinancialStep />}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer Navigation */}
          <div className="p-8 lg:p-12 bg-white/[0.02] border-t border-white/5 flex justify-between items-center z-10">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentStep === 0 || isSubmitting}
              className="text-white/40 hover:text-white hover:bg-white/5 h-12 px-6 rounded-xl font-bold uppercase tracking-widest transition-all"
            >
              <ArrowLeft size={18} className="mr-2" /> Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={isSubmitting}
              className="bg-[#00fbfb] hover:bg-[#6305ef] text-[#131318] hover:text-white h-12 px-8 rounded-xl font-black uppercase tracking-widest transition-all duration-500 shadow-xl shadow-[#00fbfb]/10"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <span className="flex items-center">
                  {currentStep === steps.length - 1 ? 'Complete Verification' : 'Next Step'}
                  <ArrowRight size={18} className="ml-2" />
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function IdentityStep() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-[28px] font-black text-white tracking-tight">Identity Verification</h2>
        <p className="text-white/40 text-[14px]">Ensure all details match your legal documentation exactly.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2 md:col-span-2">
          <Label className="text-[11px] font-bold uppercase tracking-widest text-white/50 px-1">Full Legal Name</Label>
          <Input className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:ring-[#00fbfb]/50" placeholder="Alexander Hamilton" />
        </div>
        <div className="space-y-2">
          <Label className="text-[11px] font-bold uppercase tracking-widest text-white/50 px-1">Date of Birth</Label>
          <Input type="date" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:ring-[#00fbfb]/50" />
        </div>
        <div className="space-y-2">
          <Label className="text-[11px] font-bold uppercase tracking-widest text-white/50 px-1">Tax ID / SSN</Label>
          <Input className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:ring-[#00fbfb]/50" placeholder="XX-XXXXXXX" />
        </div>
      </div>
    </div>
  );
}

function DocumentStep() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-[28px] font-black text-white tracking-tight">Institutional Proof</h2>
        <p className="text-white/40 text-[14px]">Upload government-issued identification or entity formation papers.</p>
      </div>

      <div className="border-2 border-dashed border-white/10 rounded-[32px] p-12 flex flex-col items-center justify-center text-center space-y-4 hover:border-[#00fbfb]/30 hover:bg-[#00fbfb]/5 transition-all cursor-pointer group">
        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white/20 group-hover:text-[#00fbfb] group-hover:scale-110 transition-all duration-500">
          <UploadCloud size={32} />
        </div>
        <div className="space-y-1">
          <p className="text-[16px] font-black text-white">Drop files here</p>
          <p className="text-[13px] text-white/30 font-medium">PNG, PDF or JPG (Max 10MB)</p>
        </div>
        <Button variant="outline" className="bg-transparent border-white/10 text-white/60 hover:text-white rounded-xl font-bold uppercase tracking-widest text-[11px]">
          Select Documents
        </Button>
      </div>

      <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#00fbfb]/5 border border-[#00fbfb]/10">
        <div className="w-10 h-10 rounded-xl bg-[#00fbfb]/10 flex items-center justify-center text-[#00fbfb]">
          <FileText size={20} />
        </div>
        <div className="space-y-0.5">
          <p className="text-[12px] font-bold text-white uppercase tracking-wider">Example: passport_verification.pdf</p>
          <div className="flex items-center gap-2">
            <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-[#00fbfb] w-[75%]" />
            </div>
            <span className="text-[10px] font-bold text-[#00fbfb]">75%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FinancialStep() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-[28px] font-black text-white tracking-tight">Investment Profile</h2>
        <p className="text-white/40 text-[14px]">Define your institutional risk parameters and experience level.</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label className="text-[11px] font-bold uppercase tracking-widest text-white/50 px-1">Investor Designation</Label>
          <Select>
            <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 rounded-xl">
              <SelectValue placeholder="Select institutional type" />
            </SelectTrigger>
            <SelectContent className="bg-[#1b1b20] border-white/10 text-white">
              <SelectItem value="private">Private Family Office</SelectItem>
              <SelectItem value="hedge">Hedge Fund / Asset Manager</SelectItem>
              <SelectItem value="pension">Pension / Sovereign Fund</SelectItem>
              <SelectItem value="hnwi">Accredited High-Net-Worth</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-[11px] font-bold uppercase tracking-widest text-white/50 px-1">Liquid Net Worth (USD)</Label>
          <Select>
            <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 rounded-xl">
              <SelectValue placeholder="Verify AUM range" />
            </SelectTrigger>
            <SelectContent className="bg-[#1b1b20] border-white/10 text-white">
              <SelectItem value="1m">$1M - $10M</SelectItem>
              <SelectItem value="10m">$10M - $100M</SelectItem>
              <SelectItem value="100m">$100M - $1B</SelectItem>
              <SelectItem value="1b">$1B+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="p-4 rounded-2xl bg-rose-500/5 border border-rose-500/10">
          <p className="text-[11px] text-rose-500/80 leading-relaxed font-medium">
            <span className="font-black uppercase mr-2">Notice:</span> 
            By continuing, you attest that you meet the SEC definition of an "Accredited Investor" or "Qualified Institutional Buyer".
          </p>
        </div>
      </div>
    </div>
  );
}
