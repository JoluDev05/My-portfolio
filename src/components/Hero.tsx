/**
 * Hero component
 */

/** 
 * Node modules imports
 */
import { motion } from "motion/react"

/**
 * Custom modules
 */
import { staggerContainer, fadeUp } from "@/lib/animations";

/**
 * Components
 */
import { Button } from "@/components/ui/button";

/**
 * Assets
 */
import { SparkleIcon } from "lucide-react";


export const Hero = () => {
    return (
        <motion.section
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.3 }}
         variants={staggerContainer(0)}
         className="pt-20"
         id="hero"
        >
        <motion.p
            variants={fadeUp}
            className="flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-32"
            >
            <SparkleIcon size={15}/>
            <span> Introduction</span>
        </motion.p>

        <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold capitalize mt-2 max-w-3xl md:leading-16"
        >
            I'm <span className="text-primary">Jorge Luis Arce </span>
            Frontend Developer.
        </motion.h1>

        <motion.div
            variants={fadeUp}
            className="mt-5 flex gap-2"
        >
            <Button asChild>
                <a href="#projects">
                    My Projects
                </a>
            </Button>

            <Button variant='outline' asChild>
                <a href={encodeURI('/CV- Jorge Luis Arce Huerta.pdf')} download>
                    Download CV
                </a>
            </Button>
            
        </motion.div>

        </motion.section>
    );
};  