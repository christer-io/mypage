
import Link from 'next/link';
import { sanityClient, urlFor } from "../sanity";

export default function Maintopics() {
  return (
    <div className="items-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 p-2 md:p-6">
        
        <div className="bg-blue rounded border border-white cursor-pointer ">
            <Link href="/post/open-source">
            <div>
                <p className="text-lg font-bold text-white pl-3 pt-2">Open Source</p>
                <p className="text-xs text-white pl-3 pr-4">Text lorem ipsm. Text lorem ipsm. Text lorem ipsm.Text lorem ipsm. Text lorem ipsm. Text lorem ipsm.</p>
                <p className=" text-white text-right pr-3 pt-2 pb-2">&rarr;</p>
            </div>
            </Link>
        </div>
        <div className="bg-blue rounded border border-white cursor-pointer ">
            <Link href="/post/open-source">
            <div>
                <p className="text-lg font-bold text-white pl-3 pt-2">Open Standards</p>
                <p className="text-xs text-white pl-3 pr-4">Text lorem ipsm. Text lorem ipsm. Text lorem ipsm.Text lorem ipsm. Text lorem ipsm. Text lorem ipsm.</p>
                <p className=" text-white text-right pr-3 pt-2 pb-2">&rarr;</p>
            </div>
            </Link>
        </div>
        <div className="bg-blue rounded border border-white cursor-pointer ">
            <Link href="/post/open-source">
            <div>
                <p className="text-lg font-bold text-white pl-3 pt-2">Open Education</p>
                <p className="text-xs text-white pl-3 pr-4">Text lorem ipsm. Text lorem ipsm. Text lorem ipsm.Text lorem ipsm. Text lorem ipsm. Text lorem ipsm.</p>
                <p className=" text-white text-right pr-3 pt-2 pb-2">&rarr;</p>
            </div>
            </Link>
        </div>
        <div className="bg-blue rounded border border-white cursor-pointer ">
            <Link href="/post/license">
            <div>
                <p className="text-lg font-bold text-white pl-3 pt-2">Open Licenses</p>
                <p className="text-xs text-white pl-3 pr-4">Without the right license, it's not really open source.</p>
                <p className=" text-white text-right pr-3 pt-2 pb-2">&rarr;</p>
            </div>
            </Link>
        </div>
        
        
        
    </div>
  )
}

