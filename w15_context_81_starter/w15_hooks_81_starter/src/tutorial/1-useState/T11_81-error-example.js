
import React, {useState} from 'react';


const T11_81_ErrorExample = () => {
  //let title = 'random text';
  let title = 'random text';


  const handleClick = () => {
    title = 'Hello, world!';
    console.log('title',title);
  };


  //frahment
  return (
    <>
        <h2>{title}</h2>
    <button type='button' className='btn' onClick={handleClick}>
      change title
    </button>
    </>

  );
};

export default T11_81_ErrorExample;
