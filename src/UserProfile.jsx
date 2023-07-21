import React, {useContext} from 'react';
import { UserContext } from "./App"

const UserProfile = () => {
   const {
    username,
    email,
    updateUser
   } = useContext(UserContext)
  return (
    <div>
      <h2>My Profile</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <button onClick={() => updateUser("Charles", "Charles@yahoo.com")}>
        Update Username
      </button>
    </div>
  )
}

export default UserProfile;