interface ItemMenuProps {
    name: string;
    link?: string;
    className?: string;
}

export default function ItemMenu(props: ItemMenuProps) {
    return (
        <div>
            <li className="relative group cursor-pointer">
                <a 
                    href={props.link} 
                    className={`
                        group-hover:text-[#2978B5]
                        ${props.className}
                    `}
                >{props.name}</a>
                <span
                    className={`
                        absolute left-0 bottom-[-4px] w-0 h-[4px]
                        bg-[#2978B5] 
                        transition-all duration-300 group-hover:w-full
                    `}
                ></span>
            </li>
        </div>
    )
}