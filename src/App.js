import React,{useState} from 'react'
import './App.css';
import Header from './MyComponent/Header';
import Contact from './MyComponent/Contact';
import Registration from './chkapi/Registration';
import RegistrationEntry from './chkapi/RegistrationEntry';
import Employee from './chkapi/Employee';

function App() {
  const[name,setName]=useState("Akshay")
  return (
    <>


    
    <Header />
    {/* <Employee /> */}
    {/* <RegistrationEntry/> */}
    <Registration />
    {/* <Contact name={name}/> */}
    
    </>
  );
}

export default App;
