import React from 'react'
import { useState } from 'react';
import { useLocation,Link } from 'react-router-dom'
export default function Update() {
    const location=useLocation();
    const user=location.state.id
    const[data,setData]=useState(user)
    function handleChange(e)
    {
        setData({...data,[e.target.name]:e.target.value})
    }
    function handleSubmit(e)
    {
        e.preventDefault();
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
  method: 'PUT',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {console.log(json)
alert('user successfully Updated')});
  
    }
  return (
<div className="align-items-center">
    <h1 className="my-4">Update User</h1>
    <Link style={{float:"right"}} className="mb-4 mx-4" to="/"><button>Back to Home</button></Link>
<div className="input-group mb-3">
  <span className="input-group-text" >Name</span>
  <input type="text" className="form-control" name="name" onChange={handleChange} placeholder={user.name}/>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" >Email</span>
  <input type="email" className="form-control" name="email" onChange={handleChange} placeholder={user.email}/>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" >Phone</span>
  <input type="text" className="form-control" name="phone" onChange={handleChange}placeholder={user.phone}/>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" >Website</span>
  <input type="text" className="form-control" name="website" onChange={handleChange}placeholder={user.website}/>
</div>
<button type="button" className="btn btn-primary" onClick={handleSubmit} >Submit</button>
</div>
  )
}
