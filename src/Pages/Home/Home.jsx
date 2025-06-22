import React, { useEffect, useState } from 'react';
import SingalPost from '../../Components/Post/SinglePost';
import { usePostStore } from '../../Store/PostStore.js'
import SinglePostSkeleton from '../../Components/Post/SinglePostSkeleton.jsx'

const Home = () => {
  const { posts, fetchPosts, isLoading } = usePostStore();

  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div className='flex flex-col gap-1'>
        < SinglePostSkeleton />
        < SinglePostSkeleton />
        < SinglePostSkeleton />
        < SinglePostSkeleton />
      </div>
    );
  };
  return (
    <div className='flex flex-col gap-1'>
      {
        posts.length && posts.map((post, index) => {
          return (
            <SingalPost data={post} key={index} />
          )
        })
      }
    </div>
  )
}

export default Home