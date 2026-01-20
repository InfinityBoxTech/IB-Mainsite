'use client';

import { getCaseStudyBySlug, caseStudies } from '@/data/caseStudies';
import { notFound, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, MapPin, Target, Zap, TrendingUp, CheckCircle2, Award } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default function CaseStudyDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="bg-white pt-20">
      {/* Hero Section */}
      <section className={`relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${study.gradient || 'from-neutral-900 to-neutral-800'} overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
           <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="container mx-auto relative z-10">
          <Link href="/insights/case-studies" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold uppercase tracking-wider">
                  <Building2 className="w-4 h-4" />
                  {study.industry}
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
                  {study.solution}
                </span>
                {study.location && (
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
                        <MapPin className="w-4 h-4" />
                        {study.location}
                    </span>
                )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {study.title}
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 max-w-3xl leading-relaxed">
              {study.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Challenge & Approach */}
              <div className="space-y-8">
                <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
                    <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                        <Target className="w-6 h-6 text-rose-500" />
                        The Challenge
                    </h3>
                    <p className="text-lg text-neutral-700 leading-relaxed">
                        {study.challenge}
                    </p>
                </div>

                {study.approach && (
                    <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
                        <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                            <Zap className="w-6 h-6 text-amber-500" />
                            Our Approach
                        </h3>
                        <p className="text-lg text-neutral-700 leading-relaxed">
                            {study.approach}
                        </p>
                    </div>
                )}
                
                {study.result && (
                     <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
                        <h3 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                            <Award className="w-6 h-6 text-emerald-600" />
                            The Result
                        </h3>
                        <p className="text-lg text-emerald-800 leading-relaxed">
                            {study.result}
                        </p>
                    </div>
                )}
              </div>
            </div>

            {/* Sidebar / Metrics */}
            <div className="space-y-8">
                <h3 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                    Key Metrics
                </h3>
                <div className="space-y-4">
                    {study.primaryMetrics.map((metric, idx) => {
                         const Icon = metric.icon;
                        return (
                            <div key={idx} className={`p-6 rounded-2xl border ${metric.borderColor || 'border-neutral-200'} ${metric.bgColor || 'bg-neutral-50'}`}>
                                <div className="flex items-start justify-between mb-2">
                                     <div className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                                        {metric.label}
                                     </div>
                                     <Icon className={`w-5 h-5 ${metric.textColor || 'text-neutral-500'}`} />
                                </div>
                                <div className="text-3xl font-bold text-neutral-900">
                                    {metric.value}
                                </div>
                                {metric.subValue && (
                                    <div className="text-sm text-neutral-600 mt-1">
                                        {metric.subValue}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {study.secondaryMetrics && study.secondaryMetrics.length > 0 && (
                     <div className="pt-8 border-t border-neutral-200">
                        <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-4">Additional Impact</h4>
                         <div className="space-y-4">
                            {study.secondaryMetrics.map((metric, idx) => {
                                const Icon = metric.icon;
                                return (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-neutral-900">{metric.value} {metric.unit}</div>
                                            <div className="text-sm text-neutral-600">{metric.label}</div>
                                        </div>
                                    </div>
                                )
                            })}
                         </div>
                     </div>
                )}

                {study.operationalScale && (
                    <div className="pt-8 border-t border-neutral-200">
                         <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-4">Operational Scale</h4>
                         <dl className="grid grid-cols-1 gap-3">
                             {Object.entries(study.operationalScale).map(([key, value]) => (
                                 <div key={key} className="flex justify-between">
                                     <dt className="text-neutral-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</dt>
                                     <dd className="font-medium text-neutral-900">{value}</dd>
                                 </div>
                             ))}
                         </dl>
                    </div>
                )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
