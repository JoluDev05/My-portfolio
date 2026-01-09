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
import { Button } from "@/components/ui/button";

export const About = () => {
    return (
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer(0)}
                className="mt-30 scroll-mt-10"
                id='about'
            >  
                <SectionHeader 
                subtitle="About"
                title="Transforming complexity into effortless design"
                />

            <motion.p
                variants={fadeUp}
                className="mt-4 text-neutral-300"
            >
                Junior Software Engineer with experience in frontend and mobile development. I have worked on real-world projects using React,
                 React Native, Redux, and AWS within collaborative and professional environments. I focus on writing clean, maintainable code 
                 aimed at solving real problems, combining continuous learning with personal and professional projects.
            </motion.p>

            <motion.p
                variants={fadeUp}
                className="mt-2 text-neutral-300"
            >
                Beyond technical skills, I value clarity, structure, and purpose in every project I work on.
                 I enjoy collaborating with teams, understanding requirements, and 
                 translating ideas into intuitive user experiences. My background
                 has allowed me to work with real production codebases,
                 follow development workflows, and continuously improve 
                 my problem-solving and communication skills.
            </motion.p>

            <motion.div
                variants={fadeUp}
                transition={{delay: 0.2}}
            >
                <Button className="mt-5" asChild>
                    <a href="#contact">Contact me</a>
                </Button>
            </motion.div>

        </motion.section>
    );
};

