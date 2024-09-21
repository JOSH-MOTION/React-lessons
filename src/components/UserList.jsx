import React from 'react'
import UserItem from './UserItem'

function UserList({upDate}) {
  return (
    <div>
        <h1>Userlist</h1>
{upDate.map((upcase) => {
    return (
        
        <UserItem  key={upcase.id} newPeople={upcase} />
    );
})}

    
        
        </div>
    
  )
}

export default UserList