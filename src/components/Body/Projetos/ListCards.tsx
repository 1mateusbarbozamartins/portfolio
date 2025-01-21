import Card from "./Card";

export default function ListCards() {
    return ( 
        <div className="flex flex-col justify-center items-center">
            <h1 className=" text-2xl font-bold uppercase mt-20">
                Projetos
            </h1>
            <div className={`
                flex justify-center w-[80%] 
                mt-10 mb-20 gap-5 p-10
                overflow-x-auto scroll-hidden
            `}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}