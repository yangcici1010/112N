import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const T23_81_UseEffectFetchData = () => {
  const [users,setUsers] = useState([]);

  const getUsers = async () =>{
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log('data',data);
      setUsers(data);
    }catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    getUsers();
  },[]);
  
  
  return(
    <>
    <ul className='users'>
      {users.map((user)=>{
        const {id, login, avatar_url, html_url} = user;
        return (
          <li key={id}>
            <img src={avatar_url} alt={login}/>
            <h4>{login}</h4>
            <a href={html_url}>profile</a>
          </li>
        )

      })}
    </ul>
    
    </>
  ) 
};

export default T23_81_UseEffectFetchData;
