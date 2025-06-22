import React, { useEffect, useState } from 'react';
import { useUserStore } from '../../Store/UserStore.js'
import Loader from '../../Components/Loader.jsx';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user, isLoading, fetchUserDetails } = useUserStore();
  const [token] = useState(localStorage.getItem('token_new'));
  console.log("🚀 ~ Profile ~ user:", user)

  useEffect(() => {
    fetchUserDetails({ token: token });
  }, []);

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    )
  };
  return (
    <div className="bg-white">

      {/* Cover and Profile Info */}
      <div className="h-[35vh] border-b border-green-500 w-full bg-white relative shadow-md">
        {/* Cover Image */}
        <img src="./gta.jpg" className="h-40 w-full object-cover" />

        {/* Profile Info */}
        <div className="absolute top-[20%] w-full flex flex-col items-center gap-1">
          {/* Profile Image */}
          <div className="rounded-full border-4 border-white">
            <img src={user.length ? user[0].profileImage : "./boy.png"} className="w-32 h-32 object-cover rounded-full" />
          </div>

          {/* Name */}
          <div className="text-center flex flex-col">
            <span className="text-xl font-semibold">{user.length ? user[0].name : "New User"}</span>
          </div>

          {/* Stats */}
          <div className="flex justify-around w-full px-6 mt-2">
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold text-xl">{user.length ? user[0].posts.length : "0"}</p>
              <span className="text-xs text-slate-500 font-semibold">Posts</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold text-xl">650</p>
              <span className="text-xs text-slate-500 font-semibold">Friends</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold text-xl">650</p>
              <span className="text-xs text-slate-500 font-semibold">Followers</span>
            </div>
          </div>
        </div>
      </div>

      {/* User Posts Grid */}
      <div className="h-[65vh]">
        <div className="grid grid-cols-2 gap-1 p-2">
          {user?.[0]?.posts?.map((item, index) => (
            <Link to={`/single-post-view?postId=${item._id}`} key={index}>
              <div className="h-48 rounded-lg w-full shadow-md overflow-hidden">
                <img src={item.media} alt="post" className="w-full h-full object-cover rounded-lg" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
