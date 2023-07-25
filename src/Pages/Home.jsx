import React,{useEffect,useContext, useState} from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FirebaseContext } from "../Store/FirebaseContext";
import { PostContext } from "../Store/PostContext";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const {firebase}=useContext(FirebaseContext);
  const [products,setProducts] = useState([]);
  const {setPostDetails} = useContext(PostContext);

  const navigate = useNavigate()
  useEffect(()=>{
      firebase.firestore().collection('products').get().then((snapshot)=>{
          const allpost = snapshot.docs.map((product)=>{
                 return{
                     ...product.data(),
                     id:product.id
                    }
          })
          setProducts(allpost)
      })
  },[])
  return (
    <>
      <div className="container  mx-auto w-full h-ful p-10 md:px-[100px]">
        <h1 className="mb-5">Fresh recommendation</h1>
        {/* CARD */}
        <div className="flex gap-4">
        {
          products.map((products)=>{
            return(
               <div onClick={()=>{
                setPostDetails(products)
                navigate('/view')
               }} className="relative border border-gray-300 w-64 h-60 p-2 rounded cursor-pointer" key={products.id}>
                <AiOutlineHeart className="absolute top-3 right-4 cursor-pointer bg-white rounded-2xl p-1" size={30}/>
                  <img src={products.url} alt="cardimage" className="object-cover w-full h-32"/>
                  <div className="relative flex flex-col pt-1">
                    <div className="font-bold text-lg">₹ {products.price}</div>
                    <span className="text-gray-600 text-sm">{products.name}</span>
                    <span className="text-gray-400 text-sm text-ellipsis">
                      {products.category}
                    </span>
                    <span className="pt-1 text-gray-400 font-thin text-[10px] text-ellipsis">{products.location}</span>
                    <div className="absolute text-gray-400 font-thin text-[10px] right-0 bottom-0">
                      {products.createdAt}
                    </div>
                  </div>
               </div>
            );
          })
        }
        </div>
      </div>
    </>
  );
};

export default Home;
