import React, {useState} from "react";
// import { Route } from "react-router-dom";
import UserList from "./UserList";
// import UserDetail from "./UserDetail";

function Users({match}) {
  const [ users ] = useState([
    {
      "id": "1",
      "name": "sally#1"
    },
    {
        "id": "2",
        "name": "tango#2"
    },
    {
        "id": "3",
        "name": "ognatkwak#3"
    }
  ])
  return (
    <>
      <h1>Users</h1>
      <UserList 
        users={users}
      />


      {/* <Route exact path={match.path} component={UserList} />
      <Route path={`${match.path}/:id`} component={UserDetail} /> */}
    </>
  );
}

export default Users;