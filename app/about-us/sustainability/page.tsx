import type { Metadata } from 'next';
import ImpactViz from '@/components/about-us/ImpactViz';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
	title: 'Sustainability | InfinityBox',
	description: 'Action-Led Impact. We measure what matters.',
};

export default function Sustainability() {
	return (
		<main className='bg-neutral-950'>
             {/* Header */}
             <section className="py-20 md:py-24 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="inline-block px-4 py-2 rounded-full border border-emerald-500/30 text-emerald-400 uppercase tracking-widest text-sm mb-8">
                    Sustainability Report
                </span>
                <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-tight">
                    DATA DRIVEN<br/> <span className="text-emerald-500">GREEN IMPACT</span>
                </h1>
                <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                    We moved beyond "eco-friendly" buzzwords. We build systems that naturally consume less and produce more.
                </p>
             </section>

             {/* Viz */}
             <ImpactViz />

             {/* CTA */}
              <section className="section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 relative overflow-hidden">
                 {/* Grid Pattern */}
                 <div className="absolute inset-0 opacity-10">
                     <div
                         className="absolute inset-0"
                         style={{
                             backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`,
                             backgroundSize: '50px 50px',
                         }}
                     />
                 </div>

                 {/* Radial Gradient Glow */}
                 <div className="absolute inset-0 bg-radial-gradient from-emerald-500/20 via-transparent to-transparent opacity-40" />

                 <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                     <div className="max-w-4xl mx-auto text-center">
                         <div className="inline-block px-4 py-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 uppercase tracking-widest text-xs md:text-sm mb-6 md:mb-8">
                             Ready to Make a Difference?
                         </div>

                         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
                             Make Your Impact <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">Measurable</span>
                         </h2>

                         <p className="text-base md:text-lg lg:text-xl text-neutral-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
                             Get a comprehensive sustainability audit and discover how InfinityBox can help you achieve your environmental goals with data-driven solutions.
                         </p>

                         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                             <a
                                 href="/contact"
                                 className="group relative inline-flex items-center justify-center bg-white text-emerald-950 hover:bg-emerald-50 border-none rounded-full px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-bold shadow-xl shadow-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 overflow-hidden w-full sm:w-auto"
                             >
                                 <span className="relative z-10 text-emerald-950">Request Sustainability Audit</span>
                                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-100/50 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                             </a>
                         </div>
                     </div>
                 </div>
              </section>
		</main>
	);
}

