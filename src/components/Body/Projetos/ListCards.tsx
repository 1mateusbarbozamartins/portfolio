import { useEffect, useState } from "react";
import { IconArrowLeft, IconArrowRight, IconMarker } from "@/components/icons";
import Card from "./Card";
import ProjectProps from "@/model/Project.model";

export default function ListCards() {
    const [projects, setProjects] = useState<ProjectProps[]>([])
    
    useEffect(() => {
        const projects = [
            {
                title: "Template Admin",
                description: "Uma template administração de conteúdo com Next.js",
            },
            {
                title: "Ecommerce Next.js",
                description: "Um ecommerce com Next.js, Tailwind CSS, e GraphQL",
            }
        ]

        setProjects(projects)
    }, [])

    function renderProjects() {
        return projects.map((project, index) => (
            <li key={index} >
                <Card 
                    title={project.title} 
                />
            </li>
        ))
    }

    return (
        <div
            className={`
                flex flex-col items-center gap-10  
            `}
        >
            <ul 
                className={`
                    flex gap-5
                `}
            >
                {renderProjects()}
            </ul>
            
            <div
                className={`
                    flex gap-2  
                `}
            >
                <p>{IconArrowLeft}</p>
                <p>{projects.length ?? 0}</p>
                <p>{IconArrowRight}</p>
            </div>
        </div>
    )
}