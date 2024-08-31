import React from 'react'
import UserItem from './UserItem'

function UserList({upDate}) {
  return (
    <div>
        <h1>Userlist</h1>
{upDate.map((upcase) => {
    return (
        <div key={upcase.id}>
            <h1>{upcase.name}</h1>
            <h1>{upcase.email}</h1>
        </div>
    );
})}

        <UserItem />
        
        </div>
    
  )
}

export default UserList