import ItemMenu from "./ItenMenu"

export default function Menu() {
    return (
        <div>
            <ul className={`
                flex
                gap-10
                uppercase
                text-[#444444]
                font-bold
            `}>
                <ItemMenu name="Home" />
                <ItemMenu name="Projetos" />
                <ItemMenu name="Certificados" />
                <ItemMenu name="Blog" />
                <ItemMenu name="Contato" />
            </ul>
        </div>
    )
}