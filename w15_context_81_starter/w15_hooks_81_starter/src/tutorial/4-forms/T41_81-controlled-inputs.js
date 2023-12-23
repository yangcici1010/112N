import React, { useState } from 'react';

const T41_81_ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name && email){
      const person = {
        id: new Date().getTime().toString(),
        name,
        email
      };
    
      setPeople((people)=>{
        return [...people, person];
      });
      setName('');
      setEmail('');
    }else{
      console.log('empty values,plz re-enter')
    }


  }
  return (
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='form-control'>
          <label className='email'>Email:</label>
          <input htmlFor='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <button type='submit'>Add person</button>
      </form>
      {people.map((person)=>{
        const { id,name,email } = person;
        return(
          <div className='item' key={id}>
            <h4>{name}</h4>
            <h4>{email}</h4>
          </div>
        )
      })}
    </article>
  );
};

export default T41_81_ControlledInputs;
