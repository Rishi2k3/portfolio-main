import React from 'react';
import Section from '@/components/global/Section';
import ParallaxStack from '@/components/projects/ParallaxStack';
import linux from '@/assets/icons/skill/skill-icons--linux-light.svg';
import projectImage from '@/assets/images/projects/1.png';
import projectImage2 from '@/assets/images/projects/2.png';
import projectImage3 from '@/assets/images/projects/3.png';
import projectImage4 from '@/assets/images/projects/4.png';
import checkImage from '@/assets/images/projects/check.png';
// import projectImage5 from '@/assets/images/projects/5.png';
import { StaticImageData } from 'next/image'; // Correct type for static images

// Define the type for a project
interface Project {
    id: number;
    title: string;
    description: string;
    image: StaticImageData; // Use StaticImageData for imported images
    color: string;
    logo: StaticImageData; // Use StaticImageData for imported logos
    techUsed: string[];
    demoLink: string;
    codeLink: string;
    Github: string;
}

// Array of projects
const projects: Project[] = [
    {
        id: 1,
        title: 'Cipher Flow - Cross Chain Asset',
        description:"Cipher Flow is a cross-chain asset transfer system enabling secure lock-and-mint transactions between two Blockchains. It has an interactive UI with MetaMask connectivity to display live transfer status and proof-of-transfer logs",
        image: projectImage,
        color: 'bg-card',
        logo: linux,
        techUsed: [ 'Solidity', 'Hardhat', 'Ethers.js', 'React.js'],
        demoLink: 'https://drive.google.com/file/d/1YgMzsifBlmgMkxFzQX8oKi8OBgIWuw0P/view',
        codeLink: 'https://cipher-flow-smoky.vercel.app/',
        Github:"",
    },
    {
        id: 2,
        title: 'Premium Payment Prediction System',
        description: 'Machine learning web app using Random Forest, achieving 89%+ accuracy on 79,000+ insurance records to predict premium payment defaults. Deployed a scalable Flask API for real-time predictions.',
        image: projectImage4,
        color: 'bg-card',
        logo: linux,
        techUsed: ['Machine Learning', 'Random Forest', 'Flask', 'Pandas', 'NumPy', 'SMOTE', 'Data Science'],
        demoLink: 'https://drive.google.com/file/d/1RJKVOEVpmULUSJJ6msfTo58P7VipCTA2/view?usp=share_link',
        codeLink: 'https://payment-prediction-app.onrender.com/',
        Github: '',
    },
    {
        id: 3,
        title: 'Zeeflix - Movie website',
        description: " Zeeflix is a platform where you can search details about any movie. It Highlights the use of DOM manipulation, while using the Movie list API."
            ,
        image: projectImage2,
        color: 'bg-card',
        logo: linux,
        techUsed: ['HTML', 'CSS','Javascript','API'],
        demoLink: 'https://github.com/Rishi2k3/movie-app-',
        codeLink: 'https://movie-app-rishi.netlify.app',
        Github:"",
    },
    {
        id: 4,
        title: 'Razorpay - Power your finance',
        description:'It is a fully responsive Razorpay clone using HTML, Tailwind CSS, and JavaScript,Recreated core UI elements, layout, and design to closely mirror the original website.Ensured mobile-first responsiveness for seamless performance across different screen sizes',
        image: projectImage3,
        color: 'bg-card',
        logo: linux,
        techUsed: ['HTML', 'Tailwind CSS', 'Java Script', 'Responsive'],
        demoLink: 'https://github.com/Rishi2k3/razorpay_clone',
        codeLink: 'https://razorpay-rishi.vercel.app',
        Github:"",
    },
    // {
    //     id: 3,
    //     title: 'TalkMates - Connect, Learn, and Grow',
    //     description:
    //         'TalkMates is an online tutor booking platform that connects learners with expert tutors worldwide. It offers personalized learning experiences, flexible scheduling, secure payments, and global networking to help users enhance their skills in various subjects and languages. 🚀',
    //     image: projectImage3,
    //     color: 'bg-card',
    //     logo: linux,
    //     techUsed: ['React js', 'Node Js', 'Mongodb', 'Express js'],
    //     demoLink: 'https://ph-a11.web.app/',
    //     codeLink: '',
    //     Github:"",
    // },
    // {
    //     id: 4,
    //     title: 'EquiSports - Premium Sports Gear Hub',
    //     description:
    //         'EquiSports – A sleek and responsive e-commerce platform for sports enthusiasts to browse, purchase, and manage sports equipment. Features secure authentication, dynamic product management, and an interactive UI with smooth animations. Built with React, Tailwind CSS, Firebase, Node.js, Express.js, and MongoDB. 🚀',
    //     image: projectImage4,
    //     color: 'bg-card',
    //     logo: linux,
    //     techUsed: ['React js', 'Node Js', 'Mongodb', 'Express js'],
    //     demoLink: 'https://ph-assignment-10-79f51.web.app/',
    //     codeLink: '',
    //     Github:"",
    // },
    // {
    //     id: 5,
    //     title: 'Career Craft - Your Personalized Career Guide',
    //     description:
    //         'Career Craft is a comprehensive career counseling platform that provides students and professionals with expert career advice, skill assessments, and personalized career roadmaps. It integrates an AI-driven recommendation system for better decision-making.',
    //     image: projectImage5,
    //     color: 'bg-card',
    //     logo: linux,
    //     techUsed: ['React js', 'Node Js', 'Mongodb', 'Express js'],
    //     demoLink: 'https://ph-assignment9-fiamanillah.netlify.app/',
    //     codeLink: '',
    //     Github:"",
    // },
];

const ProjectSection: React.FC = () => {
    return (
        <div className="relative">
            {/* Main Section */}
            <Section className={'py-10 relative max-mobile-lg:py-6'}>
                <div className="flex flex-col justify-center text-center py-10 w-2/3 mx-auto max-mobile-lg:w-full max-mobile-lg:px-4 z-10">
                    <h1 className="max-mobile-lg:text-2xl">Projects</h1>
                    <p className="max-mobile-lg:text-sm max-mobile-xs:text-xs">
                        Explore a collection of my projects that showcase my skills in web
                        development, problem-solving, and creating user-friendly applications. Each
                        project is built with modern technologies and designed to deliver a seamless
                        user experience.
                    </p>
                </div>

                {/* Parallax Stack */}
                <div>
                    <ParallaxStack projects={projects as Project[]} />
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
        </div>
    );
};

export default ProjectSection;
