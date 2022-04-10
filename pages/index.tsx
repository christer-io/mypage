import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import { sanityClient, urlFor } from "../sanity";
import { Post } from '../typings';

interface Props {
  posts: [Post];
}

export default function Home ({ posts }: Props) {
  console.log(posts);
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>ObiOne</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">
            <span className="underline decoration-black decoration-4 ">ObiOne
            </span>{" "} 
            is Christer Gundersens personal playground</h1>
            <h2>
              My projects and ideas are all skattered out in this sandbox.
            </h2>
        </div>
        <div>
          <img className="hidden md:inline-flex h-32 lg:h-full"
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" alt="" />
        </div>
      </div>
      <div>
        {posts.map((post) => (
          <Link href={`/post/${post.slug}`}>
            <div>
              <img src={urlFor(post.mainImage).url()!} alt="" />
            </div>
          </Link>
        ))}
      </div>
    
    
    </div>
  )
};

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{_id, title, description, mainImage, body, slug}`
 
  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    }
  }
};
