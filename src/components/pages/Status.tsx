import { PaperPlaneRight } from "phosphor-react";
import { Header } from "../Header"
import { Separator } from "../Separator"
import { Tweet } from "../Tweet"
import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'

export function Status() {
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
    const [newAnswer, setNewAnswer] = useState('');
    const [answer, setAnswer] = useState([
        'concordo',
        'é isso aí',
        'muito bom'
    ])

    useEffect(() => {
      if (textAreaRef.current) {
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
      }
    }, [newAnswer]);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswer([newAnswer, ...answer])
    setNewAnswer('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
        setAnswer([newAnswer, ...answer])
        setNewAnswer('')
    }
  }

    return(
        <main>
          <Header title="Tweet" />

            <Tweet content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quod eligendi nemo nesciunt iure, maiores corporis sapiente possimus enim est dolorum voluptate nihil saepe. Nesciunt fuga molestias magnam voluptate pariatur." />

            <Separator />

            <form onSubmit={createNewAnswer} className="py-6 px-5 flex items-center gap-2 border-b border-solid border-[#ebeef0]">
                <label htmlFor="tweet" className="flex flex-1 items-center gap-3">
                <img
                src="https://github.com/HenriqueSC23.png"
                alt="Henrique Santos Cesar"
                className="size-12 rounded-full"
                />
                <textarea
                id="tweet"
                placeholder="Tweet your answer"
                className="flex-1 border-0 text-xl font-medium mt-7 resize-none focus:outline-none placeholder:text-[#5b7083]"
                onKeyDown={handleHotkeySubmit}
                value={newAnswer}
                ref={textAreaRef}
                onChange={(e) => {
                    setNewAnswer(e.target.value);}}
                />
                </label>

                <button
                type="submit"
                className="ml-auto bg-blue-0 rounded-full md:p-4 py-3 px-6 text-white text-base font-bold hover:brightness-90">
                    <PaperPlaneRight size={24} className="md:block hidden w-full h-full"/>
                    <span className="md:hidden">Answer</span>
                </button>
            </form>

            {answer.map(answer => {
                return <Tweet key={answer} content={answer}/>
            })}
        </main>
    )
}
