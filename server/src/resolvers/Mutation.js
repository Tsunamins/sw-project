function singleUpload(parent, args, context) {
    return args.file.then(file => {
        
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
