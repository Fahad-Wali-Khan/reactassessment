import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function User
() {
    const[data,setData]=useState({"name":"fahad","email":"","phone":"","website":""})
    function handleChange(e)
    {
        setData({...data,[e.target.name]:e.target.value})
    }
    function handleSubmit(e)
    {
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {console.log(json)
alert('user successfully added')});
  
    }
  return (
<div className="align-items-center">
    <h1 className="my-4">New User</h1>
    <Link style={{float:"right"}} className="mb-4 mx-4" to="/"><button>Back to Home</button></Link>
<div className="input-group mb-3">
  <span className="input-group-text" >Name</span>
  <input type="text" className="form-control" name="name" onChange={handleChange} />
</div>
<div className="input-group mb-3">
  <span className="input-group-text" >Email</span>
  <input type="email" className="form-control" name="email" onChange={handleChange}/>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" >Phone</span>
  <input type="text" className="form-control" name="phone" onChange={handleChange}/>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" >Website</span>
  <input type="text" className="form-control" name="website" onChange={handleChange}/>
</div>
<button type="button" className="btn btn-primary" onClick={handleSubmit} >Submit</button>
</div>
  )
}
