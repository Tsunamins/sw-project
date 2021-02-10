function findUser(parent, args, context) {
    return context.prisma.user.findUnique({ where: { id: parent.id } })
    //findUser: (_, { id }) => users.find((u) => u.id === id),
}

function allUsers(parent, args, context, info) {
    return context.prisma.user.findMany()
  }


  
  module.exports = {
    findUser, allUsers,
  }