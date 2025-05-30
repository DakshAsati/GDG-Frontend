import React from 'react';
import { NavLink } from 'react-router-dom';

function Profile({ user }) {
  // Use a default avatar if no user avatar is provided
  const defaultAvatar = "";
  const avatar = user && user.avatar ? user.avatar : defaultAvatar;

  return (
    <NavLink to = "">
      <img
        src={avatar}
        alt="Profile Avatar"
        className="w-10 h-10 rounded-full object-cover"
      />
    </NavLink>
  );
}

export default Profile;
