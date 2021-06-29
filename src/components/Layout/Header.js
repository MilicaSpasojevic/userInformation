import { Link } from 'react-router-dom';
import classes from './Header.module.css'

const Header = props => {
    return(
        
        <div className={classes.header}>
        <Link className={classes.link} to="/users">
        <h1 style={{color:"white"}}>Users informations</h1>
        </Link>
        </div>
        

    )
}

export default Header;