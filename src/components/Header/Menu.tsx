import { useState } from "react"
import { IconSanduiche } from "../icons"
import ItemMenu from "./ItenMenu"

export default function Menu() {
    const [menuAberto, setMenuAberto] = useState(false)

    function renderizarMenu() {
        setMenuAberto(!menuAberto)
    }

    function renderizaListaMenu() {
        return (
            <>
                <ItemMenu name="Home" link="/" />
                <ItemMenu name="Projetos" />
                <ItemMenu name="Certificados" />
                <ItemMenu name="Blog" />
                <ItemMenu name="Contato" />
            </>
        )
    }

    return (
        <div>
             <p 
                className="block md:hidden cursor-pointer"
                onClick={renderizarMenu}
            >
                {IconSanduiche}
            </p>

            {/* Menu Mobile */}
            <div className={`
                fixed top-0 left-0 w-full h-full bg-[#FCFCFC]
                flex flex-col items-center justify-center
                gap-10 text-2xl uppercase
                font-bold
                transition-all duration-300
                ${menuAberto ? "visible opacity-100" : "invisible opacity-0"}
            `}>
                <button 
                    className="absolute top-5 right-5 text-3xl" 
                    onClick={renderizarMenu}
                >
                    ✕ {/* Ícone de fechar */}
                </button>
                <ul className="text-[#444444]">
                    {renderizaListaMenu()}
                </ul>
            </div>

            {/* Menu Desktop */}
            <ul className={`
                hidden
                md:flex
                flex
                gap-10
                uppercase
                text-[#444444]
                font-bold
            `}>
                {renderizaListaMenu()}
            </ul>
        </div>
    )
}