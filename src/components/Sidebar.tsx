import { NavLink } from 'react-router-dom'
import twitterLogo from '../assets/logo-twitter.svg'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Pencil, User} from 'phosphor-react'



export function Sidebar() {
    return(
        <aside className="md:py-6 md:px-3 md:items-center py-6 px-5 flex flex-col gap-8">
        <img src={twitterLogo} className="size-8" alt="Logo" />
        <nav className="flex flex-col gap-5">
          <NavLink to="/" className="flex items-center gap-5 text-xl font-bold active:text-blue-0">
            <House weight='fill' className="size-8" />
            <span className="md:hidden">Home</span>
          </NavLink>
          <a href="" className="flex items-center gap-5 text-xl font-bold">
            <Hash className="size-8" />
            <span className="md:hidden">Explore</span> 
          </a>
          <a href="" className="flex items-center gap-5 text-xl font-bold">
            <Bell className="size-8" />
            <span className="md:hidden">Notifications</span> 
          </a>
          <a href="" className="flex items-center gap-5 text-xl font-bold">
            <Envelope className="size-8" />
            <span className="md:hidden">Messages</span> 
          </a>
          <a href="" className="flex items-center gap-5 text-xl font-bold">
            <BookmarkSimple className="size-8" />
            <span className="md:hidden">Bookmarks</span> 
          </a>
          <a href="" className="flex items-center gap-5 text-xl font-bold">
            <FileText className="size-8" />
            <span className="md:hidden">List</span> 
          </a>
          <a href="" className="flex items-center gap-5 text-xl font-bold">
            <User className="size-8" />
            <span className="md:hidden">Profile</span> 
          </a>
          <a href="" className="flex items-center gap-5 text-xl font-bold">
            <DotsThreeCircle className="size-8" />
            <span className="md:hidden">More</span> 
          </a>
        </nav>
        <button
        className="bg-blue-0 text-white text-xl font-bold rounded-full p-4 flex w-full justify-center  border-0hover:brightness-95"
        type="button">
          <Pencil className='md:block hidden size-8 w-full h-full'/>
          <span className='md:hidden'>Tweet</span>
        </button>
      </aside>
    )
}