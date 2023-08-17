import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Home() {
    const [user,setUser]=useState([])
    useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => setUser(json));},[])
    
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">JSON CRUD APP</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/user">Add new user</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/delete">Update and Delete user</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<h1 className="text-center"  >Users</h1>
{
    user.map((lis)=>
    <div className="my-4">
        <h4>Name:- {lis.name}</h4>
        <h5>Email:- {lis.email}</h5>
        <h5>Phone:- {lis.phone}</h5>
        <h5>Website:- {lis.website}</h5>
    </div>)
}
    </div>
  )
}
