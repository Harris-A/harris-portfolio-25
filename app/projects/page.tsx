import React from "react";
import Particles from "../components/particles";
import { Navigation } from "../components/nav";
import Projects from "../components/projects";

export default function ProjectsPage() {
    return (
        <>
            <Navigation />
            <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black overflow-hidden px-4 sm:px-6 lg:px-8 py-12">
                {/* Background particles */}
                <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={400} />

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
                    Projects
                </h1>

                {/* Project Grid */}
                <div className="max-w-7xl mx-auto">
                    <Projects />
                </div>
            </div>
        </>
    );
}
