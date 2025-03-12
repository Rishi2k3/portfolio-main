// frontend/src/app/page.tsx
import React from 'react';
import TextParalaxEffect from '@/components/global/TextParalaxEffect';
import HeroSection from './sections/HeroSection';
import LogoSlideSection from './sections/LogoSlideSection';
import ProjectSection from './sections/ProjectSection';
import AboutSection from './sections/AboutSection';
import SkillSection from './sections/SkillSection';
import SectionBackgrpound1 from '@/components/global/SectionBackgrpound1';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';
import LeetCodeSection from './sections/LeetCodeSection';

const Home: React.FC = () => {
    return (<>
        <div id="home">
            <HeroSection/>
        </div>
        <div className="relative">
            <SectionBackgrpound1/>
            <LogoSlideSection/>
            <div id="about">
                <AboutSection/>
            </div>
            <div id="skills">
                <SkillSection/>
            </div>
            <TextParalaxEffect/>
            <div id="projects">
                <ProjectSection/>
            </div>
            <div id="leetcode" className="bg-gray-900 text-white py-10 px-5 w-5/6 mx-auto rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.3)] hover:transform hover:translate-y-[-5px] ">
    <LeetCodeSection/>
</div>
            <div id="contact">
                <ContactSection/>
            </div>
        </div>
        <FooterSection/>
    </>);
};

export default Home;
