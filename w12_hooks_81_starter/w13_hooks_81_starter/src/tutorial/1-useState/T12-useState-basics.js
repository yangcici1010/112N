import React, { useState } from 'react';

const T12_81_UseStateBasics = () => {
  //let title = 'random text';
  const [title, setTitle] = useState('random text');
  const handleClick = () => {
    //title = 'Hello, world!';
        setTitle('HEllo, world!');
    console.log('title',title);
  };

  //UI,view
  return (
    <>
        <h2>{title}</h2>
    <button type='button' className='btn' onClick={handleClick}>
      change title
    </button>
    </>

  );
};

export default T12_81_UseStateBasics;
