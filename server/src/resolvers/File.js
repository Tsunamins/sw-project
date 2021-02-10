function uploadedBy(parent, args, context) {
    return context.prisma.file.findUnique({ where: { id: parent.id } }).uploadedBy()
  }
  
  module.exports = {
    uploadedBy,
  }

 