import ListCards from "./ListCards";

export default function Projects() {
    return (
        <div className={`
            flex flex-col items-center gap-2 mt-10
        `}>
            <div>
                <h1 className={`
                    text-2xl text-[#2978B5] font-bold uppercase mt-[30px]  
                `}>
                    Projetos
                </h1>
            </div>

           <ListCards />
        </div>
    )
}