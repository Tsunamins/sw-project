import { AUTH_TOKEN, ID, SECRET, BUCKET_NAME } from '../constants';

var AWS = require('aws-sdk');
AWS.config.update(
  {
    accessKeyId: ID,
    secretAccessKey: SECRET,
  }
);
var s3 = new AWS.S3();


export const auth = (mutate) => {
      return dispatch => {
          fetch("http://localhost:4000/", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: 'POST',
            body: mutate,
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



export const uploadStream = async function(file, photo){
    let formdata = new FormData();
    formdata.append("operations", "{ \"query\": \"mutation ($file: Upload!) { singleUploadStream(file: $file) {filename} }\", \"variables\": { \"file\": null } }");
    formdata.append("map", "{ \"0\": [\"variables.file\"] }");
    formdata.append("0", file, `${photo}`);
  
    let requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    await fetch("http://localhost:4000/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));



}


// export const getImage = (file) => {
//     const signedUrlExpireSeconds = 60 * 10 
    
//     s3.getSignedUrl('getObject',
//         { Bucket: "sw-project-bucket", Key: `${file}` },
//         function (error, data) {
//           if (error != null) {
//                   alert("Failed to retrieve an object: " + error);
//           } else {
        
//          console.log(data)
//          return data
           
//           }
//         }
//       );

// }

    export const session = user => {
        return {
            type: "SESSION_USER",
            user
        }
    }

    export const logout = () => {
        console.log("logout triggered")
        localStorage.clear()
        return {
            type: "END_SESSION"
        }
    }













