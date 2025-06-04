"use client"
import { Navigation } from "../components/nav";
import Particles from "@/app/components/particles";
import React from "react";
import AnimatedTextSwap from "../components/animated-text-swap";
import StackIcon from "tech-stack-icons";
import ProfileCard from '../components/ProfileCard/ProfileCard';
import RotatingText from "@/app/components/TextAnimations/RotatingText/RotatingText";
import ScrollFloat from "@/app/components/TextAnimations/ScrollFloat/ScrollFloat";
import LetterGlitch from "@/app/components/blocks/Backgrounds/LetterGlitch/LetterGlitch";

import Timeline from "@/app/components/timeline";
import {Typography, Button} from "@mui/material";
export default function AboutPage() {
    return (
        <>
            <Navigation />

            <div className="relative w-full bg-gradient-to-tl from-black via-zinc-600/20 to-black">
                <Particles
                    className="absolute inset-0 -z-10 animate-fade-in"
                    quantity={400}
                />

                {/* Container with spacing from navigation */}
                <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-6xl mx-auto">
                        <AnimatedTextSwap>

                            {/* Content that appears after animation */}
                            <div className="space-y-12">
                                {/* Introduction section */}
                                <div className="grid grid-cols-1 sm:flex items-center gap-6 text-center max-w-6xl mx-auto">
                                    <ProfileCard
                                        name="Harris Alam"
                                        title="Front-end Developer"
                                        avatarUrl="avatar.png"
                                        enableTilt={true}
                                        className="flex justify-center"
                                    />
                                    <div className="text-lg text-zinc-300 leading-relaxed">
                                        <div className="my-4 flex items-center justify-center text-zinc-300 text-2xl gap-3 font-extrabold tracking-tight">
                                            Creative
                                            <RotatingText
                                                texts={['coding', 'thinking', 'components!']}
                                                mainClassName="px-2 sm:px-2 md:px-3 bg-purple-500 text-black font-extrabold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                                                staggerFrom={"last"}
                                                initial={{ y: "100%" }}
                                                animate={{ y: 0 }}
                                                exit={{ y: "-120%" }}
                                                staggerDuration={0.025}
                                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                                rotationInterval={2000}
                                            />
                                        </div>
                                        <p>
                                            I'm a passionate front-end developer with a love for creating
                                            beautiful, functional, and user-friendly digital experiences.
                                        </p>
                                        <p className="mt-4">
                                            With expertise in modern front-end web technologies such as React & Next.js, I bring ideas
                                            to life through clean code and thoughtful design.
                                        </p>
                                    </div>
                                </div>


                                {/* Skills and Experience grid */}
                                <h2 className="text-4xl tracking-tighter font-medium text-zinc-100">My Stack</h2>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                                    <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 hover:border-zinc-700 transition-colors">
                                        <h3 className="text-xl font-semibold text-zinc-100 mb-4">Frontend</h3>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <StackIcon name="html5" className="w-8"/><span className="text-zinc-300 text-xs">HTML</span>
                                            <StackIcon name="js" className="w-8"/><span className="text-zinc-300 text-xs">JavaScript</span>
                                            <StackIcon name="reactjs" className="w-8"/><span className="text-zinc-300 text-xs">React</span>
                                            <StackIcon name="nextjs2" className="w-8"/><span className="text-zinc-300 text-xs">NextJS</span>
                                            <StackIcon name="tailwindcss" className="w-8"/><span className="text-zinc-300 text-xs">TailwindCSS</span>
                                            <StackIcon name="bootstrap4" className="w-8"/><span className="text-zinc-300 text-xs">BootStrap</span>
                                            <StackIcon name="css3" className="w-8"/><span className="text-zinc-300 text-xs">CSS</span>
                                            <StackIcon name="less" className="w-8"/><span className="text-zinc-300 text-xs">LESS</span>
                                        </div>
                                    </div>

                                    <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 hover:border-zinc-700 transition-colors">
                                        <h3 className="text-xl font-semibold text-zinc-100 mb-4">Backend & CMS</h3>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <StackIcon name="mysql" className="w-8 h-10"/><span className="text-zinc-300 text-xs">MySQL</span>
                                            <StackIcon name="prisma" className="w-8 h-10"/><span className="text-zinc-300 text-xs">Prisma ORM</span>
                                            <StackIcon name="mariadb" className="w-8 h-10"/><span className="text-zinc-300 text-xs">MariaDB</span>
                                            <StackIcon name="wordpress" className="w-8 h-10"/><span className="text-zinc-300 text-xs">WordPress</span>
                                            <StackIcon name="graphql" className="w-8 h-10"/><span className="text-zinc-300 text-xs">GraphQL</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 max-w-6xl mx-auto">
                                    <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 hover:border-zinc-700 transition-colors">
                                        <h3 className="text-xl font-semibold text-zinc-100 mb-4">Tools & Other</h3>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <StackIcon name="atom" className="w-8"/><span className="text-zinc-300 text-xs">Atom</span>
                                            <StackIcon name="jira" className="w-8 h-10"/><span className="text-zinc-300 text-xs">JIRA</span>
                                            <StackIcon name="github" className="w-8 h-10"/><span className="text-zinc-300 text-xs">GitHub</span>
                                            <StackIcon name="radixui" className="w-8 h-10"/><span className="text-zinc-300 text-xs">RadixUI</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Additional content sections */}
                                <div className="max-w-6xl">
                                    <ScrollFloat
                                        animationDuration={1}
                                        ease='back.inOut(2)'
                                        scrollStart='center bottom+=50%'
                                        scrollEnd='bottom bottom-=40%'
                                        stagger={0.03}
                                        textClassName="text-zinc-100 tracking-tighter"
                                    >
                                        My Experience
                                    </ScrollFloat>
                                </div>

                               { /* Timeline of experience section */ }
                                <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div>
                                        <Timeline />
                                    </div>

                                    {/* Right column - Canvas with LetterGlitch background */}
                                    <div className="relative bg-black rounded-lg overflow-hidden">
                                        {/* LetterGlitch as background for this canvas area */}
                                        <div className="absolute inset-0">
                                            <LetterGlitch
                                                glitchSpeed={50}
                                                centerVignette={false}
                                                outerVignette={false}
                                                smooth={true}
                                                glitchColors={["#2b4539", "#22c55e", "#61b3dc"]}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center items-center bg-zinc-900/50 rounded-lg p-8 border border-zinc-800 hover:border-zinc-700 transition-colors space-y-4">
                                    <h3 className="text-xl font-semibold text-zinc-100 mb-2">Get in touch</h3>
                                    <p className="text-zinc-300 text-lg">
                                        harrisalam3@gmail.com
                                    </p>
                                    <Button
                                        href="/projects"
                                        variant="outlined"
                                        id="projects-btn"
                                        sx={{
                                            borderColor: '#a855f7', // purple-500
                                            color: '#a855f7',
                                            '&:hover': {
                                                borderColor: '#9333ea', // purple-600
                                                backgroundColor: 'rgba(168, 85, 247, 0.1)',
                                            },
                                            fontWeight: 600,
                                            textTransform: 'none',
                                            padding: '8px 24px',
                                        }}
                                    >
                                        View my Projects
                                    </Button>
                                </div>

                            </div>
                        </AnimatedTextSwap>
                    </div>
                </div>
            </div>
        </>
    );
}