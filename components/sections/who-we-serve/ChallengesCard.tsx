import { AccentColors } from './types';

interface ChallengesCardProps {
	challenges: string[];
	colors: AccentColors;
}

export default function ChallengesCard({
	challenges,
	colors,
}: ChallengesCardProps) {
	return (
		<div className='md:col-span-6 xl:col-span-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 h-full flex flex-col'>
			<div className='bg-white rounded-xl sm:rounded-2xl border border-neutral-200 shadow-sm h-full flex flex-col'>
				<div className='px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10 flex flex-col gap-6 sm:gap-8'>
					{/* Parent div */}
					<div className='flex flex-col gap-4'>
						{/* First child div */}
						<div
							className={`text-xs sm:text-sm font-bold uppercase tracking-widest ${colors.text}`}
						>
							Typical Challenges
						</div>
						{/* Second child div */}
						<div className='pl-2 flex '>
							<ul className='flex flex-col gap-3 sm:gap-4'>
								{challenges.map((challenge, i) => (
									<li key={i} className='flex items-center gap-3'>
										<span className='block w-1.5 h-1.5 rounded-full bg-neutral-500 shrink-0 mt-2'></span>
										<span className='text-sm sm:text-base md:text-lg text-neutral-700 leading-6 flex-1'>
											{challenge}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
