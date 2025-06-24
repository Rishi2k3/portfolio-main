import React from 'react';
import Section from '@/components/global/Section';
import Skills from '@/components/About/Skills';

const SkillSection: React.FC = () => {
    return (
        <Section className={'relative py-10 max-mobile-lg:py-6'}>
            {/* <SectionBackgrpound1 /> */}
            <div className="text-center w-4/6 mx-auto max-tablet-lg:w-full max-mobile-lg:px-4">
                <h1 className="max-mobile-lg:text-2xl">What I Know</h1>
                <p className="max-mobile-lg:text-sm max-mobile-xs:text-xs">
                    I specialize in building modern, scalable, and user-friendly web applications.
                    My expertise spans across frontend and backend development, with a strong focus
                    on technologies like React, Node.js, and MongoDB. I am passionate about solving
                    complex problems and delivering high-quality solutions.
                </p>
            </div>
            <div className="flex max-mobile-lg:flex-col">
                <div className="w-20 my-auto max-mobile-lg:hidden">
                    <h1 className="rotate-[-90deg]">Skills</h1>
                </div>
                <div className="flex-1">
                    <Skills />
                </div>
            </div>

            {/* Gradient Blur Effect */}
            <div className="absolute top-0 inset-0 blur-[120px] -z-10">
                <div
                    style={{
                        clipPath:
                            'polygon(0% 90.5%, 36.75% 77.5%, 73.07% 74.24%, 100% 68.25%, 92.28% 77.5%, 100% 100%, 87.37% 79.84%, 75% 75%, 57.48% 85.62%, 32.25% 58.25%, 32.25% 90.5%)',
                    }}
                    className="sticky top-0 h-[100vh] w-full object-cover -z-10 bg-gradient-to-r from-primary/60 to-destructive/50"
                />
            </div>
        </Section>
    );
};

export default SkillSection;
