import React, { useState } from "react";
import { authService } from "fbase";

const Profile = ({ userObj, refreshUser }) => {
  const [newDisplayName, setNewDisplayName] = useState(
    userObj.displayName || ""
  );
  const onLogOutClick = () => authService.signOut();
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewDisplayName(value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({ displayName: newDisplayName });
      refreshUser();
    }
  };
  return (
    <div className="container">
      <div className="wrapper">
        <form onSubmit={onSubmit} className="profileForm">
          <input
            type="text"
            placeholder="Display name"
            value={newDisplayName}
            onChange={onChange}
            autoFocus
            className="formInput"
          />
          <input
            type="submit"
            value="Update profile"
            className="formBtn mt_10px"
          />
        </form>
        <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
          Log Out
        </span>
      </div>
    </div>
  );
};

export default Profile;
