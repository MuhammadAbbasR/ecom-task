import React, { useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "Abbas",
    email: "abbas@example.com",
    address: "abc Main St, islamabad",
  });

  return (
    <>
      

      <div className="container">
        <h2>Profile</h2>
        <div className="profile-card">
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
          <button>Edit Profile</button>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
