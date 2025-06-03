import React from "react";
import Particles from "../components/particles";
import { Navigation } from "../components/nav";
import Projects from "../components/projects";

export default function ProjectsPage() {
    return (
        <>
            <Navigation />
            <div className="relative w-full bg-gradient-to-tl from-black via-zinc-600/20">
                {/* Background particles */}
                <Particles
                    className="absolute inset-0 -z-10 animate-fade-in"
                    quantity={800}
                />

                {/* Title */}
               {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
                    Projects
                </h1>*/}

                {/* Project Grid */}
                <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
                    <Projects />
                </div>
            </div>
        </>
    );
}
