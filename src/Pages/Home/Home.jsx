import React, { useEffect, useState } from 'react';
import SingalPost from '../../Components/SinglePost';
import { usePostStore } from '../../Store/PostStore.js'
import SinglePostSkeleton from '../../Components/SinglePostSkeleton.jsx'

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
            <SingalPost data={post} postId={post._id} key={index} />
          )
        })
      }
    </div>
  )
}

export default Home