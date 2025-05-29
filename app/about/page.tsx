import { Navigation } from "../components/nav";
import Particles from "@/app/components/particles";
import React from "react";
import AnimatedTextSwap from "../components/animated-text-swap";
import StackIcon from "tech-stack-icons";

export default function AboutPage() {
    return (
        <>
            <Navigation />
            <div className="w-screen min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
                <Particles
                    className="absolute inset-0 -z-10 animate-fade-in"
                    quantity={375}
                />

                {/* Container that starts centered but allows content flow */}
                <div className="min-h-screen flex flex-col">
                    {/* Initially centered content that becomes normal flow */}
                    <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
                        <div className="w-full max-w-6xl">
                            <AnimatedTextSwap>
                                {/* Content that appears after animation */}
                                <div className="space-y-12">
                                    {/* Introduction section */}
                                    <div className="text-center max-w-4xl mx-auto space-y-6">
                                        <p className="text-xl text-zinc-300 leading-relaxed">
                                            I'm a passionate front-end developer with a love for creating
                                            beautiful, functional, and user-friendly digital experiences.
                                        </p>
                                        <p className="text-lg text-zinc-400 leading-relaxed">
                                            With expertise in React, Next.js, and modern web technologies, I bring ideas
                                            to life through clean code and thoughtful design.
                                        </p>
                                    </div>

                                    {/* Skills and Experience grid */}
                                    <h2 className="text-lg text-zinc-100">My Stack</h2>
                                    <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
                                        <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 hover:border-zinc-700 transition-colors">
                                            <h3 className="text-xl font-semibold text-white mb-4">Frontend</h3>
                                            <div className="flex flex-wrap items-center gap-3">
                                                <StackIcon name="html5" className="w-10"/><span className="text-zinc-300 text-xs">HTML</span>
                                                <StackIcon name="js" className="w-10"/><span className="text-zinc-300 text-xs">JavaScript</span>
                                                <StackIcon name="reactjs" className="w-10"/><span className="text-zinc-300 text-xs">React</span>
                                                <StackIcon name="nextjs2" className="w-10"/><span className="text-zinc-300 text-xs">NextJS</span>
                                                <StackIcon name="tailwindcss" className="w-10"/><span className="text-zinc-300 text-xs">TailwindCSS</span>
                                                <StackIcon name="bootstrap4" className="w-10"/><span className="text-zinc-300 text-xs">BootStrap</span>
                                                <StackIcon name="css3" className="w-10"/><span className="text-zinc-300 text-xs">CSS</span>
                                                <StackIcon name="less" className="w-10"/><span className="text-zinc-300 text-xs">LESS</span>
                                            </div>
                                        </div>

                                        <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 hover:border-zinc-700 transition-colors">
                                            <h3 className="text-xl font-semibold text-white mb-4">Backend & CMS</h3>
                                            <div className="flex flex-wrap items-center gap-6">
                                                <StackIcon name="mysql" className="w-10 h-10"/><span className="text-zinc-300 text-xs">MySQL</span>
                                                <StackIcon name="prisma" className="w-10 h-10"/><span className="text-zinc-300 text-xs">Prisma ORM</span>
                                                <StackIcon name="mariadb" className="w-10 h-10"/><span className="text-zinc-300 text-xs">MariaDB</span>
                                                <StackIcon name="wordpress" className="w-10 h-10"/><span className="text-zinc-300 text-xs">WordPress</span>
                                                <StackIcon name="graphql" className="w-10 h-10"/><span className="text-zinc-300 text-xs">GraphQL</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 max-w-5xl mx-auto">
                                        <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 hover:border-zinc-700 transition-colors">
                                            <h3 className="text-xl font-semibold text-white mb-4">Tools & Other</h3>
                                            <div className="flex flex-wrap items-center gap-4">
                                                <StackIcon name="atom" className="w-10"/><span className="text-zinc-300 text-xs">Atom</span>
                                                <StackIcon name="jira" className="w-10 h-10"/><span className="text-zinc-300 text-xs">JIRA</span>
                                                <StackIcon name="github" className="w-10 h-10"/><span className="text-zinc-300 text-xs">GitHub</span>
                                                <StackIcon name="radixui" className="w-10 h-10"/><span className="text-zinc-300 text-xs">RadixUI</span>

                                            </div>
                                        </div>
                                    </div>

                                    {/* Additional content sections */}
                                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                                        {/*<div className="space-y-4">
                                            <h3 className="text-2xl font-semibold text-white">What I Do</h3>
                                            <ul className="space-y-3 text-zinc-300">
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    <span>Build responsive web applications with modern frameworks</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    <span>Design and implement user-friendly interfaces</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    <span>Optimize performance and accessibility</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    <span>Collaborate with teams to deliver quality solutions</span>
                                                </li>
                                            </ul>
                                        </div>*/}

                                       {/* <div className="space-y-4">
                                            <h3 className="text-2xl font-semibold text-white">Let's Connect</h3>
                                            <p className="text-zinc-300 leading-relaxed">
                                                I'm always interested in new opportunities and collaborations.
                                                Whether you have a project in mind or just want to chat about web development,
                                                feel free to reach out.
                                            </p>
                                            <div className="flex gap-4">
                                                <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                                                    Get In Touch
                                                </button>
                                                <button className="px-6 py-3 border border-zinc-600 hover:border-zinc-500 text-zinc-300 hover:text-white rounded-lg transition-colors">
                                                    View Projects
                                                </button>
                                            </div>
                                        </div>*/}
                                    </div>
                                </div>
                            </AnimatedTextSwap>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}