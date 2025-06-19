'use client';

import { motion } from 'motion/react';
import TablerBrandRedux from '@/assets/icons/TablerBrandRedux';
import NoniconsReact16 from '@/assets/icons/NoniconsReact16';
import PhFileJsBold from '@/assets/icons/PhFileJsBold'; // Used as fallback
import TeenyiconsTailwindSolid from '@/assets/icons/TeenyiconsTailwindSolid';
import NoniconsNode16 from '@/assets/icons/NoniconsNode16';
import SimpleIconsExpress from '@/assets/icons/SimpleIconsExpress';
import TablerBrandNextjs from '@/assets/icons/TablerBrandNextjs';
import SimpleIconsMongodb from '@/assets/icons/SimpleIconsMongodb';
import UiwLinux from '@/assets/icons/UiwLinux';
import LogosJwtIcon from '@/assets/icons/LogosJwtIcon';
import MingcuteVscodeFill from '@/assets/icons/MingcuteVscodeFill';
import DeviconPlainWebstorm from '@/assets/icons/DeviconPlainWebstorm';
import DeviconPlainPostman from '@/assets/icons/DeviconPlainPostman';
import TeenyiconsGitSolid from '@/assets/icons/TeenyiconsGitSolid';
import HugeiconsGithub from '@/assets/icons/HugeiconsGithub';
import SimpleIconsMysql from '@/assets/icons/SimpleIconsMysql';
import SimpleIconsPostgresql from '@/assets/icons/SimpleIconsPostgresql';
import SimpleIconsFirebase from '@/assets/icons/SimpleIconsFirebase';
import SimpleIconsTypescript from '@/assets/icons/SimpleIconsTypescript';
import SimpleIconsJava from '@/assets/icons/SimpleIconsJava';
import SimpleIconsPython from '@/assets/icons/SimpleIconsPython';
import SimpleIconsC from '@/assets/icons/SimpleIconsC';
import SimpleIconsScikitlearn from '@/assets/icons/SimpleIconsScikitlearn';
import SimpleIconsTensorflow from '@/assets/icons/SimpleIconsTensorflow';
import SimpleIconsEthereum from '@/assets/icons/SimpleIconsEthereum';
import SimpleIconsSolidity from '@/assets/icons/SimpleIconsSolidity';
import SimpleIconsGraphql from '@/assets/icons/SimpleIconsGraphql';

interface Skill {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    name: string;
}

interface Categories {
    [key: string]: Skill[];
}

const Skills: React.FC = () => {
    const categories: Categories = {
        language: [
            { icon: PhFileJsBold, name: 'JavaScript' },
            { icon: SimpleIconsTypescript, name: 'TypeScript' },
            { icon: SimpleIconsPython, name: 'Python' },
            { icon: SimpleIconsC, name: 'C / C++' },
            { icon: SimpleIconsJava, name: 'Java' },
            { icon: PhFileJsBold, name: 'SQL' },
        ],
        frontend: [
            { icon: NoniconsReact16, name: 'React.js' },
            { icon: TablerBrandNextjs, name: 'Next.js' },
            { icon: TablerBrandRedux, name: 'Redux' },
            { icon: TeenyiconsTailwindSolid, name: 'Tailwind CSS' },
            { icon: PhFileJsBold, name: 'Material UI' },
        ],
        backend: [
            { icon: NoniconsNode16, name: 'Node.js' },
            { icon: SimpleIconsExpress, name: 'Express.js' },
            { icon: PhFileJsBold, name: 'Flask' },
            { icon: LogosJwtIcon, name: 'Authentication (JWT)' },
            { icon: PhFileJsBold, name: 'REST APIs' },
            { icon: SimpleIconsGraphql, name: 'GraphQL' },
        ],
        database: [
            { icon: SimpleIconsMysql, name: 'MySQL' },
            { icon: SimpleIconsPostgresql, name: 'PostgreSQL' },
            { icon: SimpleIconsMongodb, name: 'MongoDB' },
            { icon: SimpleIconsFirebase, name: 'Firebase' },
        ],
        data_ml: [
            { icon: PhFileJsBold, name: 'NumPy' },
            { icon: PhFileJsBold, name: 'Pandas' },
            { icon: SimpleIconsScikitlearn, name: 'Scikit-learn' },
            { icon: SimpleIconsTensorflow, name: 'TensorFlow' },
            { icon: PhFileJsBold, name: 'Data Visualization' },
            { icon: PhFileJsBold, name: 'Statistical Analysis' },
        ],
        blockchain: [
            { icon: SimpleIconsEthereum, name: 'Ethereum' },
            { icon: SimpleIconsSolidity, name: 'Solidity' },
            { icon: PhFileJsBold, name: 'Hardhat' },
            { icon: PhFileJsBold, name: 'Ethers.js' },
            { icon: PhFileJsBold, name: 'Smart Contracts' },
            { icon: PhFileJsBold, name: 'Web3 Integration' },
        ],
        tools: [
            { icon: MingcuteVscodeFill, name: 'VS Code' },
            { icon: DeviconPlainWebstorm, name: 'Webstorm' },
            { icon: DeviconPlainPostman, name: 'Postman' },
            { icon: TeenyiconsGitSolid, name: 'Git' },
            { icon: HugeiconsGithub, name: 'GitHub' },
        ],
        others: [{ icon: UiwLinux, name: 'Linux' }],
    };

    return (
        <div className="flex flex-col gap-6 p-4">
            {Object.entries(categories).map(([category, skills]) => (
                <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-semibold mb-3 capitalize">{category}</h2>
                    <div className="flex flex-wrap justify-start items-center gap-5">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.1,
                                    ease: 'easeOut',
                                }}
                                viewport={{ once: true }}
                                className="bg-secondary text-secondary-foreground text-2xl py-2 px-3 font-bold flex gap-2 items-center justify-center border border-border rounded-lg hover:bg-secondary/90 hover:shadow-lg"
                            >
                                <skill.icon />
                                {skill.name}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Skills;
