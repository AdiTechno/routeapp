import React,{useEffect,useState} from 'react'
import axios from 'axios';
import RegistrationEntry from './RegistrationEntry'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
export default function Registration() { 
    const [reg,setReg] = useState([]);
    const [opencomp, setOpencomp]= useState(false)
    
    useEffect(()=>{
        axios.get('http://schoolerp.schoolsupdate.co.in/api/StuRegistration/Getallregi').then((resp) => {
                   setReg(resp.data.allstureg) });
         },[])
    console.log(reg)
    const showcomponent=()=>{
            setOpencomp(true);
    }
    const hidecomponent=()=>{
        setOpencomp(false);
}
    console.log(`showcomponent - ${opencomp}`);
    return (
        
        <div>
             
            <div>
             <button style={{color:"blue"}} onClick={showcomponent}>New Registration</button>
            </div>
            <div>
             <button style={{color:"red"}} onClick={hidecomponent}>Hide Registration</button>
            </div>
           <table className='table'>
                   
                   <tr>
                   <td>Entry No</td>
                        <td>Form No</td>
                        <td>Name</td>
                        <td>Fathers Name</td>
                        <td>Mothers Name</td>
                        <td>--</td>
                        <td>--</td>
                    </tr>
                    {reg.map((item,index)=>
                        <tr>
                            <td>{item.entryNo}</td>
                            <td>{item.formNo}</td>
                            <td>{item.sname}</td>
                            <td>{item.fname}</td>
                            <td>{item.mname}</td>
                            <td><EditIcon style={{ fontSize: 35 }}/><span><DeleteIcon style={{ fontSize: 20 }}/></span></td>
                            
                        </tr>
                        )}
                    </table> 
                     
                    {opencomp && <RegistrationEntry form="12" name="abc"/> }  
        </div>  
    )
}