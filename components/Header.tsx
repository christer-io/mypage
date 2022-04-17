import Link from "next/link"
import AccountMenu from "./menu"


function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
            <Link href="/">
                <h1 className="text-3xl cursor-pointer font-sans font-bold text-blue">Obi<span className="text-darkblue">One.io</span></h1>
            </Link>
            
        </div>
        
        <div className="hidden md:inline-flex items-center space-x-5 text-white" >
            <h2 className="border px-4 py-1 rounded-full cursor-pointer bg-blue font-sans border-white">Open Education</h2>
            <h2 className="border px-4 py-1 rounded-full cursor-pointer bg-blue font-sans border-white"><a href="/post/open-source">Open Source</a></h2>  
        </div>
        <div>
            <AccountMenu />
        </div>
       
        
    </header>
  )
}

export default Header