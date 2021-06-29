
import  classes  from './Pagination.module.css';
import React from 'react'
import { Link } from 'react-router-dom';

function Pagination(props) {
    const pageNumbers = [];
    for(let i =1; i <= Math.ceil(props.totalUsers.length/props.usersPerPage); i++){
        console.log(i);   
        pageNumbers.push(i);
    }


    
    return (
        <div className={classes.pagesCont}>
            <ul className={classes.pages}>
            <Link className={classes.link} onClick={()=>props.paginate(props.currentPage-1)} to="/users">prev</Link> 
                {pageNumbers.map(number=>{
                    console.log("NUMBER:"+number);
                    return(
                    <li key={number} className={classes.page}>
                        {props.currentPage===number && <Link className={classes.linkActive} onClick={()=> props.paginate(number)} to="/users">{number}</Link>}
                        {props.currentPage!==number && <Link className={classes.link} onClick={()=> props.paginate(number)} to="/users">{number}</Link>}
                        
                    </li>)
                })}
                <Link className={classes.link} onClick={()=>props.paginate(props.currentPage+1) } to="/users">next</Link> 
            </ul>
        </div>
    )
}

export default Pagination;


