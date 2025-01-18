import ItemMenu from "./ItenMenu";

export default function Titulo() {
    return (
        <div>
            <ul>
                <ItemMenu 
                    name="MM."
                    link="/"
                    className="text-3xl font-bold text-[#2978B5]"
                />
            </ul>
        </div>
    )
}