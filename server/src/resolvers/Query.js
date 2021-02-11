function findUser(parent, args, context) {
    return context.prisma.user.findUnique({ where: { id: parent.id } })
    //findUser: (_, { id }) => users.find((u) => u.id === id),
}

function allUsers(parent, args, context, info) {
    return context.prisma.user.findMany()
  }

//query all file uploads for now
//correct only if creating a database space for the file names/paths/ and user associations

function uploads(parent, args, context){
    return context.prisma.file.findMany()
}





  
  module.exports = {
    findUser, allUsers, 
  }