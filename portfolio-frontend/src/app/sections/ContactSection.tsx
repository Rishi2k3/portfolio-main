import React from 'react';
import ContactForm from '@/components/Contact/ContactForm';
import Section from '@/components/global/Section';
import HugeiconsMailOpen from '@/assets/icons/HugeiconsMailOpen';
import SiPhoneDuotone from '@/assets/icons/SiPhoneDuotone';
import AkarIconsLocation from '@/assets/icons/AkarIconsLocation';
import MingcuteFacebookLine from '@/assets/icons/MingcuteFacebookLine';
import JamLinkedinCircle from '@/assets/icons/JamLinkedinCircle';
import RaphaelGithubalt from '@/assets/icons/RaphaelGithubalt';
import contact from '@/assets/elements/contact.gif';
import Image from 'next/image';

const ContactSection: React.FC = () => {
    return (
        <Section className={'relative z-20 min-h-screen flex items-center max-mobile-lg:min-h-auto max-mobile-lg:py-8'}>
            <div className="text-center py-10 mobile-lg:w-9/12 mx-auto max-mobile-lg:py-6 max-mobile-lg:px-4">
                <h1 className="max-mobile-lg:text-2xl">Contact</h1>
                <p className="max-mobile-lg:text-sm max-mobile-xs:text-xs">
                Whether you have a project in mind, need a consultation, tutoring services, a job opportunity, or simply want to connect, feel free to reach out. Let's create something amazing together!
                </p>
            </div>
            <div className="flex gap-4 max-tablet-lg:flex-col max-mobile-lg:gap-6">
                <div className="basis-1/3 bg-card p-4 border border-border rounded-xl max-mobile-lg:basis-auto max-mobile-lg:p-3">
                    <h1></h1>
                    <Image src={contact} alt="Contact" className="w-[50%] mx-auto max-mobile-lg:w-[40%] max-mobile-sm:w-[60%]" />
                    <div className="flex flex-col gap-3 max-mobile-lg:gap-2">
                        <span className="flex items-center text-primary text-xl gap-2 font-bold max-mobile-lg:text-lg max-mobile-sm:text-base">
                            <HugeiconsMailOpen className="max-mobile-sm:w-5 max-mobile-sm:h-5" />
                            <a
                                href="mailto:rishiagarwal2k3@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="no-underline font-bold hover:text-primary/90 translate-y-1 max-mobile-sm:break-all"
                            >
                                Rishiagarwal2k3@gmail.com
                            </a>
                        </span>
                        <span className="flex items-center text-primary text-xl gap-2 font-bold max-mobile-lg:text-lg max-mobile-sm:text-base">
                            <SiPhoneDuotone className="max-mobile-sm:w-5 max-mobile-sm:h-5" />
                            <a
                                href="https://wa.link/5pouvb"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="no-underline font-bold hover:text-primary/90 translate-y-1"
                            >
                                +918171920999
                            </a>
                        </span>
                        <span className="flex items-center text-primary text-xl gap-2 font-bold max-mobile-lg:text-lg max-mobile-sm:text-base">
                            <AkarIconsLocation className="max-mobile-sm:w-5 max-mobile-sm:h-5" />
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="no-underline font-bold hover:text-primary/90 translate-y-1"
                            >
                                New Delhi, India
                            </a>
                        </span>
                    </div>
                    <div className="flex gap-3 text-4xl mt-4 max-mobile-lg:text-3xl max-mobile-sm:text-2xl max-mobile-lg:justify-center">
                        <a
                            href="https://www.facebook.com/rishi.agarwal.334491/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform"
                            aria-label="Facebook"
                        >
                            <MingcuteFacebookLine />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rishi-agarwal-b57721175/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform"
                            aria-label="LinkedIn"
                        >
                            <JamLinkedinCircle />
                        </a>
                        <a
                            href="https://github.com/Rishi2k3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform"
                            aria-label="GitHub"
                        >
                            <RaphaelGithubalt />
                        </a>
                    </div>
                </div>
                <div className="basis-2/3 max-mobile-lg:basis-auto">
                    <ContactForm />
                </div>
            </div>
        </Section>
    );
};

export default ContactSection;
