import SectionHeader from './SectionHeader';
import IndustryCard from './IndustryCard';
import { industries } from './types';

export default function WhoWeServeSection() {
	return (
		<section className='relative bg-white section-padding pt-10 xl:pt-14 pb-10 xl:pb-14 overflow-hidden -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 z-20 rounded-t-3xl md:rounded-t-[3rem]'>
			{/* Subtle Background Pattern */}
			<div className='absolute inset-0 opacity-[0.02] rounded-t-3xl md:rounded-t-[3rem]'>
				<div
					className='absolute inset-0'
					style={{
						backgroundImage: `radial-gradient(circle at 2px 2px, #059669 1px, transparent 0)`,
						backgroundSize: '40px 40px',
					}}
				/>
			</div>

			<div className='container mx-auto relative z-10'>
				<SectionHeader />

				{/* Industries Grid */}
				<div className='max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12 md:gap-14 lg:gap-16 mt-8 sm:mt-12 md:mt-16 lg:mt-20'>
					{industries.map((industry, idx) => (
						<IndustryCard key={idx} industry={industry} index={idx} />
					))}
				</div>
			</div>
		</section>
	);
}
