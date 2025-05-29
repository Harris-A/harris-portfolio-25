"use client"

import React, {useState} from "react";
import { MoveRight } from 'lucide-react';

// Extract type definitions
interface ProjectCategory {
    id: string;
    label: string;
}

interface PortfolioCardProps {
    activeCategory: string;
    category: string;
    imageUrl: string;
    title: string;
    buttonText: string;
    buttonHref: string;
}

// Extract constants
const PROJECT_CATEGORIES: ProjectCategory[] = [
    {id: "all", label: "All Projects"},
    {id: "Magento", label: "Magento 2"},
    {id: "React", label: "ReactJS / NextJS"},
    {id: "Frontend", label: "Frontend Development"},
];

// Extract utility function for button styling
const getButtonStyles = (isActive: boolean): string => {
    const baseStyles = "inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8";
    return isActive
        ? `${baseStyles} activeClasses bg-zinc-300 text-black`
        : `${baseStyles} inactiveClasses bg-zinc-300/50 text-zinc-100`;
};

// Extract filter buttons component
const CategoryFilters = ({activeCategory, onCategoryChange}: {
    activeCategory: string,
    onCategoryChange: (category: string) => void
}) => (
    <div className="w-full flex flex-wrap justify-center -mx-4">
        <div className="w-full px-4">
            <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                {PROJECT_CATEGORIES.map((category) => (
                    <li key={category.id} className="mb-1">
                        <button
                            onClick={() => onCategoryChange(category.id)}
                            className={getButtonStyles(activeCategory === category.id)}
                        >
                            {category.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

// Portfolio card component with improved props
const PortfolioCard = ({
                           activeCategory,
                           category,
                           imageUrl,
                           title,
                           buttonText,
                           buttonHref,
                       }: PortfolioCardProps) => {
    const isVisible = activeCategory === "all" || activeCategory === category;

    return (
        <div className={`w-full px-4 md:w-1/2 xl:w-1/3 ${isVisible ? "block" : "hidden"}`}>
            <div className="relative mb-12">
                <div className="overflow-hidden rounded-[10px]">
                    <img src={imageUrl} alt="portfolio" className="w-full"/>
                </div>
                <div
                    className="relative z-10 mx-7rounded-lg py-[34px] px-3 text-center shadow-portfolio">
          <span className="text-primary mb-2 block text-md font-medium text-green-500">
            {category}
          </span>
                    <h3 className="text-zinc-400 mb-5 text-xl font-bold">{title}</h3>
                    <a href={buttonHref} className="hover:border-green-500 text-zinc-400 inline-block rounded-md border border-stroke py-[10px] px-7 text-sm font-medium transition hover:text-zinc-100" target="_blank">
                        {buttonText}
                        <MoveRight className="inline-block w-4 h-4 ml-2" />
                    </a>
                </div>
            </div>
        </div>
    );
};

// Main Projects component
const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    return (
        <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
            <div className="container mx-auto">
                <CategoryFilters
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                />

                <div className="flex flex-wrap -mx-4">
                    <PortfolioCard
                        imageUrl="site-recreation.jpg"
                        category="React"
                        title="Site Recreation"
                        buttonText="View Project"
                        buttonHref="#"
                        activeCategory={activeCategory}
                    />
                    <PortfolioCard
                        imageUrl="bioclarity-m2.jpg"
                        category="Magento"
                        title="Bioclarity Magento 2 Theme"
                        buttonText="View Project"
                        buttonHref="https://www.bioclarity.co.uk/"
                        activeCategory={activeCategory}
                    />
                    <PortfolioCard
                        imageUrl="headless-m2.png"
                        category="Magento"
                        title="Headless Magento 2 Storefront (GraphCommerce)"
                        buttonText="View Project"
                        buttonHref="#"
                        activeCategory={activeCategory}
                    />
                    <PortfolioCard
                        imageUrl="halloween-storefront.jpg"
                        category="Frontend"
                        title="Halloween Storefront"
                        buttonText="View Project"
                        buttonHref="#"
                        activeCategory={activeCategory}
                    />
                    <PortfolioCard
                        imageUrl="fitness.jpg"
                        category="Frontend"
                        title="Fitness Website"
                        buttonText="View Project"
                        buttonHref="#"
                        activeCategory={activeCategory}
                    />
                    <PortfolioCard
                        imageUrl="frontend-dev-1.png"
                        category="Frontend"
                        title="Frontend Development"
                        buttonText="View Project"
                        buttonHref="#"
                        activeCategory={activeCategory}
                    />
                    <PortfolioCard
                        imageUrl="nobisco-m2.jpg"
                        category="Magento"
                        title="Nobisco Magento 2 Theme"
                        buttonText="View Project"
                        buttonHref="https://www.nobisco.co.uk/"
                        activeCategory={activeCategory}
                    />
                    <PortfolioCard
                        imageUrl="TODO-app.jpg"
                        category="React"
                        title="TO-DO App"
                        buttonText="View Project"
                        buttonHref="#"
                        activeCategory={activeCategory}
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;