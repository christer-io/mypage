import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
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
      <div className="flex justify-between items-center text-white bg-green-900 border-y border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">
            <span className="decoration-4 ">How can the concept of
            </span>{" "} 
            Open change the world?</h1>
            <h2>
             I belive that open is a mindset, a philosofy and metodology that has the power to change the world.
            </h2>
        </div>
        <div>
          <img className="hidden md:inline-flex lg:h-full"
          src="https://oer.dev/wp-content/uploads/2022/04/oie_OnoSIK09KZ6b.png" alt="" />
        </div>
      </div>
      
      {/* posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="border rounded-lg group cursor-pointer overflow-hidden">
              <img className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(post.mainImage).url()!} alt={post.title} />
              <div className="flex justify-between p-5 bg-white">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs">
                    {post.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
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
