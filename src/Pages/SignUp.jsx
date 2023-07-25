import React, { useState,useContext, } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import '../App'
import { FirebaseContext } from '../Store/FirebaseContext';


const SignUp = () => {
  const navigate = useNavigate()
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [number,setNumber] = useState('');
  const [password,setPassword] = useState('');
  const [msg,setMsg] = useState('')
  const {firebase}=useContext(FirebaseContext)
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set isLoading to true when starting the signup process

    try {
      const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
      await result.user.updateProfile({ displayName: name });
      await firebase.firestore().collection('users').add({
        id: result.user.uid,
        name: name,
        phone: number,
      });
      navigate('/');
    } catch (error) {
      setMsg("Please check your Data")
      console.log('Error:', error);
    } finally {
      setIsLoading(false); // Set isLoading to false after the signup process completes (success or error)
    }
  };

  return (
    <>
      <div class="flex justify-center items-center my-7">
        <div className="border p-5 rounded flex flex-col items-center gap-4 shadow-lg">
            <img src={require('../Assets/logo.png')} alt="Login" className="w-20 object-cover"/>
            <span className='font-bold text-green-500'>{msg?msg:''}</span>
            <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 text-sm px-10">
                <input required value={name} onChange={(e)=>setName(e.target.value)} type="text" id='name' name='name' placeholder="Name"  className="border focus:outline-none p-2 rounded"/>
                <input required value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id='email' name='email' placeholder="Email Id"  className="border focus:outline-none p-2 rounded"/>
                <input required value={number} onChange={(e)=>setNumber(e.target.value)}  type="number" id='phoneNumber' name='phoneNumber' placeholder="Phone Nmber"  className="border focus:outline-none p-2 rounded appearance-none"/>
                <input required value={password} onChange={(e)=>setPassword(e.target.value)} type="text" id='password' name='password' placeholder="Password"  className="border focus:outline-none p-2 rounded"/>
            </div>
            <div className='flex items-center justify-center pt-3'>
               <button style={{background:"#002f34"}} className="hover:bg-blue-600 text-white py-2 px-3 text-sm  rounded" disabled={isLoading} >
               {isLoading ? "Loading..." : "Submit"}
               </button>
            </div>
            </form>
            <div>
                <span className="font-thin text-xs">
                 Already have a account?
                <Link to='/login' className="font-bold text-blue-500"> Login</Link>
                </span>
            </div>
        </div>
      </div> 
    </>
  )
}

export default SignUp