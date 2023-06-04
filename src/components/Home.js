import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify"

const Home = () => {
  ///////////////////getting two contacts from redux. Which created at contactReducer.js file//////////
  const contacts = useSelector(state => state);
  // console.log(contacts)
  const dispatch = useDispatch();

  const handleDelete = (id) =>{
    console.log(id)
    dispatch({type: "DELETE_CONTACT", payload: id});
    toast.success("Contact deleted successfully!");
    
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-end">
            <Link to="/add" className='btn btn-outline-dark'>Add Contact</Link>
        </div>
        <div className="col-md-10 mx-auto">
            <table className="table table-hover">
              <thead className="text-white text-center table-dark">
                <tr>
                  <th className='py-3' scope='col'>Id</th>
                  <th className='py-3' scope='col'>Name</th>
                  <th className='py-3' scope='col'>Email</th>
                  <th className='py-3' scope='col'>Number</th>
                  <th className='py-3' scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  contacts.map((contact) => (
                      <tr key={contact.id} className='text-center'>
                        <td>{contact.id}</td>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.number}</td>
                        <td>
                          <Link to={`edit/${contact.id}`} className='btn btn-small btn-primary'>
                            Edit
                          </Link>
                          <Link onClick={() => handleDelete(contact.id)} type='button' className='btn btn-small btn-danger ms-2'>
                            Delete
                          </Link>
                        </td>
                      </tr>
                  
                  ))
                }
              </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default Home