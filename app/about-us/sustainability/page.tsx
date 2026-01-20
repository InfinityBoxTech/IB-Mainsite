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

             {/* Philosophy & Commitment Section */}
             <section className="section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 bg-gradient-to-b from-neutral-950 to-neutral-900 relative overflow-hidden">
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

                 <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                     <div className="max-w-4xl mx-auto">
                         {/* Header */}
                         <div className="text-center mb-16">
                             <span className="inline-block px-4 py-2 rounded-full border border-emerald-500/30 text-emerald-400 uppercase tracking-widest text-sm mb-6">
                                 Our Philosophy & Sustainability Commitment
                             </span>
                             <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                 Sustainability That Holds Up Under Operations
                             </h2>
                         </div>

                         {/* Main Philosophy */}
                         <div className="mb-12">
                             <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-6">
                                 At InfinityBox, sustainability is not treated as a parallel initiative or a compliance exercise. We believe it only creates value when it works under real operating conditions — high volumes, tight service windows, audits, cost constraints, and daily variability.
                             </p>
                             <p className="text-xl md:text-2xl font-semibold text-emerald-400 leading-relaxed mb-6">
                                 Our philosophy is straightforward: if a sustainable solution cannot be executed reliably at scale, it is not viable.
                             </p>
                             <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                                 This principle guides how we design processes, select materials, train teams, and run operations across facilities. We prioritise operational discipline, accountability, and consistency over experimentation or short-term optics.
                             </p>
                         </div>

                         {/* Embedded, Not Added On */}
                         <div className="mb-12 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-emerald-500/20">
                             <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                 Embedded, Not Added On
                             </h3>
                             <p className="text-lg text-neutral-300 leading-relaxed">
                                 Sustainability at InfinityBox is built directly into day-to-day cafeteria operations rather than layered on top. By standardising execution and owning outcomes end-to-end, we help enterprises reduce waste and resource consumption without increasing operational complexity or management overhead.
                             </p>
                             <p className="text-lg text-neutral-300 leading-relaxed mt-4">
                                 This approach allows sustainability goals to be met without disrupting service quality, hygiene standards, or cost predictability.
                             </p>
                         </div>

                         {/* Our Commitment */}
                         <div>
                             <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                                 Our Commitment
                             </h3>
                             <p className="text-lg text-neutral-300 text-center mb-10">
                                 We commit to building sustainability that enterprises can depend on:
                             </p>
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                 <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-emerald-500/20">
                                     <h4 className="text-xl font-bold text-emerald-400 mb-3">
                                         Operationally Sound
                                     </h4>
                                     <p className="text-neutral-300">
                                         Solutions designed to work within real-world constraints, without compromising reliability or safety.
                                     </p>
                                 </div>
                                 <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-emerald-500/20">
                                     <h4 className="text-xl font-bold text-emerald-400 mb-3">
                                         Measurable Over Time
                                     </h4>
                                     <p className="text-neutral-300">
                                         Focus on outcomes that can be tracked, reviewed, and improved year after year.
                                     </p>
                                 </div>
                                 <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-emerald-500/20">
                                     <h4 className="text-xl font-bold text-emerald-400 mb-3">
                                         Built for the Long Term
                                     </h4>
                                     <p className="text-neutral-300">
                                         Systems designed to strengthen with scale, not pilots or one-off interventions.
                                     </p>
                                 </div>
                             </div>
                             <p className="text-lg text-neutral-300 text-center mt-10">
                                 This commitment enables enterprises to pursue sustainability with confidence — knowing that operations remain stable, audits remain intact, and execution remains predictable.
                             </p>
                         </div>
                     </div>
                 </div>
             </section>

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

