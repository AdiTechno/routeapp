import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function RegistrationEntry({ form, name }) {
  const [formNo, setFormNo] = useState(form);
  const [sname, setSname] = useState(name);
  const [clas, setClas] = useState("");
  const [gender, setGender] = useState("");
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [contact, setContact] = useState("1234");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");


  function saveReg(e) {
    e.preventDefault();

    const body = {
      formNo: formNo,
      sname: sname,
      fname: fname,
      mname: mname,
      gender: gender,
      className: clas,
      contactNo: contact,
      dob: dob,
      email: email
    };

    const data = Object.keys(body)
      .map((key) => `${key}=${encodeURIComponent(body[key])}`)
      .join('&');
    console.log(data);

    // specify header object
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data,
      url: 'http://schoolerp.schoolsupdate.co.in/api/StuRegistration/Poststureg',
    };
    const response = axios(options)
      .then(res => {
        console.log(res);
        alert(res.statusText);

      })
      .catch(err => console.log(err));
    //console.log(response);
    //alert("yrttd")
    //     //const body={"formNo":"4", "sname":"as"};
    // console.log(`formNo - ${formNo} and contactNo - ${contact}`)
    //     axios.post('http://schoolerp.schoolsupdate.co.in/api/StuRegistration/Poststureg', body)
    //       .then(function (response) {
    //         console.log(response.data);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });


    // axios.post('http://schoolerp.schoolsupdate.co.in/api/StuRegistration/Poststureg',{formNo:"4", sname:"as"})
    //     .then((response) => {
    //         console.log(response.status);
    //         console.log(response.data);
    //         console.log(body)
    //     })
    //     .catch((e) => console.log('something went wrong :(', e));
  }
  return (
    <div className='reg'>
      <div className="Container">
        <div className="Row">
          <h3>Registration Form</h3>

        </div>
        <form>
          <label>
            Form No:
            <input type="text" name="formno" value={formNo} onChange={(e) => { setFormNo(e.target.value) }} />
          </label><br />
          <label>
            Name:
            <input type="text" name="name" value={sname} onChange={(e) => { setSname(e.target.value) }} />
          </label><br />
          <input type="submit" value="Submit" onClick={(e) => saveReg(e)} />
        </form>
      </div>
      <hr /><br />

    </div>
  )
}