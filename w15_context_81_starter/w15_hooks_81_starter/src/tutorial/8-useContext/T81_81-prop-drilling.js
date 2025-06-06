import React, { useState, useContext } from 'react';
import { data } from '../../data';
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();

const T81_81_context_api = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((People) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ people, removePerson }}>
      <h3>Context API</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const { people } = useContext(PersonContext);
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}

          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
};
export default T81_81_context_api;
