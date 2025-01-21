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
            },
            {
                title: "Ecommerce Next.js",
                description: "Um ecommerce com Next.js, Tailwind CSS, e GraphQL",
            },
            {
                title: "Blog Next.js",
                description: "Um blog simples com Next.js, Markdown, e Tailwind CSS",
            },
            {
                title: "Sistema de Login",
                description: "Um sistema de login com Next.js, Tailwind CSS, e Firebase",
            },
            {
                title: "Gerenciador de Projetos",
                description: "Um gerenciador de projetos com Next.js, TypeScript, e Tailwind CSS",
            },
            {
                title: "Gerenciador de Tarefas",
                description: "Um gerenciador de tarefas com Next.js, TypeScript, e Tailwind CSS",
            },
            {
                title: "Gerenciador de Notas",
                description: "Um gerenciador de notas com Next.js, TypeScript, e Tailwind CSS",
            },
        ];

        setProjects(projects);
    }, []);

    function renderProjects() {
        return projects.map((project, index) => (
            <li key={index} className="flex-shrink-0">
                <Card title={project.title} />
            </li>
        ));
    }

    return (
        <div className="flex flex-col items-center gap-10 w-full">
            <div className="overflow-x-auto w-[80%] p-10 scroll-hidden">
                <ul className="flex gap-5 px-5 space-x-4">
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
