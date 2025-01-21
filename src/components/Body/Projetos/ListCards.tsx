import Card from "./Card";

export default function ListCards() {
    return ( 
        <div className="flex justify-center">
            <div className={`
                flex justify-center w-[80%] 
                mt-20 mb-20 gap-5 p-10
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