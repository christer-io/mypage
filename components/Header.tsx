import Link from "next/link"


function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
        <Link href="/">
            <h1 className="text-3xl cursor-pointer">ObiOne.io</h1>
            </Link>
            <div className="hidden md:inline-flex items-center space-x-5">
                <h3>About</h3>
                <h3>Contact</h3>
                <h3 className="text-white bg-green-800 px-4 py-1 rounded-full">Projects</h3>
            </div>
        </div>
        
        <div className="flex items-center space-x-5 text-green-800" >
        <h3 className="border px-4 py-1 rounded-full cursor-pointer border-green-600">Open Education</h3>
            <h3 className="border px-4 py-1 rounded-full cursor-pointer border-green-600">Open Source</h3>
        </div>
    
        
    </header>
  )
}

export default Header