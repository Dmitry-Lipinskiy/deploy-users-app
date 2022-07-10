import React, { Dispatch, SetStateAction } from 'react';

const UsersSearch = ({
  setSearch,
}: {
  setSearch: Dispatch<SetStateAction<string>>;
}) => {

  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">
        Search
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Name"
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
  
};

export default UsersSearch;
