"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { educationData } from "@/lib/data";
import Education from "./education";
import { useSectionInView } from "@/lib/hooks";

export default function Educations() {
    const { ref } = useSectionInView("Education", 0.5);

    return (
        <section ref={ref} id="education" className="scroll-mt-28 mb-28">
            <SectionHeading>Education</SectionHeading>
            <div>
                {educationData.map((education, index) => (
                    <React.Fragment key={index}>
                        <Education {...education} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}