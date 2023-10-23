import React, { useContext } from 'react';
import { AppContext } from '../App';
import ChangeProfile from '../components/ChangeProfile';

const Profile = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <p>
        PROFILE, user is: {username}
        <ChangeProfile />
      </p>
      <p>Check the home page to see if the username is changed</p>
    </div>
  );
};

export default Profile;
