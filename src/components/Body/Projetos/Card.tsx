interface CardProps {
    title: string;
}

export default function Card(props: CardProps) {
    return (
        <div 
            className={`
                flex flex-col items-center
                w-[300px] h-[300px] shadow-all-sides
                rounded-xl
            `}
        >
            <h1 
                className={`
                    text-xl font-semibold
                    mt-5
                `}
            >
                {props.title}
            </h1>
        </div>
    )
}