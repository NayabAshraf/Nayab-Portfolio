"use client";

import { useRef } from "react";
import { educationData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

type EducationProps = (typeof educationData)[number];

export default function Education({
    degree,
    institution,
    location,
    description,
    date,
}: EducationProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 flex flex-col h-full">
                    <h3 className="text-2xl font-semibold">{degree}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-700 dark:text-white/90">
                        {institution} | {location}
                    </p>
                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                        {description}
                    </p>
                    <div className="mt-4 flex flex-wrap justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-white/80">{date}</span>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}