import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { initialValue } from '../Components/Users/initialValue';
import { IUser } from '../Components/Users/IUser';
import http from '../http';
import './User.css';


export const User = () => {

  const {id} = useParams();
  console.log(id);

  const [user, setUser] = useState<IUser>(initialValue);

  useEffect(() => {
    getUser(id);
  }, []);

  const getUser = (id?: string) => {
    http.get(`users/${id}`).then((res) => {
      setUser(res.data);
      console.log(res.data);
    }).catch(err => console.log(err));
  }

  // const editUser = (id?: number) => {
  //   http.put(`users/${id}`).then((res) => {
  //     setUsers(users);
  //     console.log(res.data.id);
  //   }).catch(err => console.log(err));
  // }

  return (
    <div>
      <h1>User info:</h1>
      <div className="black row-cols-1 row-cols-md-1 g-4">
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">Username: {user.username}</p>
              <p className="card-text">Address: {user.address?.city} {user.address?.street} {user.address?.suite}</p>
              <p className="card-text">Email: {user.email}</p>
              <p className="card-text">Phone: {user.phone}</p>
              <p className="card-text">Website: {user.website}</p>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-outline-primary mx-2">Edit user</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default User;


