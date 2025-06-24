'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import HugeiconsUniversity from '@/assets/icons/HugeiconsUniversity';
import { LucideExternalLink } from '@/assets/icons/LucideExternalLink';

interface WorkExperience {
    id: number;
    company: string;
    position: string;
    duration: string;
    location: string;
    description: string[];
    technologies: string[];
    companyUrl?: string;
    logo?: string;
}

const workExperiences: WorkExperience[] = [
    {
        id: 1,
        company: "NextPhase",
        position: "Software Development Engineer Intern",
        duration: "Mar 2025 - Apr 2025",
        location: "Remote",
        description: [
            "Architected and developed robust backend services using Node.js, implementing RESTful APIs and database integrations",
            "Designed and built cross-platform mobile applications using Flutter, ensuring seamless user experience across iOS and Android",
            "Deployed and managed cloud infrastructure on AWS, including EC2 instances, RDS databases, and S3 storage solutions",
            "Collaborated with cross-functional teams in an agile environment, participating in code reviews and sprint planning",
            "Optimized application performance and implemented best practices for scalability and maintainability"
        ],
        technologies: ["Node.js", "Flutter", "AWS", "JavaScript", "Dart", "REST APIs", "MongoDB", "Git"],
        companyUrl: "https://www.linkedin.com/company/nextphasehq"
    },
    {
        id: 2,
        company: "LessonPal",
        position: "Technical Instructor",
        duration: "Aug 2024 - Present",
        location: "Remote",
        description: [
            "Facilitated 250+ hours of instruction in Programming, Computer Science, and Mathematics to 30+ international students with 95% learning objective completion rate",
            "Authored 15+ customized educational modules accelerating student progress by 40% and improving technical proficiency scores by an average of 35%",
            "Maintained exceptional 4.9/5 rating from 50+ student reviews while delivering personalized learning experiences",
            "Developed comprehensive curriculum covering C++, C, JavaScript, Python, AP Computer Science Principles, Mathematics, SQL, and Object-Oriented Programming",
            "Implemented innovative teaching methodologies and real-world coding projects to enhance practical skills and industry readiness"
        ],
        technologies: ["C++", "C", "JavaScript", "Python", "SQL", "AP CSP", "Mathematics", "OOPS", "Teaching"],
        companyUrl: "https://lessonpal.com/rishi2k3"
    },
    {
        id: 3,
        company: "Miracuves",
        position: "PHP Developer Intern & Frontend Developer Intern",
        duration: "May 2024 - Jun 2024",
        location: "Remote",
        description: [
            "Handled client projects independently, providing customized web solutions and technical consultation for diverse business requirements",
            "Developed dynamic web applications using PHP, implementing database-driven solutions and RESTful APIs for client projects",
            "Built responsive and interactive frontend interfaces using modern web technologies, ensuring cross-browser compatibility and optimal user experience",
            "Managed end-to-end project delivery, from requirement analysis to deployment, while maintaining direct client communication",
            "Delivered tailored solutions that improved client business processes and enhanced their digital presence"
        ],
        technologies: ["PHP", "HTML5", "CSS3", "JavaScript", "MySQL", "REST APIs", "Git", "Client Management"],
        companyUrl: "https://www.linkedin.com/company/miracuves"
    }
];

export default function WorkExperienceSection() {
    return (
        <section className="py-20 px-4 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Work Experience
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    My professional journey in software development, showcasing the companies I've worked with and the impact I've made.
                </p>
            </motion.div>

            <div className="space-y-8">
                {workExperiences.map((experience, index) => (
                    <motion.div
                        key={experience.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-[linear-gradient(135deg,theme(colors.card)_25%,theme(colors.background)_25%,theme(colors.background)_50%,theme(colors.card)_50%,theme(colors.card)_75%,theme(colors.background)_75%,theme(colors.background)_100%)] bg-[length:32px_32px] border border-border hover:shadow-lg transition-all duration-300 hover:transform hover:translate-y-[-2px]">
                            <CardHeader>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <HugeiconsUniversity className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <CardTitle className="text-xl md:text-2xl font-bold text-foreground mb-2">
                                                {experience.position}
                                            </CardTitle>
                                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-muted-foreground">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-semibold text-foreground">{experience.company}</span>
                                                    {experience.companyUrl && (
                                                        <a 
                                                            href={experience.companyUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-primary hover:text-primary/80 transition-colors"
                                                        >
                                                            <LucideExternalLink className="w-4 h-4" />
                                                        </a>
                                                    )}
                                                </div>
                                                <span className="hidden md:inline">•</span>
                                                <span>{experience.duration}</span>
                                                <span className="hidden md:inline">•</span>
                                                <span>{experience.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            
                            <CardContent className="space-y-6">
                                <div>
                                    <h4 className="font-semibold text-foreground mb-3">Key Responsibilities:</h4>
                                    <ul className="space-y-2">
                                        {experience.description.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                                <span className="text-primary mt-1.5">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {experience.technologies.map((tech) => (
                                            <Badge 
                                                key={tech} 
                                                variant="secondary"
                                                className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center mt-12"
            >
                <p className="text-muted-foreground text-lg">
                    Looking for new opportunities to grow and contribute to innovative projects.
                </p>
                <a 
                    href="#contact" 
                    className="inline-block mt-4 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                    Let's Connect
                </a>
            </motion.div>
        </section>
    );
} 