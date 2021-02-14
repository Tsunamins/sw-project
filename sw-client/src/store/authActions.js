import { AUTH_TOKEN } from '../constants';

export const auth = (mut) => {
      return dispatch => {
          fetch("http://localhost:4000/", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: 'POST',
            body: mut,
            redirect: 'follow'
        })

        .then(resp => resp.json())
        .then(response => {
            if(response.errors){
                console.log("if error:", response)
                alert(response.errors)
            } else {
                console.log(response)
                if(!response.data.login.user){
                    console.log(response.data.signup.user)
                    localStorage.setItem(AUTH_TOKEN, response.data.signup.user.token);
                //maybe separate dispatch for token, if interested in creating a time out function
                    dispatch(session(response.data.signup.user))
                } else {
                    localStorage.setItem(AUTH_TOKEN, response.data.login.user.token);
                    dispatch(session(response.data.login.user))

                }
            }
        })
        .catch(console.log);

    }
}

export const upload = (file, photo) => {
    console.log(file)
    console.log(photo)

    let formdata = new FormData();
    formdata.append("operations", "{ \"query\": \"mutation ($file: Upload!) { singleUpload(file: $file) {filename} }\", \"variables\": { \"file\": null } }");
    formdata.append("map", "{ \"0\": [\"variables.file\"] }");
    formdata.append("0", file, `${photo}`);
  
    let requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    fetch("http://localhost:4000/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));



}

    export const session = user => {
        console.log(user)
        return {
            type: "SESSION_USER",
            user
        }
    }













