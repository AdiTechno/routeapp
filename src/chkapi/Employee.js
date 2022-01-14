import React,{useEffect,useState} from 'react'

export default function Employee() {
    const [emp,setEmp]=useState([]);
    useEffect(()=>{
        fetch("https://dummy.restapiexample.com/api/v1/employees").then((data)=>{
           data.json().then(result=>{
               console.warn("result",result)
               setEmp(result.data)
           })
        })
    },[])
    return (
        <div>
             <table className='table'>
                   <thead>
                   <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Salary</td>
                        <td>Age</td>
                    </tr>
                   </thead> 
                        {emp.map((item,index)=>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.employee_name}</td>
                            <td>{item.employee_salary}</td>
                            <td>{item.employee_age}</td>
                        </tr>
                        )}
                   <tbody>
                  
                 </tbody>
                </table>
        </div>
    )
}