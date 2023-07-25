import React, { useContext } from "react";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { Link,useNavigate } from "react-router-dom";
import { AuthContext, FirebaseContext } from "../Store/FirebaseContext";
import '../App';

const Nav = () => {
  const {user}= useContext(AuthContext);
  const {firebase} =useContext(FirebaseContext);
  const navigate =useNavigate()
  const handleSignOut =()=>{
    firebase.auth().signOut();
    navigate('/login')
  }
  return (
    <div className="bg-white pb-1 shadow z-50 sticky">
      <div className="conatiner mx-auto bg-gray-100 flex lg:justify-between justify-between items-center overflow-x-hidden p-3 lg:px-[100px]">
        <div className="olx">
          <Link to='/'>
          <img src={require("../Assets/logo.png")}  alt="Logo" className="md:w-[60px] w-[60px]" />
          </Link>
        </div>
        <div className="relative">
          <AiOutlineSearch size={25} className="hidden md:block absolute top-2 left-2" />
          <select name="" id="" type="text" className="hidden md:block border-2 px-10 rounded w-full h-10 md:w-[200px] border-gray-600 focus:outline-none">
            <option value="">India</option>
          </select>
        </div>
        <form action="">
          <div className="flex justify-center items-center">
          <div>
            <input type="text" placeholder="Find Car,Mobile Phones and More.."
              className="navInput hidden md:block px-2 border-2 w-full h-10 md:w-[500px] border-gray-500 focus:outline-none text-gray-600 text-sm"
            />
          </div>
          <button type="" className="hidden md:block  SearchIcon p-2">
            <AiOutlineSearch size={25} className="hidden md:block top-1 right-0 text-white" />
          </button>
          </div>
        </form>
        <select name="" id=""
          className="hidden md:block rounded w-[110px] bg-gray-100 focus:outline-none font-bold text-sm p-3 mr-3"
        >
          <option value="">ENGLISH</option>
        </select>
        <div className="font-bold cursor-pointer">
         {user? user.displayName: 'Login'}
        </div>
        <div className="login font-bold cursor-pointer">
          {
            user && <span onClick={handleSignOut}>LogOut</span>
          }
        </div>
        <div className="SellButton cursor-pointer flex font-bold items-center gap-2 p-1 px-2 shadow-xl"> 
        <AiOutlinePlus/>
       {
        user? <Link to='/create'><div className="sell text-sm">SELL</div></Link>: <Link to='/login'><div className="sell text-sm">SELL</div></Link>
       }
        </div>
      </div>
    </div>
  );
};

export default Nav;
