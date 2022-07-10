import React, { useEffect, useState } from 'react';
import Spinner from '../Components/spinner/Spinner';
import { UserCards } from '../Components/Users/UserCards';
import UsersSearch from '../Components/Users/UsersSearch';
import { useActions } from '../hooks/useActions';
import { useSearch } from '../hooks/useSearch';
import { useTypedSelector } from '../hooks/useTypedSelectors';


const Users = () => {
  const [showUserForm, setShowUserForm] = useState(false);
  // const [users, setUsers] = useState<IUser[]>([]);
  const [search, setSearch] = useState('');
  
  const {users} = useTypedSelector(state => state.users);
  const searchedUser = useSearch(users, search);
  const {getUsers} = useActions();

  useEffect(() => {
    getUsers();
  }, []);

  // const deleteUser = (id?: number) => {
  //   const isDelete = window.confirm('Really delete this user?');
  //   if (isDelete) {
  //     http.delete(`users/${id}`).then((res) => {
  //       setUsers(users.filter((user) => user.id !== id));
  //       console.log(res);
  //     }).catch((err) => console.log(err));
  //   }
  // };

  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-5">Users:</h1>
        <UsersSearch setSearch={setSearch} />
        <button
          type="button"
          className="btn btn-outline-secondary mb-5"
          onClick={() => setShowUserForm(!showUserForm)}
        >
          Add users
        </button>
        {/* {showUserForm && <AddUser users={users} setUsers={setUsers} />} */}
      </div>
      {users.length ? (
        <UserCards users={searchedUser} 
          // deleteUser={deleteUser} 
        />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Users;
