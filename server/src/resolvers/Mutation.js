const fs = require('fs');
const AWS = require('aws-sdk')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils');
const { BUCKET_NAME } = require('../../../sw-client/src/constants');

const s3 = new AWS.S3({
    accessKeyId: process.env.ID,
    secretAccessKey: process.env.SECRET
});

function singleUpload(parent, args, context) {
    return args.file.then(file => {
        
        const {createReadStream, filename, mimetype} = file
        
        const fileStream = createReadStream()
        
        fileStream.pipe(fs.createWriteStream(`./images/${filename}`))
       
        return file;
      });
}

async function singleUploadStream(parent, args, context) {
      const file = await args.file
      const {createReadStream, filename, mimetype} = file
      const fileStream = createReadStream()
        console.log(args)
      //Here stream it to S3
      // Enter your bucket name here next to "Bucket: "
      const uploadParams = {Bucket: process.env.BUCKET_NAME, Key: filename, Body: fileStream};
      const result = await s3.upload(uploadParams).promise()

      console.log(result)


      return { 
          file,
          result
      };
}



async function signup(parent, args, context, info){
    console.log("attempting signup")
    const password = await bcrypt.hash(args.password, 10)

    const user = await context.prisma.user.create({ data: { ...args, password } })

    const token = jwt.sign({ userId: user.id }, APP_SECRET)
    console.log(user)
   
    console.log(token)
    return {
        token,
        user
    }
}

async function login(parent, args, context, info){
    console.log('attempting login')
    const user = await context.prisma.user.findUnique({
         where: { email: args.email } })
    if(!user){
        console.log('user not found')
        throw new Error('No such user found')
    }

    const valid = await bcrypt.compare(args.password, user.password)
    if(!valid){
        console.log('invalid password')
        throw new Error('Invalid password')
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET)
    console.log(user)
    console.log(token)
    return{
        token,
        user
    }
}

  
  module.exports = {
    singleUpload, signup, login, singleUploadStream
  }


