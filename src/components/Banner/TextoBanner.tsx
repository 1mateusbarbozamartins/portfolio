export default function TextoBanner() {
    return (
        <div className={`
            flex
            flex-col
            justify-center
            items-center
            font-bold
        `}>
            <h1 className={`
                text-[6vw] lg:text-[3vw]
            `}>
                Olá, sou o
                <span
                    className="pl-2 text-[#2978B5]"
                >
                    Mateus Martins.
                </span>
            </h1>
            <h2 className={`
                mt-10
                text-[4vw] lg:text-[2vw]
            `}>
                Um Programador FullStack.
            </h2>
        </div>
    )
}