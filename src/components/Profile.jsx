import React, {useState, useEffect} from "react";
import { MyPosts } from "./Post";
import "./Profile.css";
import { Link } from "react-router-dom";

const cohortName = '2211-FTB-ET-WEB-FT'; 

const Profile = ({posts, setPosts, setToken, user, token}) => {
  const [myPosts, setMyPosts] = useState([]);
  
  const handleLogout = () => {
    // idea is to change the token state / remove it from localStorage
    setToken(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    fetch(`https://strangers-things.herokuapp.com/api/${cohortName}/users/me`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(result => result.json())
            .then(
                (result) => {
                    setMyPosts(result.data.posts);
                    console.log(result.data.posts);
                },
            (error) => {
                console.log(error);
            }
            )
    }, [posts])
  
  return (
    <div className="center-container">
      <div className="profile-nav">
      <header>
        <h1>Welcome to Stranger's Things, {user.username}!</h1>
        <div className="Nav">
          {/* <Nav></Nav> */}
          <Link to="/home">Home</Link>
          <Link to="/post">Create New Post</Link>
          <Link to="/profile">User Profile</Link>
          <button className="logoutbutton" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </header>
    
      </div>
      <h1>About me</h1>
      <p>
        Let's pretend this is a lot of information about me and how awesome I
        am.
      </p>
      <h2>My Posts</h2>
      {/* {console.log('this is userPosts inside Profile componenent passing as a prop',userPosts)} */}
      {myPosts?.map((singlePost) => {
        // calling MyPosts from teh Profile.jsx component
        return (<MyPosts key={singlePost._id} singlePost={singlePost} posts={posts} setPosts={setPosts} setMyPosts={setMyPosts}/>);
        // able to delete my posts on the main post page meaning after creating a new post, you see at the bottom of the home page. after going to my profile and clicking delete post it does delete it form the bottom of the home page. However we are unable to delete the posts from our myprofile page
      })}
      
    </div>
  );
};

export default Profile;
