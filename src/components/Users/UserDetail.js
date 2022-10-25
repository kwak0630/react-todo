import React from "react";
// import { users } from "./data.json";

function UserDetail({match, users}) {
  const user = users.find(user => user.id === match.params.id);

  console.log("DDD")
  return (
    <>
      <h2>User Detail</h2>
      <dt>id</dt>
      <dd>{user.id}</dd>
      <dt>name</dt>
      <dd>{user.name}</dd>
    </>
  );
}

export default UserDetail;