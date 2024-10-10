import React, { useState } from 'react';

const AgeDetector = () => {
  const [age, setAge] = useState('');
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


      if (age < 18) {
      setStatus('Minor');
    } else {
      setStatus('Major');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={age}
          onChange={handleChange}
          placeholder="Enter your age"
        />
        <button type="submit">Submit</button>
      </form>
      <h1>{status}</h1>
    </div>
  );
};

export default AgeDetector;
