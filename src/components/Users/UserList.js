import React from "react";
import { Link } from "react-router-dom";
// import { users } from "./data.json"

function UserList({ match, users }) {
  return (
    <>
      <h2>User List</h2>
      <ul>
        {users.map(({ id, name }) => (
          <li key={id}>
            {name}
            <Link to={`${id}`}>{name}</Link>
            {/* <Link to={`${match.url}/${id}`}>{name}</Link> */}
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserList;