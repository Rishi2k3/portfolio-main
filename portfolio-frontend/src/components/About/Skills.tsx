'use client';

import { motion } from 'motion/react'; // Keep the motion import as it is
import TablerBrandRedux from '@/assets/icons/TablerBrandRedux';
import NoniconsReact16 from '@/assets/icons/NoniconsReact16';
import PhFileJsBold from '@/assets/icons/PhFileJsBold';
import TeenyiconsTailwindSolid from '@/assets/icons/TeenyiconsTailwindSolid';
import NoniconsNode16 from '@/assets/icons/NoniconsNode16';
import SimpleIconsExpress from '@/assets/icons/SimpleIconsExpress';
import TablerBrandNextjs from '@/assets/icons/TablerBrandNextjs';
import SimpleIconsMongodb from '@/assets/icons/SimpleIconsMongodb';
import SimpleIconsMongoose from '@/assets/icons/SimpleIconsMongoose';
import UiwLinux from '@/assets/icons/UiwLinux';
import LogosJwtIcon from '@/assets/icons/LogosJwtIcon';
import MingcuteVscodeFill from '@/assets/icons/MingcuteVscodeFill';
import DeviconPlainWebstorm from '@/assets/icons/DeviconPlainWebstorm';
import DeviconPlainPostman from '@/assets/icons/DeviconPlainPostman';
import TeenyiconsGitSolid from '@/assets/icons/TeenyiconsGitSolid';
import HugeiconsGithub from '@/assets/icons/HugeiconsGithub';

// Define the type for a skill
interface Skill {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Type for the icon component
    name: string; // Name of the skill
}

// Define the type for the categories object
interface Categories {
    [key: string]: Skill[]; // Each category is a key with an array of Skill objects
}

const Skills: React.FC = () => {
    // Define the categories object with comprehensive skills
    const categories: Categories = {
        programming: [
            { icon: PhFileJsBold, name: 'JavaScript' },
            { icon: PhFileJsBold, name: 'Python' },
            { icon: PhFileJsBold, name: 'C' },
            { icon: PhFileJsBold, name: 'C++' },
            { icon: PhFileJsBold, name: 'Java' },
            { icon: PhFileJsBold, name: 'TypeScript' },
            { icon: PhFileJsBold, name: 'SQL' },
        ],
        frontend: [
            { icon: NoniconsReact16, name: 'React.js' },
            { icon: TablerBrandNextjs, name: 'Next.js' },
            { icon: TeenyiconsTailwindSolid, name: 'Tailwind CSS' },
            { icon: TablerBrandRedux, name: 'Material UI' },
        ],
        backend: [
            { icon: NoniconsNode16, name: 'Node.js' },
            { icon: SimpleIconsExpress, name: 'Express.js' },
            { icon: PhFileJsBold, name: 'Flask' },
            { icon: LogosJwtIcon, name: 'REST APIs' },
            { icon: LogosJwtIcon, name: 'GraphQL' },
        ],
        dataML: [
            { icon: PhFileJsBold, name: 'NumPy' },
            { icon: PhFileJsBold, name: 'Pandas' },
            { icon: PhFileJsBold, name: 'Scikit-learn' },
            { icon: PhFileJsBold, name: 'TensorFlow' },
        ],
        databases: [
            { icon: SimpleIconsMongodb, name: 'MySQL' },
            { icon: SimpleIconsMongodb, name: 'PostgreSQL' },
            { icon: SimpleIconsMongodb, name: 'MongoDB' },
            { icon: SimpleIconsMongodb, name: 'Firebase' },
        ],
        blockchain: [
            { icon: PhFileJsBold, name: 'Ethereum' },
            { icon: PhFileJsBold, name: 'Solidity' },
            { icon: PhFileJsBold, name: 'Hardhat' },
            { icon: PhFileJsBold, name: 'Ethers.js' },
            { icon: PhFileJsBold, name: 'Smart Contracts' },
        ],
        tools: [
            { icon: MingcuteVscodeFill, name: 'VS Code' },
            { icon: DeviconPlainWebstorm, name: 'WebStorm' },
            { icon: DeviconPlainPostman, name: 'Postman' },
            { icon: TeenyiconsGitSolid, name: 'Git' },
            { icon: HugeiconsGithub, name: 'GitHub' },
            { icon: UiwLinux, name: 'Linux' },
        ],
    };

    return (
        <div className="flex flex-col gap-6 p-4 max-mobile-lg:gap-4 max-mobile-lg:p-2">
            {Object.entries(categories).map(([category, skills]) => (
                <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-semibold mb-3 capitalize max-mobile-lg:text-2xl max-mobile-xs:text-xl">
                        {category === 'dataML' ? 'Data & ML' : category}
                    </h2>
                    <div className="flex flex-wrap justify-start items-center gap-5 max-mobile-lg:gap-3 max-mobile-xs:gap-2">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.1, // Cascading effect
                                    ease: 'easeOut',
                                }}
                                viewport={{ once: true }}
                                className="bg-secondary text-secondary-foreground text-2xl py-2 px-3 font-bold flex gap-2 items-center justify-center border border-border rounded-lg hover:bg-secondary/90 hover:shadow-lg max-mobile-lg:text-lg max-mobile-lg:py-1.5 max-mobile-lg:px-2 max-mobile-xs:text-sm max-mobile-xs:py-1 max-mobile-xs:px-1.5"
                            >
                                <skill.icon className="max-mobile-lg:w-5 max-mobile-lg:h-5 max-mobile-xs:w-4 max-mobile-xs:h-4" />
                                <span className="max-mobile-xs:hidden">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Skills;
