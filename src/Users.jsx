import { useEffect, useState } from "react";
import Card from "./Card";

export default function User() {
    const [user,setUser] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUser(json))
    },[])

    return ( 
        user.map((el)=>{
            return(               
                <div key={el.id}>
                    <Card name={el.name} username={el.username} email={el.email} phone={el.phone}/>
                </div>
            )
        })
    )    
}