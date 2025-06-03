"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

interface SmoothScrollProviderProps {
    children: React.ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        let smoother = ScrollSmoother.create({
            wrapper: '#smooth-wrapper',
            content: '#smooth-content',
            smooth: 2,
            smoothTouch: 0.1
        });

        return () => {
            smoother?.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                {children}
            </div>
        </div>
    );
}