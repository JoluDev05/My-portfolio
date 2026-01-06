/**
 * About Component
 */

/**
 * Node Modules imports
 */
import { motion} from "motion/react"

/**
 * Custom modules
 */
import { fadeUp, staggerContainer} from "@/lib/animations";

/**
 * Components
 */
import { SectionHeader } from "@/components/SectionHeader";
import { ExpCard } from "@/components/ExpCard";
import { ToolsCard } from "@/components/ToolsCard";

/**
 * constans
 */
import { education, experience, tools } from "@/constants";

export const Resume = () => {
    return (
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer(0)}
                className="mt-30 scroll-mt-10"
                id='resume'
            >  
                <SectionHeader 
                subtitle="Resume"
                title="Building whit Purpose & Precision"
                />
            <motion.p
                variants={fadeUp}
                className="mt-4 text-neutral-300"
            >
                I am a junior software engineer with hands-on experience in frontend and mobile development,
                 gained through real-world projects and a dual education model. My background 
                 combines academic training with practical industry experience, allowing me to 
                 work with production code, collaborative teams, and modern development workflows.
            </motion.p>

            <div className="grid gap-x-10 my-16 md:grid-cols-2">
                <motion.div
                    variants={fadeUp}
                    className="mb-16 md:mb-0"
                >
                    <h2 className="text-3xl font-semibold mb-8">Education</h2>

                    <div className="space-y-8 border-l border-neutral-700 pl-6">
                        {education.map((item, i) => (
                            <ExpCard
                            key={i}
                            item={item}
                            />
                        ))}
                    </div>
                </motion.div>

                  <motion.div
                    variants={fadeUp}
                >
                    <h2 className="text-3xl font-semibold mb-8">Work Experience</h2>

                    <div className="space-y-8 border-l pl-6">
                        {experience.map((item, i) => (
                            <ExpCard
                            key={i}
                            item={item}
                            />
                        ))}
                    </div>
                </motion.div>
            </div> 
        
            <div className="my-16">
                <motion.h2
                    variants={fadeUp}
                    className="text-3xl font-semibold mb-8 capitalize"
                >
                    My favorite tools:
                </motion.h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer(0.5)}
                    className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-3"
                    >
                        {tools.map((tool, i) => (
                            <ToolsCard 
                                key={i} 
                                tool={tool} 
                            />
                            ))}
                    </motion.div>
            </div>
        </motion.section>
    );
};

