import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const AddContact = () => {

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [number, setNumber] = useState("");


   /////////////////// getting two contacts from redux. Which created at contactReducer.js file//////////
   const contacts = useSelector((state) => state);
   const disPatch = useDispatch();
   const navigate = useNavigate();
   //    console.log(contacts);


   const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !number){
       return toast.warning("Please fill all the information");
    }

    ////////////////// checking name, email, number are already existing or not///////////////////////

    const checkName = contacts.find(contact => contact.name === name && contact);
    const checkEmail = contacts.find(contact => contact.email === email && contact);
    const checkNumber = contacts.find(contact => contact.number === parseInt(number) && contact);
    if(checkName){
        return toast.warning("This name already exists.");
    }
    if(checkEmail){
        return toast.warning("This email already exists.");
    }
    if(checkNumber){
        return toast.warning("This number already exists.");
    }


    // genetating new ID using array.length-1 and getting input value(name, email, number) 

    const data = {
        id: contacts[contacts.length - 1].id + 1,
        name,
        email,
        number
    }
    // console.log(data);
    disPatch({type: "ADD_CONTACT", payload: data});
    
    toast.success("Contact has added succesfully");
    navigate("/");
   }


  return (
    <div className="container">
        <div className="row">
            <div className="col-md-4 py-5">
                <h1 style={{marginLeft: "90px"}} className='display-4'>Add Contacts</h1>
            </div>
            <div className="col-md-6 mx-auto shadow mt-4">
                <form className='form py-2' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            className="form-control mt-4"
                            type="text"
                            placeholder="Full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                       
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control mt-4"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control mt-4"
                            type="number"
                            placeholder="Phone"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="btn btn-outline-dark mt-4"
                            type="submit"
                            value="Add Contact"
                        />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddContact