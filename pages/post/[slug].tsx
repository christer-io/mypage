import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";
import { GetStaticProps } from "next";
import Header from "../../components/Header";
import PortableText from "react-portable-text"
import { ChildProcess, ChildProcessWithoutNullStreams } from "child_process";
import Head from "next/head";

interface Props {
    post: Post;
}

function Post({ post }: Props) {
    return (
    <main>
        <Head>
            <title>ObiOne</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>

        <Header />

        <img 
        className="w-full h-40 object-cover"
        src={urlFor(post.mainImage).url()!} 
        alt="" />

        <article className="max-w-3xl mx-auto p-5">
            <h1 className="text-3xl mt-10 mb-3">
               {post.title} 
            </h1>
            <h2 className="text-xl font-light text-gray-500">
                {post.description}
            </h2>
            <PortableText 
            className="mt-10"
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={post.body}
            serializers={{
                h1: (props: any) => (
                    <h1 className="text-2xl font-bold my-3" {...props} />
                ),
                h2: (props: any) => (
                    <h2 className="text-xl font-bold my-3" {...props} />
                ),
                normal: (props: any) => (
                    <h1 className="text-l my-4" {...props} />
                ),
                li: ({ children }: any) => (
                    <li className="ml-4 list-disc">{children}</li>
                ),
                link: ({ href, children }: any) => (
                    <a href={href} className="text-blue-500 hover:underline">
                        {children}
                    </a>
                ),
                }
            }
            />
        </article>

        <hr className="max-w-lg my-5 mx-auto border border-black"/>

    </main>
  )
}

export default Post;

export const getStaticPaths = async () => {
    const query = `*[_type == "post"]{
        _id, 
        slug {
            current
        }
    }`
   
    const posts = await sanityClient.fetch(query);

    const paths = posts.map((post: Post ) => ({
        params: {
            slug: post.slug.current
        }

    }));
  
    return {
      paths, 
      fallback: "blocking",
    }
  };

  export const getStaticProps: GetStaticProps = async ({params}) => {
    const query = `*[_type == "post" && slug.current == $slug][0]{
        _id, 
        _createdAt,
        title,
        description,
        mainImage,
        slug,
        body
          }`

          const post = await sanityClient.fetch(query, {
              slug: params?.slug,
          })

          if (!post) {
              return {
                  notFound: true
              }
          }

          return {
              props: {
                  post,
              },
              revalidate: 600,
          };
  };