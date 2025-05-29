
"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedTextSwapProps {
    onAnimationComplete?: () => void;
    children?: React.ReactNode;
}

export default function AnimatedTextSwap({ onAnimationComplete, children }: AnimatedTextSwapProps) {
    const [phase, setPhase] = useState<'name' | 'about' | 'slideUp'>('name');

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setPhase('about');
        }, 2000);

        const timer2 = setTimeout(() => {
            setPhase('slideUp');
            onAnimationComplete?.();
        }, 4000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [onAnimationComplete]);

    return (
        <div className="w-full flex flex-col items-center">
            {/* Title that slides up and becomes a header */}
            <motion.div
                className="flex items-center justify-center mb-8"
                animate={{
                    marginBottom: phase === 'slideUp' ? '2rem' : '0',
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                    delay: phase === 'slideUp' ? 0.3 : 0
                }}
            >
                <motion.div
                    className="relative flex items-center justify-center"
                    animate={{
                        height: phase === 'slideUp' ? 'auto' : '120px',
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                        delay: phase === 'slideUp' ? 0.3 : 0
                    }}
                >
                    <AnimatePresence mode="wait">
                        {phase === 'name' ? (
                            <motion.h1
                                key="name"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="py-3.5 px-0.5 z-10 text-4xl text-zinc-100 font-display sm:text-6xl md:text-9xl whitespace-nowrap text-center"
                            >
                                HARRIS ALAM
                            </motion.h1>
                        ) : (
                            <motion.h1
                                key="about"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    fontSize: phase === 'slideUp' ? 'clamp(1.5rem, 4vw, 3rem)' : undefined,
                                    lineHeight: phase === 'slideUp' ? '1.2' : undefined,
                                }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{
                                    duration: 0.5,
                                    fontSize: { duration: 0.8, delay: phase === 'slideUp' ? 0.3 : 0 },
                                    lineHeight: { duration: 0.8, delay: phase === 'slideUp' ? 0.3 : 0 }
                                }}
                                className={`py-3.5 px-0.5 z-10 text-zinc-100 font-display whitespace-nowrap text-center transition-all duration-800 ${
                                    phase === 'slideUp'
                                        ? 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
                                        : 'text-4xl sm:text-6xl md:text-9xl'
                                }`}
                            >
                                ABOUT ME
                            </motion.h1>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.div>

            {/* Content area that appears after slide up */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{
                    opacity: phase === 'slideUp' ? 1 : 0,
                    y: phase === 'slideUp' ? 0 : 30
                }}
                transition={{
                    duration: 0.8,
                    delay: phase === 'slideUp' ? 0.8 : 0,
                    ease: "easeOut"
                }}
                className="w-full"
            >
                {children}
            </motion.div>
        </div>
    );
}