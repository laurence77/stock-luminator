import { useState, useMemo, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '@/lib/animations';
import './TeslaAllocationCalculator.css';

const TeslaAllocationCalculator = () => {
    const [cybercab, setCybercab] = useState(25);
    const [optimus, setOptimus] = useState(15);
    const cyberRef = useRef<HTMLInputElement>(null);
    const optimusRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (cyberRef.current) {
            cyberRef.current.style.setProperty('--range-progress', `${cybercab}%`);
        }
    }, [cybercab]);

    useEffect(() => {
        if (optimusRef.current) {
            optimusRef.current.style.setProperty('--range-progress', `${optimus}%`);
        }
    }, [optimus]);

    // Calculation: Cybercab contributes up to $15T, Optimus up to $85T
    const yieldValue = useMemo(() => {
        return (cybercab * 0.15 + optimus * 0.85).toFixed(1);
    }, [cybercab, optimus]);

    return (
        <section className="py-24 bg-[#131318] relative overflow-hidden border-t border-white/5">
            <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            >
                <div 
                    className="bg-[#1b1b20]/80 backdrop-blur-xl border border-white/10 p-8 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00fbfb]/10 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#6305ef]/5 blur-[100px] rounded-full pointer-events-none" />

                    <motion.div variants={fadeInUp} className="text-center mb-20">
                        <h3 className="text-[#00fbfb] text-[13px] font-bold tracking-[0.3em] uppercase mb-4">Strategic Projections</h3>
                        <h2 className="text-[36px] md:text-[52px] font-bold text-white tracking-[-0.04em] leading-tight">
                            Future Allocation <br className="hidden md:block" /> Scaling Logic
                        </h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div variants={fadeInUp} className="space-y-16">
                            {/* Slider 1: Cybercab */}
                            <div className="space-y-8">
                                <div className="flex justify-between items-end">
                                    <div className="space-y-1">
                                        <label htmlFor="cybercab-slider" className="text-white text-[16px] font-semibold tracking-tight block">
                                            Projected Cybercab Fleet Deployment
                                        </label>
                                        <p className="text-white/40 text-[13px]">Global autonomous miles per annum (2025-2030)</p>
                                    </div>
                                    <span className="text-[#00fbfb] font-mono text-[24px] font-black leading-none">
                                        {cybercab}<span className="text-[14px] ml-0.5">%</span>
                                    </span>
                                </div>
                                <div className="relative pt-2">
                                    <input 
                                        ref={cyberRef}
                                        id="cybercab-slider"
                                        type="range" 
                                        min="0" 
                                        max="100" 
                                        value={cybercab} 
                                        onChange={(e) => setCybercab(parseInt(e.target.value))}
                                        className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-[#00fbfb] hover:accent-[#00fbfb]/80 transition-all tesla-range-slider"
                                        title="Cybercab Deployment Percentage"
                                    />
                                    <div className="flex justify-between text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold mt-4">
                                        <span>Beta Phase</span>
                                        <span>Mass Adoption</span>
                                    </div>
                                </div>
                            </div>

                            {/* Slider 2: Optimus */}
                            <div className="space-y-8">
                                <div className="flex justify-between items-end">
                                    <div className="space-y-1">
                                        <label htmlFor="optimus-slider" className="text-white text-[16px] font-semibold tracking-tight block">
                                            Optimus Gen-2 Enterprise Adoption
                                        </label>
                                        <p className="text-white/40 text-[13px]">Unit deployment across Fortune 500 manufacturing</p>
                                    </div>
                                    <span className="text-[#00fbfb] font-mono text-[24px] font-black leading-none">
                                        {optimus}<span className="text-[14px] ml-0.5">%</span>
                                    </span>
                                </div>
                                <div className="relative pt-2">
                                    <input 
                                        ref={optimusRef}
                                        id="optimus-slider"
                                        type="range" 
                                        min="0" 
                                        max="100" 
                                        value={optimus} 
                                        onChange={(e) => setOptimus(parseInt(e.target.value))}
                                        className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-[#00fbfb] hover:accent-[#00fbfb]/80 transition-all tesla-range-slider"
                                        title="Optimus Adoption Percentage"
                                    />
                                    <div className="flex justify-between text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold mt-4">
                                        <span>Internal Pilot</span>
                                        <span>Global Labor Force</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Result Display */}
                        <motion.div 
                            variants={fadeInUp}
                            className="relative flex flex-col items-center justify-center py-12 lg:py-0 border-t lg:border-t-0 lg:border-l border-white/5"
                        >
                            <div className="text-center space-y-2 mb-8">
                                <span className="text-white/40 text-[12px] font-bold tracking-[0.3em] uppercase">
                                    Projected Portfolio Yield
                                </span>
                                <div className="h-px w-12 bg-[#00fbfb]/30 mx-auto" />
                            </div>

                            <div className="relative">
                                {/* Massive Glowing Number */}
                                <motion.div 
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    key={yieldValue}
                                    className="relative z-10"
                                >
                                    <span className="text-[80px] md:text-[120px] font-black tracking-tighter bg-gradient-to-b from-white via-white to-[#00fbfb] bg-clip-text text-transparent filter drop-shadow-[0_0_30px_rgba(0,251,251,0.3)]">
                                        ${yieldValue}T
                                    </span>
                                </motion.div>
                                
                                {/* Background Aura */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#00fbfb]/10 blur-[80px] rounded-full -z-10 animate-pulse" />
                            </div>

                            <p className="text-white/50 text-[14px] max-w-[320px] text-center mt-10 leading-relaxed font-medium">
                                Estimated incremental market capitalization <br /> by 2035 at current deployment velocity.
                            </p>

                            <div className="mt-12 flex gap-4">
                                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[11px] text-white/60 font-bold uppercase tracking-widest">
                                    Model V.4.2
                                </div>
                                <div className="px-4 py-2 bg-[#00fbfb]/10 border border-[#00fbfb]/20 rounded-full text-[11px] text-[#00fbfb] font-bold uppercase tracking-widest">
                                    Real-time
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00fbfb]/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </section>
    );
};

export default TeslaAllocationCalculator;
