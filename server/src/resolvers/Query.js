function findUser(parent, args, context) {
    return context.prisma.user.findUnique({ where: { id: parent.id } })
    //findUser: (_, { id }) => users.find((u) => u.id === id),
}


  
  module.exports = {
    findUser,
  }