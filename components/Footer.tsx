

export default function Footer() {
  return (
    <div className="pt-10">
    <footer className="bg-accent-1  border-t pl-10 border-accent-2  pb-7 " >
      
      <div className="grid grid-cols-4 gap-4 pt-7 pb-7 text-darkgreen">
        <div>
          All text is licensed under CC-BY-SA-4.0. Images are marked seperatly with license.
        </div>
        <div className='grid grid-cols-1 gap-2'>
          <div>This website is open source, developed using Next.js and Sanity.io</div>
          <div>Check out the <span className="text-darkblue"> <a href="https://github.com/christer-io/mypage">GitHub repo</a></span></div>
        </div>
        <div>
        <div className='grid grid-cols-1 gap-1'>
          <div>About me</div>
          <div>My projects</div>
        </div>
        </div>
        <div></div>
        
      </div>
      
    </footer>
    </div>
  )
}