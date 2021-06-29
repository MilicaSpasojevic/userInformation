 import classes from './UserDetail.module.css';
import { Fragment, useEffect, useState } from 'react';
import { Redirect } from 'react-router';

 
 const UserDetails = props => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(()=> {
       
        fetch('https://jsonplaceholder.typicode.com/users/'+props.userId)
        .then(res => {
            console.log(res.status)
            if(res.status>=404){
                setError(true);
            }
            return res.json();
        })
        .then(data => {
            console.log(data)
            console.log(Array.isArray(data) )
            setUser(data);
            setIsLoading(false);
        }
        )
        .catch(function(error){
            console.log("GRESKA"+error);
            setIsLoading(true);
        })

    },[])


    return(
        <Fragment>
            {error && <Redirect to="/users"/>}
            {!error && isLoading && <p>Loading..</p>}
        {!error && !isLoading &&
        <div className={classes.informations}>
            <h2>DETAILS FROM {(user.name).toUpperCase()}</h2>
            <p className={classes.about}>Email: <span className={classes.span}>{user.email}</span></p>
            <p className={classes.about}>Phone number: <span className={classes.span}>{user.phone}</span></p>
            <p className={classes.about}>Website: <span className={classes.span}>{user.website}</span></p>
            <p className={classes.about}>Address: <span className={classes.span}>{user.address.street} {user.address.city}</span></p>
            <p className={classes.about}>Company name: <span className={classes.span}>{user.company.name}</span></p>
            
        </div>
        }
        </Fragment>)
 }

 /*<h2>DETAILS FROM {props.user.name}</h2>
            <div>Email: {props.user.email}</div>
            <div>Adress: {props.user.address.street} {props.user.address.suite} {props.user.address.city}</div>
            <div>Phone: {props.user.phone}</div>
            <div>Website: {props.user.website}</div>
            <div>Company: {props.user.company}</div> */

 export default UserDetails;