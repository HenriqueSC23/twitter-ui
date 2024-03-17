import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import { Link } from 'react-router-dom'

interface TweetProps {
    content: string
}

export function Tweet({ content }: TweetProps) {
    return(
        <Link
        to='/status'
        className="py-6 px-5 grid grid-cols-[3rem_1fr] gap-3 border-b border-[#ebeef0] border-solid text-decoration-line: none">
            <img
            src="https://github.com/HenriqueSC23.png"
            alt="Henrique Santos Cesar"
            className="size-12 rounded-full"
            />

            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <strong>Henrique Santos Cesar</strong>
                    <span className="text-sm text-[#89a2b8]">@J0elmaLoira</span>
                </div>
                <p className="leading-5">
                    {content}
                </p>

                <div className="flex items-center gap-12 mt-3">
                    <button
                    className="flex items-center gap-2 bg-transparent border-0 text-sm text-[#89a2b8] hover:text-blue-0"
                    type="button">
                        <ChatCircle className="size-5" />
                        10
                    </button>

                    <button
                    className="flex items-center gap-2 bg-transparent border-0 text-sm text-[#89a2b8] hover:text-blue-0"
                    type="button">
                        <ArrowsClockwise className="size-5" />
                        10
                    </button>

                    <button className="flex items-center gap-2 bg-transparent border-0 text-sm text-[#89a2b8] hover:text-blue-0" type="button">
                        <Heart className="size-5" />
                        10
                    </button>
                </div>
            </div>
        </Link>
    )
}