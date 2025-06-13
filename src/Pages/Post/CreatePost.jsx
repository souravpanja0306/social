import React, { useRef, useState } from 'react'
import PageHeader from '../../Components/PageHeader'
import { BsPlusLg } from "react-icons/bs";


const CreatePost = () => {

  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(URL.createObjectURL(file));
    } else {
      setImage(null);
    }
  };
  return (
    <div className='p-1'>
      <PageHeader title={`Create Post`} />

      <div className=''>
        <textarea className='capitalize border border-green-500 rounded-lg w-full p-2 active' placeholder="What's on your mind?" />
      </div>
      <div className='p-1 min-h-48 border border-dashed border-green-500 rounded-lg flex justify-center items-center' onClick={handleClick}>
        {
          image
            ? (
              <img src={image} alt="Preview" className="object-cover w-full h-full rounded-lg" />
            )
            : (
              <div className='flex flex-col justify-center items-center'>
                <BsPlusLg className='text-green-500 text-xl font-semibold' />
                <span className='text-green-500'>Click here to upload...</span>
              </div>
            )
        }

        <input
          type="file"
          ref={fileInputRef}
          className='hidden'
          onChange={handleFileChange}
        />
      </div>
      <div className='py-2 flex justify-center items-center gap-2'>
        <button className='p-2 bg-green-500 rounded-lg'>Submit</button>
        <button className='p-2 bg-red-500 rounded-lg'>Discard</button>
      </div>
    </div>
  )
}

export default CreatePost