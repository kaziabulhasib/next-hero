import { getPosts } from "@/services/postApi";
import Link from "next/link";
import React from "react";

const Postspage = async () => {
  const postData = await getPosts();
  //   console.log(postData);
  return (
    <div className='min-h-screen'>
      PostPa PostsPage : {postData.length}
      <div className='grid grid-cols-4 gap-6'>
        {postData?.slice(0, 20).map((d) => (
          <div className='p-2 border' key={d.id}>
            <h1>{d.id}</h1>
            <h4>title: {d.title}</h4>
            <h4>description: {d.body}</h4>
            <Link
              className='px-4 py-2 bg-red-500 text-white mt-6'
              href={`/posts/${d.id}`}>
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Postspage;
