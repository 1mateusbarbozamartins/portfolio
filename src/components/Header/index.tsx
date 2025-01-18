import Menu from "./Menu";
import Titulo from "./Titulo";

export default function Header() {
    return (
        <div className={`
            flex
            items-center
            justify-evenly
            h-20
        `}>
            <Titulo />
            <Menu />
        </div>
    )
}