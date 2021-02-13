import { AUTH_TOKEN } from '../constants';



export const login = (data) => {
    return dispatch => {

        const graphql = JSON.stringify({
            query: `mutation {
                login(email: "graycie@sobe.com", password: "password") {
                token
                user {
                    email
                    username
                    name
                
                    }
                }
                }`,
                variables: {}
        })
        const requestOptions = {
            method: 'POST',
            headers: { "Content-Type": "application/json", "Accept": "application/json"},
            body: graphql,
            redirect: 'follow'
        };

        fetch("http://localhost:4000/", requestOptions)
        .then(resp => resp.json())
        .then(response => {
            if(response.error){
                alert(response.error)
            } else {
                console.log(response)
                localStorage.setItem(AUTH_TOKEN, user.token);
                dispatch(session(response))
            }
        }) 
        .catch(error => console.log('error', error));
    }
} 


export const session = user => {
    console.log(user)
    return {
        type: "SESSION_USER"
    }
}