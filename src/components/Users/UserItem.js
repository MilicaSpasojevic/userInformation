import { Link } from 'react-router-dom';
import classes from './UserItem.module.css'

const UserItem = props => {
    

    return(
        <li className={classes.user}>
            <div>
                <h3>{props.user.name}</h3>
                <div>Company: <span style={{fontWeight: "medium"}}>{props.user.company.name}</span></div>
            </div>
            <div className={classes.buttonCont}>
                <Link className={classes.button} to={`/users/${props.user.id}`}>
                    Details
                </Link>
                
            </div>

        </li>
    )
}

export default UserItem;