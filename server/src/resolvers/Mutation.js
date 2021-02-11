const fs = require('fs');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

function singleUpload(parent, args, context) {
    return args.file.then(file => {
        
        const {createReadStream, filename, mimetype} = file
        
        const fileStream = createReadStream()
        
        fileStream.pipe(fs.createWriteStream(`./images/${filename}`))

        return file;
      });
}

async function signup(parent, args, context, info){
    const password = await bcrypt.hash(args.password, 10)

    const user = await context.prisma.user.create({ data: { ...args, password } })

    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return {
        token,
        user
    }
}

// async function newUser(parent, args, context) {
//     return await context.prisma.user.create({
//         data: {
//             username: args.username,
//             name: args.name,
//             email: args.email,
//             password: args.password,
//             photo: args.photo
            
//         }
//     })
 
// }




  
  module.exports = {
    singleUpload, 
  }


