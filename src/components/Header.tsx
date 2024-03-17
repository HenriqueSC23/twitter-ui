import { Sparkle } from 'phosphor-react'

interface HeaderProps {
    title: string
}

export function Header(props: HeaderProps) {
    return(
        <div
        className="py-6 px-5 flex items-center justify-between text-xl font-bold border-b-[1px] ">
            {props.title}
            <Sparkle />
        </div>

    )
}