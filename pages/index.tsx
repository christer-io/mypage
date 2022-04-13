import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Bannerlow from '../components/Bannerlow';
import Header from '../components/Header';
import Banner from '../components/Banner';
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Header />
      <Banner />
      
      {/* posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="border border-lightgray rounded-lg group cursor-pointer overflow-hidden">
              <img className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(post.mainImage).url()!} alt={post.title} />
              <div className="flex justify-between p-5 bg-white">
                <div>
                  <p className="text-lg font-bold text-darkblue">{post.title}</p>
                  <p className="text-xs">
                    {post.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Bannerlow/>
      <Footer />
    </div>
    
  )
};

export const getServerSideProps = async () => {
  const query = `*[_type == "post" && tag =="blog"]{_id, title, description, mainImage, body, slug}`
 
  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    }
  }
};
