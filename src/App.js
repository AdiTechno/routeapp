import React,{useState} from 'react'
import './App.css';
import Header from './MyComponent/Header';
import Contact from './MyComponent/Contact';
import Registration from './chkapi/Registration';
import Newreg from './chkapi/Newreg';
import RegistrationEntry from './chkapi/RegistrationEntry';
import Employee from './chkapi/Employee';

function App() {
  const[name,setName]=useState("Akshay")
  return (
    <>


    
    <Header />
    {/* <Employee /> */}
    {/* <RegistrationEntry/> */}
    {/* <Registration /> */}
    <Newreg/>
    {/* <Contact name={name}/> */}
    
    </>
  );
}

export default App;
