import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
export default function Delete() {
    const[data,setData]=useState([])
   useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/users')
   .then((response) => response.json())
   .then((json) => setData(json));},[])
   
  const navigate=useNavigate()
  

  function handleDelete(id){
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE',
      }).then(()=>{alert('Successfully deleted')});
  }
  function handleUpdate(id){
  navigate("/update",{state : {id:id}})
  }
  return (
   
    <div>
        <h1 className="text-center">Update and Delete</h1>
        <Link style={{float:"right"}} className="mb-4 mx-4" to="/"><button>Back to Home</button></Link>
   {
    data.map((lis)=>
    
    <div className="my-4">
        <h4>Name:- {lis.name}</h4>
        <h5>Email:- {lis.email}</h5>
        <h5>Phone:- {lis.phone}</h5>
        <h5>Website:- {lis.website}</h5>
        <button type="button" className="btn btn-danger mx-2" onClick={()=>{handleDelete(lis.id)}} >Delete</button>
        <button type="button" className="btn btn-primary mx-2" onClick={()=>{handleUpdate(lis)}}>Update</button>
    </div>)
}   
    </div>
  )
}
