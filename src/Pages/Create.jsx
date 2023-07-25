import React, { useContext, useState } from 'react';
import {FirebaseContext ,AuthContext} from '../Store/FirebaseContext';
import {useNavigate} from "react-router-dom"

const Create = () => {
  const {firebase} =useContext(FirebaseContext)
  const {user} =useContext(AuthContext);
  const [pName,setPname]=useState('')
  const [category,setCategory]=useState('')
  const [price,setPrice]=useState('')
  const [location,setLocation]=useState('')
  const [image,setImage]=useState(null);
  const [msg,setMsg] = useState('');
  const [isloading,setLoading] = useState(false);
  const navigate = useNavigate()
  const date = new Date()
  const handleSubmite = async()=>{
    setLoading(true)
    try{
      if (!image && !pName && !price && !location && !category) {
        setMsg("Pls Fill This Properly")
        setTimeout(() => {
          setMsg('')
        }, 1000);
        console.error("Please select an image.");
        return;
      }
       await firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
          ref.getDownloadURL().then((url)=>{
            firebase.firestore().collection('products').add({
              name:pName,
              category,
              price,
              location,
              url,
              userId:user.uid,
              createdAt:date.toDateString()
            })
            navigate('/')
          })
        })
    }catch(error){
     console.log(error)
    }finally{
      setLoading(false)
    }
    
  }
  return (
    <div>
      <div class="flex justify-center items-center my-7">
        <div className="border p-5 rounded flex flex-col items-center gap-4 shadow-lg">
            <img src={require('../Assets/logo.png')} alt="Login" className="w-20 object-cover"/>
            <span className='font-bold text-green-500'>{msg}</span>
            <div className="flex flex-col gap-4 text-sm px-10">
                <input required name='pName' id='' value={pName} onChange={(e)=>setPname(e.target.value)} type="text" placeholder="Prouct name"  className="border focus:outline-none p-2 rounded"/>
                <input required name='category' id='' value={category} onChange={(e)=>setCategory(e.target.value)} type="text" placeholder="Category"  className="border focus:outline-none p-2 rounded"/>
                <input required name='price' id='' value={price} onChange={(e)=>setPrice(e.target.value)} type="text" placeholder="Price"  className="border focus:outline-none p-2 rounded"/>
                <input required name='location' id='' value={location} onChange={(e)=>setLocation(e.target.value)} type="text" placeholder="Location"  className="border focus:outline-none p-2 rounded"/>
                <img alt="Preview" width="200px" height="100px" src={image? URL.createObjectURL(image):''}></img>
                <input required onChange={(e)=>{
                    setImage(e.target.files[0])
                }} type="file" name='image' className="border focus:outline-none p-2 rounded"/>
                <div className='flex items-center justify-center mb-6 '>
                  <button onClick={handleSubmite} style={{background:"#002f34"}} className="hover:bg-blue-600 text-white py-2 px-3 w-full text-sm rounded">
                    {isloading?"Loarding":"Submite"}
                  </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Create