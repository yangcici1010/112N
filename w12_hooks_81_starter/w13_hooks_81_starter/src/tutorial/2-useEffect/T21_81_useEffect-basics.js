import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

const T21_81_UseEffectBasics = () => {
  const [value,setValue] = useState(0);
  const [value2,setValue2] = useState(0);

  useEffect(()=>{
    console.log('value',value);
  });

  useEffect(()=>{
    console.log('loading');});

  useEffect(()=>{
    console.log('value2',value2);
  },[value2])

  return (
    <>
    <h1>{value}</h1>
    <button className='btn' onClick={()=>setValue(value+1)}>
      value+1
    </button>
    <h1>{value2}</h1>
    <button className='btn' onClick={()=>setValue(value2+1)}>
      value+1
    </button>
    </>
  )

};

export default T21_81_UseEffectBasics;
