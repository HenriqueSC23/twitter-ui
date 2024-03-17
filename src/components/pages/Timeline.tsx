import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../Header"
import { Separator } from "../Separator"
import { Tweet } from "../Tweet"
import { PaperPlaneRight } from "phosphor-react"

export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweet, setTweet] = useState([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3'
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweet([newTweet, ...tweet])
    setNewTweet('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweet([newTweet, ...tweet])
      setNewTweet('')
    }
  }

    return(
        <main>  
          <Header title="Home" />
          <form onSubmit={createNewTweet} className="py-6 px-5 flex flex-col gap-2">
            <label htmlFor="tweet" className="flex gap-3">
              <img
              src="https://github.com/HenriqueSC23.png"
              alt="Henrique Santos Cesar"
              className="size-12 rounded-full"
              />
              <textarea
              onKeyDown={handleHotkeySubmit}
              onChange={
                (e) =>{
                  setNewTweet(e.target.value)
                }
              }
              value={newTweet}
              id="tweet"
              placeholder="What's happening?"
              className="flex-1 border-0 text-xl font-medium mt-3 resize-none focus:outline-none placeholder:text-[#5b7083]"
              />
            </label>

            <button
            type="submit"
            className="ml-auto bg-blue-0 rounded-full md:p-4 py-3 px-6 text-white text-base font-bold hover:brightness-90">
              <PaperPlaneRight size={24} className="md:block hidden w-full h-full"/>
              <span className="md:hidden">Tweet</span>
            </button>
          </form>

          <Separator />

          {tweet.map(tweet => {
            return <Tweet key={tweet} content={tweet}/>
          })}
        </main>
    )
}