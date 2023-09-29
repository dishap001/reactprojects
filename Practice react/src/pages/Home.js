import React, { useContext } from 'react';
import { AppContext } from '../App.js';


const Home = () => {


  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>Welcome to Homepage</h1>
      <p>It displays the user name.</p>
      <p>You can change the user name by going on the Profile.</p>
      <p>The user is: {username}</p>

    </div>
  );
};

export default Home;
