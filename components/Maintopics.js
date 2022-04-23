
import Link from 'next/link';
import { sanityClient, urlFor } from "../sanity";

export default function Maintopics() {
  return (
    <div className="items-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 p-2 md:p-6">
        
        <div className=" rounded border border-lightgray cursor-pointer ">
            <Link href="/post/open-source">
            <div>
                <p className="text-lg font-bold text-darkdarkblue pl-3 pt-2">Open Source</p>
                <p className="text-xs text-black pl-3 pr-4">Text lorem ipsm. Text lorem ipsm. Text lorem ipsm.Text lorem ipsm. Text lorem ipsm. Text lorem ipsm.</p>
                <p className=" text-blue text-right pr-3 pt-2 pb-2">&rarr;</p>
            </div>
            </Link>
        </div>
        <div className=" rounded border border-lightgray cursor-pointer ">
            <Link href="/post/open-data">
            <div>
            <p className="text-lg font-bold text-darkdarkblue pl-3 pt-2">Open Data</p>
                <p className="text-xs text-black pl-3 pr-4">Text lorem ipsm. Text lorem ipsm. Text lorem ipsm.Text lorem ipsm. Text lorem ipsm. Text lorem ipsm.</p>
                <p className=" text-blue text-right pr-3 pt-2 pb-2">&rarr;</p>
            </div>
            </Link>
        </div>
        <div className=" rounded border border-lightgray cursor-pointer ">
            <Link href="/post/open-source">
            <div>
            <p className="text-lg font-bold text-darkdarkblue pl-3 pt-2">Open Education</p>
                <p className="text-xs text-black pl-3 pr-4">Text lorem ipsm. Text lorem ipsm. Text lorem ipsm.Text lorem ipsm. Text lorem ipsm. Text lorem ipsm.</p>
                <p className=" text-blue text-right pr-3 pt-2 pb-2">&rarr;</p>
            </div>
            </Link>
        </div>
        <div className=" rounded border border-lightgray cursor-pointer ">
            <Link href="/post/license">
            <div>
            <p className="text-lg font-bold text-darkdarkblue pl-3 pt-2">Open License</p>
                <p className="text-xs text-black pl-3 pr-4">Without the right license, it's not really open source, open data, open education or open at all.</p>
                <p className=" text-blue text-right pr-3 pt-2 pb-2">&rarr;</p>
            </div>
            </Link>
        </div>
        
        
        </div> 
   
  )
}

