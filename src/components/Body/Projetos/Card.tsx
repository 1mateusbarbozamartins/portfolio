import { IconGitHub, IconLink } from "@/components/icons";

export default function Card() {
    return (
        <div className={`
            flex flex-col items-center
            h-[320px] w-[320px] p-10
            shadow-all-sides
            rounded-xl
        `}>
            <h1 className="text-2xl font-bold mt-4 mb-5">
                Template Admin
            </h1>
            <p className="text-center">
                Projeto base de um dashboard administrativo para sistemas em geral.
            </p>
            <ul className="flex gap-2 mt-10 text-sm">
                <li>Next.js</li>
                <li>Typescript</li>
                <li>Tailwind</li>
                <li>Vercel</li>
            </ul>
            <ul className="flex mt-5 gap-5">
                <li className="relative group cursor-pointer">
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
                </li>

                <li className="relative group cursor-pointer">
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
                </li>
            </ul>
        </div>
    )
}