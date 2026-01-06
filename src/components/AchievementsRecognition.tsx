/**
 * Achievements and Recognition Component
 * Displays a list of achievements and recognitions.
 */
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

import { SectionHeader } from '@/components/SectionHeader';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { achievementsData } from '@/constants';

export const AchievementsRecognition = () => {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.3 }}
			variants={staggerContainer(0)}
			className="mt-30 scroll-mt-10"
			id="achievements"
		>
			<SectionHeader
				subtitle="Achievements"
				title="Achievements & Recognition"
			/>

			<motion.div
				className="grid gap-6 mt-8 md:grid-cols-2"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				variants={staggerContainer(0.4)}
			>
				{achievementsData.map((ach, i) => (
					<motion.article
						key={i}
						variants={fadeUp}
						className="flex items-start justify-between rounded-2xl border border-neutral-700 p-8 hover:bg-zinc-900 transition-all duration-300 hover:border-primary relative"
					>
						<div>
							<h3 className="text-lg font-medium text-white mb-1">{ach.title}</h3>

							<p className="text-neutral-300 mb-3">{ach.desc}</p>

							<span className="text-sm text-neutral-400 font-medium uppercase tracking-wide">
								{ach.place}
							</span>
						</div>

						<div className="shrink-0">
							<FileText className="h-6 w-6 text-green-400" />
						</div>
					</motion.article>
				))}
			</motion.div>
		</motion.section>
	);
};
