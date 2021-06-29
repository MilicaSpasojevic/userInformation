import classes from "./PostItem.module.css"


const PostItem = props => {
    return(
<li className={classes.post}>
            <div>
                <h4>{props.title}</h4>
                <div>{props.body}</div>
            </div>
            

        </li>
    )
}

export default PostItem;