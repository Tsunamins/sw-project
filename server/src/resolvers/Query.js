const fs = require('fs');


function findUser(parent, args, context) {
    return context.prisma.user.findUnique({ where: { id: args.id } })
}

function findLoggedInUser(parent, args, context) {
  return context.prisma.user.findUnique({ where: { id: parent.id } })
}

function allUsers(parent, args, context, info) {
    return context.prisma.user.findMany()
  }





  
  module.exports = {
    findUser, allUsers
  }