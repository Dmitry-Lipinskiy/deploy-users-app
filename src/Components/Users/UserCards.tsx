import React from 'react';
import './UserCards.css';
import { IUser } from './IUser';
import { Link } from 'react-router-dom';

export const UserCards = ({
  users,
  // deleteUser,
}: {
  users: IUser[];
  // deleteUser: (id?: number) => void;
}) => {

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {users.length &&
        users.map((user) => (
          <div className="col" key={user.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  {/* <Link to={`users/${user.id?.toString()}`}> */}
                  {user.name}
                  {/* </Link> */}
                </h5>
                <p className="card-text">Username: {user.username}</p>
                <p className="card-text">
                  Address: {user.address?.city} {user.address?.street}{' '}
                  {user.address?.suite}
                </p>
                <p className="card-text">Email: {user.email}</p>
                <p className="card-text">Phone: {user.phone}</p>
                <p className="card-text">Website: {user.website}</p>
              </div>
              <div className="card-footer">
                {/* <button type="button" className="btn btn-outline-secondary" onClick={() => getPosts(user.id)}>Posts</button> */}
                <button
                  type="button"
                  className="btn btn-outline-primary mx-2"
                  // onClick={() => editUser(user.id)}
                >
                  <Link className="btn-black" to={`${user.id?.toString()}`}>
                    Show user
                  </Link>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  // onClick={() => deleteUser(user.id)}
                >
                  Delete user
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
  
};

export default UserCards;
