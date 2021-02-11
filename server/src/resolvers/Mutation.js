const fs = require('fs');

function singleUpload(parent, args, context) {
    return args.file.then(file => {
        
        const {createReadStream, filename, mimetype} = file
        
        const fileStream = createReadStream()
        
        fileStream.pipe(fs.createWriteStream(`./images/${filename}`))

        return file;
      });
}

async function newUser(parent, args, context) {
    return await context.prisma.user.create({
        data: {
            username: args.username,
            name: args.name,
            email: args.email,
            password: args.password,
            photo: args.photo
            
        }
    })
 
} 




  
  module.exports = {
    singleUpload, newUser,
  }


