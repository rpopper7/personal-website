"use client";

import { TypeAnimation} from "react-type-animation";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";

export default function Home() {
    return (
        <main className="min-h-screen flex items-center justify-center">
            <div className="max-w-2xl px-4">
                <p className="text-lg mb-2">{"👋 Hi, I'm"}</p>
                <TypeAnimation
                    sequence={["Rebecca Popper"]}
                    wrapper="h1"
                    cursor={true}
                    className="text-4xl font-bold mb-4 min-w-[350px]"
                />
                <p className="text-lg mb-6">
                    This is my personal website.
                </p>

                <div className="flex gap-4 items-center">
                    <a href="https://linkedin.com/in/rebeccapopper" target="_blank" rel="noopener noreferrer"
                       className="hover:text-blue-600">
                        <FaLinkedin size={24}/>
                    </a>
                    <a href="https://github.com/rpopper7" target="_blank" rel="noopener noreferrer"
                       className="hover:text-gray-600">
                        <FaGithub size={24}/>
                    </a>
                    <a href="/resume.pdf" target="_blank" className="flex items-center gap-2 hover:text-gray-600">
                        <FaFileAlt size={24}/>
                        <span>Resume</span>
                    </a>
                </div>
            </div>
        </main>
    );
}
