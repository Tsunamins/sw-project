import { AUTH_TOKEN } from '../constants';

export const auth = (query) => {
      return dispatch => {
          fetch("http://localhost:4000/", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: 'POST',
            body: JSON.stringify({
                query: query,
                variables: {}
            })
        })

        
        .then(resp => resp.json())
        .then(response => {
            if(response.error){
                console.log(response)
                alert(response.error)
            } else {
                console.log(response.data.login.user)
                localStorage.setItem(AUTH_TOKEN, response.data.login.user.token);
                //maybe separate dispatch for token, if interested in creating a time out function
                dispatch(session(response.data.login.user))
            }
        })
        .catch(console.log);

    }
}


export const session = user => {
    console.log(user)
    return {
        type: "SESSION_USER",
        user
    }
}












