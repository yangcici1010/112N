import {useState} from 'react';
import { data } from '../../data';

const T13_81_UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id != id);
    setPeople(newPeople);
  }
  console.log('people',people);
  return (
    <>
    {people.map((person) =>{
      const {id, name} = person;
      
      return (
        <div key={id} className='item'>
          <h4>{name}</h4>
          <button onClick={()=>{removeItem(id)}}>remove</button>
        </div>
      )
    })}
    </>
  );
};

export default T13_81_UseStateArray;
