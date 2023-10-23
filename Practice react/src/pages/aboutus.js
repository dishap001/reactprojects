import React, { useState, useEffect } from 'react';

const Aboutus = () => {
  const [catFact, setCatFact] = useState('');
  const [name, setName] = useState('');
  const [predictedAge, setPredictedAge] = useState({ age: 0 });

  const predictAge = () => {
    fetch(`https://api.agify.io?name=${name}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.age) {
          setPredictedAge(data.age);
        } else {
          console.error('No age data found in the response.');
        }
      });
  };

  const fetchCatFact = () => {
    fetch('https://catfact.ninja/fact')
      .then((res) => res.json())
      .then((data) => {
        setCatFact(data);
      });
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div>
      <h1>About API</h1>
      <p>These are the two APIs</p>
      <p>1st API - It predicts the age of a person based on the name of a person</p>

      <div className='Age'>
        <h1>API to predict the age</h1>
        <input
          placeholder='Enter Name'
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button onClick={predictAge}>Predict age</button>
        <p>Predicted Age: {predictedAge.age}</p>
      </div>

      <div className='Cat'>
        <h2>API to Generate cat facts</h2>
        <p>2nd API - It gives just random cat facts on clicking on the button.</p>
        <button onClick={fetchCatFact}>Generate Cat facts</button>
        {catFact && catFact.fact && <p>{catFact.fact}</p>}
      </div>
    </div>
  );
};

export default Aboutus;
