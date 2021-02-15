export const loginMutation = (data) => {
        const mutate = JSON.stringify({
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
        return mutate
}

export const signupMutation = (data) => {
  const mutate = JSON.stringify({
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


  return mutate
}