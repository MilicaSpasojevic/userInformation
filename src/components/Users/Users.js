import { useEffect, useState } from "react";
import UserItem from "./UserItem";
import Card from "../UI/Card";
import classes from "./Users.module.css";
import { useDispatch } from "react-redux";
import { addAllUsers } from "../../store/actions/users";


const Users = props => {
    
    const[users, setUsers] = useState([]);
   const dispatch = useDispatch();
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data)
            console.log(Array.isArray(data) )
            setUsers(data);
           dispatch(addAllUsers(data));
        })
        .catch(function(error){
            console.log(error);
        })
    },[])


    const usersList = users.map(user => <UserItem key={user.id} user={user} onShow={props.onShow}/>)

    return(
        <section className={classes.users}>
       <Card>
           <ul>
               {usersList}
           </ul>
       </Card>
       </section>
    )
}

export default Users;