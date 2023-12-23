import React, { useState } from 'react';

const T14_81_UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'YANG pei cih',
    id: 209410181,
    message: 'HELLO'
  });
  const changeMessage = () => {
    setPerson({...person,message:'how r u'});
  }
  
  return (
    <>
    <h3>{person.name}</h3>
    <h3>{person.id}</h3>
    <h4>{person.message}</h4>
    <button className='btn' onClick={changeMessage}>changeMessage</button>
    </>
  )
};

export default T14_81_UseStateObject;
