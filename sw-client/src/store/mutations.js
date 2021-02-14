export const loginMutation = (data) => {
        const mut = JSON.stringify({
          query: `mutation {
            login(email: "${data.email}", password: "${data.password}") {
              token
              user {
                email
                username
                name
                photo
               
                }
              }
            }`,
          variables: {}
        })
        return mut
}

export const signupMutation = (data) => {
  const mut = JSON.stringify({
    query: `mutation {
      signup(username: "${data.username}", name: "${data.name}", email: "${data.email}", photo: "${data.photo}", password: "${data.password}") {
        token
        user {
          id
          name
          username
          email
          photo
          
        }
      }
    }`,
    variables: {}
  })


  return mut
}