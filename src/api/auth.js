const cohortName = '2211-FTB-ET-WEB-FT'; 


// This api call helps to register a user, it is used in the register component 
export const registerUser = async (username, password) => {
  try {
      const response = await fetch(`https://strangers-things.herokuapp.com/api/${cohortName}/users/register`, 
      {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
          user: {
              username,
              password,
  }
})
});
//below is the same as assign the token key off data object off the response object which we parsed into JSON aka 


const {data: { token }} = await response.json();
  return token;

  } catch (error) {
      console.log(error);
  }
}





// this api calls all posts data and helps us post that to the screen. it is used in the posts component 
export const getPosts = async (setPosts) => {
  // call the API
  // take the returned data and parse into JSON 
  // return the results (array of objects) to be displayed on the poage via  our Posts component 

  fetch(`https://strangers-things.herokuapp.com/api/${cohortName}/posts`)
  .then(response => response.json())
  .then(result => {
    console.log(result.data.posts);
    setPosts(result.data.posts)
  })
  .catch(console.error);

}


export const getPostsById = async (id, setPosts) => {
  // call the API
  // take the returned data and parse into JSON 
  // return the results (array of objects) to be displayed on the poage via  our Posts component 

  fetch(`https://strangers-things.herokuapp.com/api/${cohortName}/posts`)
  .then(response => response.json())
  .then(result => {
    console.log(result.data.posts);
    setPosts(result.data.posts)
  })
  .catch(console.error);

}


export const fetchMe = async (token) => {
  try {
    const response = await fetch (`https://strangers-things.herokuapp.com/api/${cohortName}/users/me`, 
    {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })

  const { data } = await response.json();

  return data;
  } catch (error) {
    console.error(error);
  }console.log("This is me object: ", data)
}


export const fetchLoginUser = async (username, password) => {
  try {
    const response = await fetch(`https://strangers-things.herokuapp.com/api/${cohortName}/users/login`, 
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
    body: JSON.stringify({
        user: {
            username,
            password,
}
})
});
//below is the same as assign the token key off data object off the response object which we parsed into JSON aka 


const {data: { token }} = await response.json();
console.log(token);
return token;

} catch (error) {
    console.log(error);
}
};


export const createNewPost = async (title, description, price) => {
  const token = window.localStorage.getItem("token");

  try {
    const response = await fetch (`https://strangers-things.herokuapp.com/api/${cohortName}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          willDeliver: true
        }
      })
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};


export const deletePost = async (posts, setPosts, setMyPosts, postId) => {
  // console.log(posts);
  // console.log(postId);
  const token = window.localStorage.getItem("token");
  // console.log(token);

  try { 
    const response = await fetch(`https://strangers-things.herokuapp.com/api/${cohortName}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })

    const data = await response.json();
    console.log('this is data in delete', data);
    const reply = await fetch(`https://strangers-things.herokuapp.com/api/${cohortName}/posts`)
    const rep = await reply.json();
    console.log(rep);
    setPosts(rep.data.posts);
    
  //   const var1 = await fetch(`https://strangers-things.herokuapp.com/api/${cohortName}/users/me`,{
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${token}`
  //     }
  // })
  //   const var2 = await var1.json();
  //   // console.log(var2);
  //   const myPosts = var2.data.posts
  //   console.log(myPosts);
    
  //   if (data) {
  //     const newMyPosts = myPosts.filter(post => post._id !== postId)
  //     setMyPosts(newMyPosts)
  //     console.log(newMyPosts);
  //     console.log('this is posts after getting reset',myPosts)
  //   }
  return data.success

  } catch (error) {
    console.log(error);
  }
}