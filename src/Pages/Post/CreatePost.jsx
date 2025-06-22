import React, { useRef, useState } from 'react'
import PageHeader from '../../Components/PageHeader'
import { BsPlusLg, BsPersonCircle, BsFillPinMapFill } from "react-icons/bs";

const CreatePost = () => {

  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file)
    if (file && file.type.startsWith('image/')) {
      setImage(URL.createObjectURL(file));
    };
  };

  return (
    <div>
      <PageHeader title={`Create Post`} />
      <div className='flex flex-col justify-center items-center gap-1 w-full pb-12'>
        <div
          className='p-1 min-h-48 border border-dashed border-green-200 rounded-lg flex justify-center items-center w-full'
          onClick={handleClick}>
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
            onChange={(e) => handleFileChange(e)}
          />
        </div>
        <div className='w-full'>
          <textarea
            className='capitalize border border-green-200 rounded-lg w-full active p-2'
            placeholder="What's on your mind?" />
        </div>
        <div className='select-none cursor-pointer flex justify-start items-center text-lg gap-2 border border-green-200 rounded-lg active p-2 w-full'>
          <BsPersonCircle />
          <span>Tag People</span>
        </div>
        <div className='select-none cursor-pointer flex justify-start items-center text-lg gap-2 border border-green-200 rounded-lg active p-2 w-full'>
          <BsFillPinMapFill />
          <span>Add Location</span>
        </div>
      </div>

      <div className='py-2 flex justify-center items-center gap-2'>
        <button className='p-2 bg-green-500 fixed bottom-0 w-full text-lg text-white font-semibold'>Share</button>
      </div>
    </div>
  )
}

export default CreatePost