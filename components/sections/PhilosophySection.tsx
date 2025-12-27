'use client';

export default function PhilosophySection() {
	return (
		<section className='section-padding bg-gradient-to-br from-neutral-50 to-white'>
			<div className='container'>
				<div className='max-w-4xl mx-auto'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div>
							<h2 className='text-3xl lg:text-4xl font-bold text-neutral-900 mb-6'>
								Clean That Comes Full Circle
							</h2>
							<p className='text-lg text-neutral-600 mb-4'>
								Our philosophy centers on creating closed-loop systems where
								inputs are optimized, waste is minimized, and compliance is
								built into every process.
							</p>
							<ul className='space-y-3 text-neutral-700'>
								<li className='flex items-start'>
									<span className='text-emerald-600 mr-3 mt-1 text-xl'>→</span>
									<span>
										<strong>Inputs:</strong> Right chemical, right dose,
										right process
									</span>
								</li>
								<li className='flex items-start'>
									<span className='text-emerald-600 mr-3 mt-1 text-xl'>→</span>
									<span>
										<strong>Optimization:</strong> System-led efficiency and
										waste reduction
									</span>
								</li>
								<li className='flex items-start'>
									<span className='text-emerald-600 mr-3 mt-1 text-xl'>→</span>
									<span>
										<strong>Reuse:</strong> Circular packaging and resource
										recovery
									</span>
								</li>
								<li className='flex items-start'>
									<span className='text-emerald-600 mr-3 mt-1 text-xl'>→</span>
									<span>
										<strong>Compliance:</strong> Audit-ready documentation and
										measurable impact
									</span>
								</li>
							</ul>
						</div>
						<div className='relative'>
							<svg
								viewBox='0 0 400 400'
								className='w-full h-auto'
								xmlns='http://www.w3.org/2000/svg'
							>
								<defs>
									<linearGradient
										id='circleGrad'
										x1='0%'
										y1='0%'
										x2='100%'
										y2='100%'
									>
										<stop offset='0%' stopColor='rgb(5 150 105)' />
										<stop offset='100%' stopColor='rgb(52 211 153)' />
									</linearGradient>
								</defs>
								{/* Circular flow illustration */}
								<circle
									cx='200'
									cy='200'
									r='150'
									fill='none'
									stroke='url(#circleGrad)'
									strokeWidth='3'
									strokeDasharray='8 4'
								>
									<animateTransform
										attributeName='transform'
										type='rotate'
										from='0 200 200'
										to='360 200 200'
										dur='20s'
										repeatCount='indefinite'
									/>
								</circle>
								<circle cx='200' cy='50' r='20' fill='url(#circleGrad)'>
									<animate
										attributeName='opacity'
										values='0.5;1;0.5'
										dur='2s'
										repeatCount='indefinite'
									/>
								</circle>
								<circle cx='350' cy='200' r='20' fill='url(#circleGrad)'>
									<animate
										attributeName='opacity'
										values='0.5;1;0.5'
										dur='2s'
										begin='0.5s'
										repeatCount='indefinite'
									/>
								</circle>
								<circle cx='200' cy='350' r='20' fill='url(#circleGrad)'>
									<animate
										attributeName='opacity'
										values='0.5;1;0.5'
										dur='2s'
										begin='1s'
										repeatCount='indefinite'
									/>
								</circle>
								<circle cx='50' cy='200' r='20' fill='url(#circleGrad)'>
									<animate
										attributeName='opacity'
										values='0.5;1;0.5'
										dur='2s'
										begin='1.5s'
										repeatCount='indefinite'
									/>
								</circle>
								<text
									x='200'
									y='30'
									textAnchor='middle'
									className='text-sm font-semibold fill-neutral-700'
								>
									Inputs
								</text>
								<text
									x='380'
									y='210'
									textAnchor='middle'
									className='text-sm font-semibold fill-neutral-700'
								>
									Optimization
								</text>
								<text
									x='200'
									y='390'
									textAnchor='middle'
									className='text-sm font-semibold fill-neutral-700'
								>
									Reuse
								</text>
								<text
									x='20'
									y='210'
									textAnchor='middle'
									className='text-sm font-semibold fill-neutral-700'
								>
									Compliance
								</text>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

