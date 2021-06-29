import { useEffect, useState } from "react";
import UserItem from "./UserItem";
import Card from "../UI/Card";
import classes from "./Users.module.css";
import { useDispatch } from "react-redux";
import { addAllUsers } from "../../store/actions/users";
import Pagination from './Pagination';
import {IoMdSearch} from 'react-icons/io';


const Users = props => {
    
    const[users, setUsers] = useState([]);
    const [currentPage, setCurrentPage]=useState(1);
    const [usersPerPage, setUsersPerPage] = useState(5);
    const dispatch = useDispatch();
    const [searchText, setSearchText]=useState("");


    const paginate = (pageNumber) =>{
        console.log("PAGE NUMBER: "+pageNumber);
        if(pageNumber<=0){
            setCurrentPage(1);
            return;
        }
        if(pageNumber>=Math.ceil(users.length/usersPerPage)){
            console.log("USAO"+Math.ceil(users.length/usersPerPage))
            setCurrentPage(Math.ceil(users.length/usersPerPage))
            return;
        }
        setCurrentPage(pageNumber);
    }

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

    //Get current posts
    const indexOfLastUser = currentPage * usersPerPage;
    console.log(indexOfLastUser)
    const indexOfFirstUser = indexOfLastUser-usersPerPage;
    console.log(indexOfFirstUser)
    

    const userList = users.filter(user => {
        if(searchText===""){
            return user;
            }
        if(user.name.toLowerCase().includes(searchText.toLowerCase())){
            return user;
        }
    });

    const currentUsers = userList.slice(indexOfFirstUser, indexOfLastUser);
    console.log(currentUsers)

    /*.map(user=>
        <UserItem key={user.id} user={user}/>
    )*/ 

    return(
        <section className={classes.users}>
       <Card>
           <div className={classes.search}>
           <IoMdSearch className={classes.icon}/>
           <input type="text" placeholder="Search..." onChange={(event)=>setSearchText(event.target.value)}/>
           
           </div>
           <ul>
               {currentUsers.map(user=>
        <UserItem key={user.id} user={user}/>)}
           </ul>
           <Pagination usersPerPage={usersPerPage} totalUsers={userList} paginate={paginate} currentPage={currentPage}/>
       </Card>
       </section>
    )
}

export default Users;