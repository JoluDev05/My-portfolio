/**
 * ProjectCard component
 */

/** 
 * Node modules imports
 */
import { motion } from "motion/react"

/**
 * Custom modules
 */
import { fadeUp } from "@/lib/animations";

/**
 * Types
 */

import type { ProjectType } from "@/types";

export const ProjectCard = ({ 
    imgSrc,
    projectLink,
    tags,
    title,
 }: ProjectType) => {
    return (
        <motion.div
            variants={fadeUp}
            className="relative"
        >
            <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label={`Open project: ${title}`}
            >
                <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>

                <figure className="overflow-hidden rounded-md">
                    <img
                        src={imgSrc}
                        alt={title}
                        className="rounded-md transition duration-500 hover:scale-115 w-full cursor-pointer"
                    />
                </figure>

                <div className="absolute bottom-0 p-2 flex gap-2">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="bg-background hover:bg-primary hover:text-black py-1 px-2 rounded-sm text-sm cursor-pointer transition"
                        >
                            {tag}

                        </span>
                    ))}
                </div>
            </a>
        </motion.div>
    )
 };
