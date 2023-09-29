import React, { useContext, useState } from 'react';
import { AppContext } from '../App';

const ChangeProfile = (props) => {
    const {setUsername} = useContext(AppContext);
    const [newUsername, setNewUsername] = useState("");

    return (
        <div>
            {""}
            <input onChange={(event) => {
                setNewUsername(event.target.value);
            }}></input>
            <button onClick={() => {
                setUsername(newUsername);
            }}>Change Username</button>
        </div>
    );
};

export default ChangeProfile;
