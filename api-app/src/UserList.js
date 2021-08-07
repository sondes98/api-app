import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import image from './defaut.png'
//import 'bootstrap/dist/css/bootstrap.min.css';


// The REST API endpoint
const API_URL = 'https://jsonplaceholder.typicode.com/users';

const UserList = () => {


  // at the beginning, users is an empty array
  const [users, setUsers] = useState([]);

  // Define the function that fetches the dara from API
  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setUsers(data);
  };


  //trigger the fetchData after the initial render by using the useEffect hook
  useEffect(() => {
    fetchData();
  }, []);

// dispplay user card 
  return (
    <div className="wrapper">
      <h1 className="title">User List</h1>
      {users.length > 0 ? (
        <div className="container">
          {users.map((user) => (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">
            <div className="content">
            <div className="card">
                <div className="card-body text-center">
                  <img src={image} className="defaut"/>
                  <h5 className="card-title">Name : {user.name}</h5>
                  <h5 className="card-title1">Username : {user.username}</h5>
                  <p className="text-secondary mb-1">
                      address : {user.address.street}, 
                      {" "} {user.address.suite}, 
                      {" "} {user.address.city}, 
                      {" "} {user.address.zipcode}
                  </p>
                  <div className="card-footer">
                  <p className="text-muted font-size-sm">E-mail : {user.email}</p>
                  <p className="text-muted font-size-sm">Phone : {user.phone}</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      ) : 
      (
        <div className="lds-hourglass"></div>
      )}
    </div>
  );
};


export default UserList ;


