import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {

   type userType = {
      birthDate: Date,
      name: string
   }
   const [users, setUsers] = useState<userType[]>(new Array<userType>());

   useEffect(() => {
      axios.get('/api/Users')
         .then(e => {
            setUsers(e.data)
            console.log(e.data)
         })
   }, [])

   return (
      <>
         <div>Hello! Staging!</div>
         <React.Fragment>
            {users.map((val, index) => {
               return (
                  <div key={index}>Name:{val.name}</div>
               )
            })}
         </React.Fragment>
      </>
   );
}

export default App