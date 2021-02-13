import { AUTH_TOKEN } from '../constants';

export const login = () => {
    //return dispatch => {

       

        var graphql = JSON.stringify({
        query: "mutation {\n  login(email: \"graycie@sobe.com\", password: \"password\") {\n    token\n    user {\n      email\n      username\n      name\n     \n      }\n    }\n  }",
        variables: {}
        })
        var requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: graphql,
        redirect: 'follow'
        };

        fetch("http://localhost:4000/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    //}
}








// export const login = () => {
//     return dispatch => {

//         var graphql = JSON.stringify({
//             query: "mutation {\n  login(email: \"graycie@sobe.com\", password: \"password\") {\n    token\n    user {\n      email\n      username\n      name\n     \n      }\n    }\n  }",
//             variables: {}
//           })

//         var requestOptions = {
//             method: 'POST',
//             headers: { "Content-Type": "application/json", "Accept": "application/json"},
//             body: graphql,
//             redirect: 'follow'
//         };

//         fetch("http://localhost:4000/", requestOptions)
//         .then(resp => resp.json())
//         .then(response => {
//             if(response.error){
//                 alert(response.error)
//             } else {
//                 console.log(response)
//                 localStorage.setItem(AUTH_TOKEN, response.token);
//                 dispatch(session(response))
//             }
//         }) 
//         .catch(error => console.log('error', error));
//     }
// }

export const session = user => {
    console.log(user)
    return {
        type: "SESSION_USER"
    }
}












