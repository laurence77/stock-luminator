import { motion } from 'framer-motion';
import { fadeInUp, heroContainer, staggerContainer } from '../../lib/animations';
import { Navbar } from '../../components/navbar';
import { Footer } from '../../sections/footer';

export default function OurTeam() {
  const videoUrl = `${import.meta.env.BASE_URL}images/tesla/About-Us-Join-our-team-Desktop-Global.mp4`;
  
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0c] transition-colors duration-500">
      <Navbar />
      
      <main className="pt-20">
        {/* Recruitment Hero Section */}
        <section className="relative h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-80"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          </div>

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <motion.div
              variants={heroContainer}
              initial="hidden"
              animate="visible"
              className="max-w-[700px]"
            >
              <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/20 border border-brand-purple/30 backdrop-blur-md mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />
                <span className="text-[11px] font-bold tracking-[0.1em] text-white uppercase">Join the Vision</span>
              </motion.div>

              <motion.h1 
                variants={fadeInUp}
                className="text-[48px] md:text-[72px] font-extrabold text-white leading-[1.1] mb-8 tracking-[-0.04em]"
              >
                Architects of the <br />
                <span className="bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent">
                  Next Market Evolution
                </span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-[18px] text-gray-300 leading-relaxed max-w-[600px] mb-10"
              >
                At Stock Market Luminator, we don't just trade markets—we engineer futures. We are looking for generational talents in quantitative research, neural systems, and bespoke wealth advisory.
              </motion.p>

              <motion.div variants={fadeInUp}>
                <button className="bg-brand-purple hover:bg-white text-white hover:text-brand-purple px-10 py-4 text-[14px] font-bold tracking-[0.05em] uppercase transition-all shadow-lg hover:-translate-y-1">
                  View Open Missions
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 bg-gray-50 dark:bg-[#131318]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
            >
              {[
                { title: "Radical Transparency", desc: "No opaque models. We operate with absolute clarity for our partners and our team." },
                { title: "Neural Excellence", desc: "We leverage proprietary AI clusters to eliminate human bias from strategic execution." },
                { title: "Generational Growth", desc: "Our focus is not the next quarter, but the next decade of structural wealth." }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="p-8 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm">
                  <h3 className="text-[18px] font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
