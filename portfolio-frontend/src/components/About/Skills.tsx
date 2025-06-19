'use client';

import { motion } from 'motion/react';

interface Skill {
    name: string;
}

interface Categories {
    [key: string]: Skill[];
}

const Skills: React.FC = () => {
    const categories: Categories = {
        language: [
            { name: 'JavaScript' },
            { name: 'TypeScript' },
            { name: 'Python' },
            { name: 'C' },
            { name: 'C++' },
            { name: 'Java' },
            { name: 'SQL' },
        ],
        frontend: [
            { name: 'React.js' },
            { name: 'Next.js' },
            { name: 'Redux' },
            { name: 'Tailwind CSS' },
            { name: 'Material UI' },
        ],
        backend: [
            { name: 'Node.js' },
            { name: 'Express.js' },
            { name: 'Flask' },
            { name: 'REST APIs' },
            { name: 'GraphQL' },
            { name: 'Authentication' },
            { name: 'Authorization' },
        ],
        database: [
            { name: 'MySQL' },
            { name: 'PostgreSQL' },
            { name: 'MongoDB' },
            { name: 'Firebase' },
        ],
        data_ml: [
            { name: 'NumPy' },
            { name: 'Pandas' },
            { name: 'Scikit-learn' },
            { name: 'TensorFlow' },
            { name: 'Data Visualization' },
            { name: 'Statistical Analysis' },
        ],
        blockchain: [
            { name: 'Ethereum' },
            { name: 'Solidity' },
            { name: 'Hardhat' },
            { name: 'Ethers.js' },
            { name: 'Smart Contracts' },
            { name: 'Web3 Integration' },
        ],
        tools: [
            { name: 'VS Code' },
            { name: 'Webstorm' },
            { name: 'Postman' },
            { name: 'Git' },
            { name: 'GitHub' },
        ],
        others: [{ name: 'Linux' }],
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
                                className="bg-secondary text-secondary-foreground text-xl py-2 px-4 font-semibold border border-border rounded-lg hover:bg-secondary/90 hover:shadow-md"
                            >
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
