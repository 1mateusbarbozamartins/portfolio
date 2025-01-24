import { IconGitHub, IconLink } from "@/components/icons";
import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
    listTechStack: string[];
    linkGitHub: string;
    linkVercel: string;
}

export default function Card(props: CardProps) {

    function renderTechStack() {
        return props.listTechStack.map((techStack, index) => (
            <li key={index}>
                {techStack}
            </li>  
        ))
    }

    return (
        <div 
            className={`
                flex flex-col items-center
                w-[300px] h-[300px] shadow-all-sides
                rounded-xl hover:scale-110
            `} 
        >
            <h1 className={` text-xl font-semibold mt-5 `}>
                {props.title}
            </h1>

            <p className={` text-justify text-md pr-10 pt-10 pl-10 `}>
                {props.description}
            </p>

            <ul className="flex gap-2 mt-10 text-sm">
                {renderTechStack()}
            </ul>

            <ul className="flex mt-5 gap-5">
                <li className="relative group cursor-pointer">
                    <Link href={`${props.linkGitHub}`}>
                        <a 
                            className="text-black group-hover:text-[#2978B5] transition-colors duration-300"
                        >
                            <IconGitHub className="fill-current" />
                        </a>
                        <span
                            className={`
                                absolute left-0 bottom-[-8px] w-0 h-[4px]
                                bg-[#2978B5] 
                                transition-all duration-300 group-hover:w-full
                            `}
                        ></span>
                    </Link>
                </li>

                <li className="relative group cursor-pointer">
                    <Link href={`${props.linkVercel}`}>
                        <a 
                            className=" group-hover:text-[#2978B5] transition-colors duration-300"
                        >
                            <IconLink className="fill-current" />
                        </a>
                        <span
                            className={`
                                absolute left-0 bottom-[-8px] w-0 h-[4px]
                                bg-[#2978B5] 
                                transition-all duration-300 group-hover:w-full
                            `}
                        ></span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}