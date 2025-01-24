import { useEffect, useState } from "react";
import { IconArrowLeft, IconArrowRight } from "@/components/icons";
import Card from "./Card";
import ProjectProps from "@/model/Project.model";

export default function ListCards() {
    const [projects, setProjects] = useState<ProjectProps[]>([]);

    useEffect(() => {
        const projects = [
            {
                title: "Template Admin",
                description: "Uma template administração de conteúdo com Next.js",
                listTechStack: ["Next.js", "Typescript", "Tailwind", "Vercel"],
                linkGitHub: "https://github.com/1mateusbarbozamartins/quiz-next",
                linkVercel: "https://quiz-next-blond.vercel.app/",
            },
            {
                title: "Quiz",
                description: "Um pequeno jogo de perguntas e respostas",
                listTechStack: ["Next.js", "Typescript", "Tailwind", "Vercel"],
                linkGitHub: "https://github.com/1mateusbarbozamartins/quiz-next",
                linkVercel: "https://quiz-next-blond.vercel.app/",
            },
            {
                title: "Blog Next.js",
                description: "Um blog simples com Next.js, Markdown, e Tailwind CSS",
                listTechStack: ["Next.js", "Typescript", "Tailwind", "Vercel"],
                linkGitHub: "https://github.com/1mateusbarbozamartins/quiz-next",
                linkVercel: "https://quiz-next-blond.vercel.app/",
            },
        ];

        setProjects(projects);
    }, []);

    function renderProjects() {
        return projects.map((project, index) => (
            <li key={index} className="flex-shrink-0">
                <Card 
                    title={project.title} 
                    description={project.description} 
                    listTechStack={project.listTechStack}
                    linkGitHub={project.linkGitHub}
                    linkVercel={project.linkVercel}
                />
            </li>
        ));
    }

    return (
        <div className="flex flex-col items-center gap-2 w-full mb-10">
            <div className="overflow-x-auto w-[80%] p-10 scroll-hidden">
                <ul className="flex gap-5 px-5 space-x-4 flex-shrink-0">
                    {renderProjects()}
                </ul>
            </div>

            <div className="flex gap-2 items-center">
                <button>{IconArrowLeft}</button>
                <p>{projects.length ?? 0}</p>
                <button>{IconArrowRight}</button>
            </div>
        </div>
    );
}
