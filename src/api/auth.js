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

//  data = response.data.token  

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
    // console.log(result.data.posts);
    setPosts(result.data.posts)
  })
  .catch(console.error);

//   try {
//     const response = await fetch (`https://strangers-things.herokuapp.com/api/${cohortName}/posts`);
//     const {data: {posts}} = await response.json();
//     setPosts(posts);
//     return 
//   } catch (error) {
//     console.log(error);
//   }
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

  const data = await response.json();

  return data;
  } catch (error) {
    console.error(error);
  }
}
