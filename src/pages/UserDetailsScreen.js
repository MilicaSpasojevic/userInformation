import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Card from "../components/UI/Card";
import PostItem from "../components/Users/PostItem";
import UserDetails from "../components/Users/UserDetails";
import classes from './UserDetailScreen.module.css'

const UserDetailsScreen = props => {

    const params = useParams();
    const [usersPost, setUsersPost] = useState([]);
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const users = useSelector(state=>state.user.allUsers)

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users/'+params.userId+"/posts")
        .then(res => {
            console.log(res.status);
            return res.json();
        })
        .then(data => {
            console.log(data)
            console.log(Array.isArray(data) )
            setUsersPost(data);
           // setIsLoading(false)
           fetch('https://jsonplaceholder.typicode.com/users/'+params.userId)
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

        })
        .catch(function(error){
            console.log("GRESKA"+error);
            setIsLoading(true);
        })
        
    },[])





    const postsList = usersPost.map(post => <PostItem key={post.id} title={post.title} body={post.body}/>)
    return(
        <Fragment>
        {isLoading && <p>Loading...</p>}
        {!isLoading &&
        <section className={classes.posts}>
        <div>
        <Card className={classes.userPosts}>
            <UserDetails userId={params.userId} user={user}/>
        </Card>
        </div>
        <div className={classes.userInformations}>
            <Card>
            <div className={classes.start}>
            <h2>POSTS</h2>
            </div>
            
            <ul>
                {postsList}
            </ul>
        </Card>
        </div>
        
        
        </section>}
        </Fragment>
    )
}

export default UserDetailsScreen;