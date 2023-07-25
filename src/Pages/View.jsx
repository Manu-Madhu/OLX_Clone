import React, { useContext, useEffect, useState } from 'react'
import { PostContext } from '../Store/PostContext';
import { FirebaseContext } from '../Store/FirebaseContext';
// import { Carousel } from "react-responsive-carousel";

const View = () => {
  const [userDetails,setUserDetails] = useState();
  const {postDetails}= useContext(PostContext);
  const {firebase} = useContext(FirebaseContext)

  useEffect(()=>{
    const {userId} = postDetails;
    
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
         res.forEach((doc)=>{
          setUserDetails(doc.data())
         })
    })
    console.log(userDetails)
  },[])
  return (
    <div className="container mx-auto flex w-screen h-screen justify-center gap-3 p-10">
    <div className="">
      <img 
      className='rounded w-[550px] h-[400px] object-cover'
        src={postDetails?.url}
        alt=""
      />
    </div>
    <div className="flex flex-col gap-3 p-10 pt-0">
      <div className="border rounded shadow w-full p-10">
        <p className='font-bold text-lg'>&#x20B9; {postDetails?.price} </p>
        <div className='flex'>
       <span className='font-bold'>Product : </span> <span> {postDetails?.name}</span>
        </div>
        <div className='flex'>
        <span className='font-bold'>Category : </span> <p> {postDetails?.category}</p>
        </div>
        <div className='flex'>
        <span className='font-bold'>Date : </span><span>{postDetails?.createdAt}</span>
        </div>
      </div>
      {userDetails && <div className="border rounded shadow w-full p-10">
        <p>Seller details</p>
        <p>{userDetails?.name}</p>
        <p>{userDetails?.phone}</p>
      </div>}
    </div>
  </div>
  )
}

export default View