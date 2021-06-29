
import  classes  from './Pagination.module.css';
import React from 'react'
import { Link } from 'react-router-dom';
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'

function Pagination(props) {
    const pageNumbers = [];
    for(let i =1; i <= Math.ceil(props.totalUsers.length/props.usersPerPage); i++){
        console.log(i);   
        pageNumbers.push(i);
    }


    
    return (
  
        <div className={classes.pagesCont}>
            {pageNumbers.length > 1 && 
            <ul className={classes.pages}>
            {pageNumbers.length>1 && <Link className={classes.link} onClick={()=>props.paginate(props.currentPage-1)} to="/users"><IoIosArrowBack className={classes.icon}/></Link> }
                {pageNumbers.map(number=>{
                    console.log("NUMBER:"+number);
                    return(
                    <li key={number} className={classes.page}>
                        {props.currentPage===number && <Link className={classes.linkActive} onClick={()=> props.paginate(number)} to="/users">{number}</Link>}
                        {props.currentPage!==number && <Link className={classes.link} onClick={()=> props.paginate(number)} to="/users">{number}</Link>}
                        
                    </li>)
                })}
                {pageNumbers.length>1 && <Link className={classes.link} onClick={()=>props.paginate(props.currentPage+1) } to="/users"><IoIosArrowForward className={classes.icon}/></Link> }
            </ul>}
        </div>
    )
}

export default Pagination;


