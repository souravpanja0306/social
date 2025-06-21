import React, { useEffect, useState } from 'react';
import { useUserStore } from '../../Store/UserStore.js'
import Loader from '../../Components/Loader.jsx';

const Profile = () => {
  const { user, isLoading, fetchUserDetails } = useUserStore();
  const [token] = useState(localStorage.getItem('token_new'));

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
    <div>
      <div>

      </div>
      {user.length ? <div>Welcome, {user[0].name}</div> : <div>Loading...</div>}

      <div className='grid grid-cols-3 gap-1'>
        {
          user.length && user[0].posts.map((item, index) => {
            return (
              <div className='h-48 rounded-lg w-full shadow-lg'>
                <img src={item.media} className='w-full h-full object-cover'/>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Profile;
