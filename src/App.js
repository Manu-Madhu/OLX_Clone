import React,{useEffect,useContext} from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Create from './Pages/Create';
import Footer from './Components/Footer';
import {AuthContext, FirebaseContext } from './Store/FirebaseContext'
import './App.css';

function App() {
  const {setUser}=useContext(AuthContext);
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
           setUser(user);
    })
  })
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
