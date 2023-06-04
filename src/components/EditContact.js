import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const EditContact = () => {
    const {id} = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    /////////////////// getting two contacts from redux. Which created at contactReducer.js file//////////
    const contacts = useSelector(state => state);
    const disPatch = useDispatch();
    const navigate = useNavigate();
    ////////////////// this is the contact which we want to edit////////////////
    const currentContact = contacts.find(contact => contact.id === parseInt(id));




    useEffect(() => {
        if(currentContact){
            setName(currentContact.name)
            setEmail(currentContact.email)
            setNumber(currentContact.number)
        }

    }, [currentContact]);

 
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
            id: parseInt(id),
            name,
            email,
            number
        }
        // console.log(data);
        disPatch({type: "UPDATE_CONTACT", payload: data});
        
        toast.success("Contact has updated succesfully");
        navigate("/");
       }



  return (
    <div class="container">
        <div class="row">
            <div className="col-md-4 py-5">
                <h1 style={{marginLeft: "110px"}} className='display-4'>Edit Contacts {id}</h1>
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
                    <div className="form-group row mt-4 ms-2 py-2">
                        <input
                            className="btn btn-outline-success col-md-3 py-2"
                            type="submit"
                            value="Update Contact"
                            
                        />
                        <Link to="/"
                            type="submit" 
                            className='btn btn-outline-danger col-md-3 ms-4 py-2'>
                            Cancel
                        
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditContact