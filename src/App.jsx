import React, { useState, useEffect } from "react";
import "./App.css";
import "./components/Home.css";
import { getPosts, fetchMe } from "./api/auth";
import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "./components/RegisterComponent";
import HomeComponent from "./components/HomeComponent";
import WelcomePage from "./components/WelcomeComponent";
import ErrorComponent from "./components/ErrorComponent";
import Profile from "./components/Profile";
import GuestHome from "./components/GuestHome";
import { Post } from "./components/Post";

function App() {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  
  // running this useEffect whenever state of token changes, it will run fetchMe and getMe which assigns the data of our logged in user to the state of user
  useEffect(() => {
    const getMe = async () => {
      const data = await fetchMe(token);
      //Passing the token to the FetchMe functions in auth.js so it can run using that value.
      setUser(data);
    };
    // Only run the getMe function IF a token exists.
    if (token) {
      getMe();
    }
  }, [token]);

//   console.log('this is the user variable on app.js', user);
// then taking the new user from the useEffect above to create a userPosts array of objects to use in displaying specific user posts only on profile page 
  const userPosts = user.posts;
// console.log('this is user array of object messages called userPosts',userPosts);

  // run getPosts and assign the value to Posts state
  useEffect(() => {
    getPosts(setPosts);
  }, []);



  // this function checks the state of token, if yes (aka you are signed in and have a token), then render the home page, ELSE (aka you don't have a token and are not signed in) render the signin page
  const isLoggedIn = () => {
    token ? navigate("/home") : navigate("/");
  };
  // tells us to run the isloggedin function everytime the state of token changes to setermine if someone is signed in
  useEffect(() => {
    isLoggedIn();
  }, [token]);

  return (
    <div id="container">
      <Routes>
        <Route path="/" element={<WelcomePage setToken={setToken} />}></Route>
        <Route
          path="/home"
          element={
            <HomeComponent
              posts={posts}
              setPosts={setPosts}
              user={user}
              setToken={setToken}
            />
          }
        ></Route>
        <Route path="/register" element={<Register setToken={setToken} />}>
          {" "}
        </Route>
        <Route path="/guest" element={<GuestHome posts={posts} />}></Route>
        <Route
          path="/post"
          element={
            <Post
              posts={posts}
              setPosts={setPosts}
              user={user}
              setUser={setUser}
            />
          }
        ></Route>
        {/* going to pass the userPosts through profile to map and pass through to a HTML component to render all userposts  */}
        <Route path="/profile" element={<Profile userPosts={userPosts} setToken={setToken} user={user}/>}></Route>
        <Route path="*" element={<ErrorComponent />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
