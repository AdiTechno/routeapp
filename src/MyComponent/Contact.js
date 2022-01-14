import React,{useEffect,useState} from 'react'

function Contact(props) {
    const[val,setVal]= useState("Ajay")
    function test(e){
        
           console.warn("testing Function", e.target.value)
           setVal(e.target.value)
    }
    
    const[age,setAge]=useState(26)
    useEffect(()=>{
        console.warn("Hello",props.name)
    },[])
    let data="My Name Is Anthony"
    return (
        <div>
            <h2>Contact Us Component</h2>
            <h3>{data}</h3>
            <h2>{props.name}</h2>
            <h2>{age}</h2>
            <input type="text" value={val} onChange={test}/>
             <button onClick={()=>alert(val)}>Update Name</button>
            <button onClick={()=>setAge(56)}>Update Age</button>
        </div>
    )
}

export default Contact
