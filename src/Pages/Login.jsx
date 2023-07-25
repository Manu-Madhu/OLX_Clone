import React, { useState,useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import {FirebaseContext} from '../Store/FirebaseContext';

const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const {firebase} = useContext(FirebaseContext);
  const navigate = useNavigate()
  const handleLogin=(e)=>{
  e.preventDefault()
  firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
    navigate('/');
  }).catch((error)=>{
    alert(error.message)
  })
  }
  return (
    <>
      <div class="flex justify-center items-center my-8 ">
        <div className="border p-5 rounded flex flex-col items-center gap-4 shadow-lg">
            <img src={require('../Assets/logo.png')} alt="Login" className="w-20 object-cover"/>
            <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-4 px-10 text-sm">
                <input onChange={(e)=>setEmail(e.target.value)} type="email" id="email" value={email} name='email' placeholder="email"  className="border focus:outline-none p-2 rounded"/>
                <input onChange={(e)=>setPassword(e.target.value)}  type="text" id="password" value={password} name='password' placeholder="Password"  className="border focus:outline-none p-2 rounded"/>
            </div>
            <div className="mt-4 flex items-center justify-center">
               <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3  rounded text-sm" style={{background:"#002f34", }}>
                 Submite
               </button>
            </div>
            </form>
            <div>
                <span className="font-thin text-xs">
                 You not have any account?
                <Link to='/signUp' className="font-bold text-blue-500"> Sign Up</Link>
                </span>
            </div>
        </div>
      </div>
    </>
  );
};

export default Login;
