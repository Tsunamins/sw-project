function singleUpload(parent, args, context) {
    return args.file.then(file => {
        
        return file;
      });
}


  
  module.exports = {
    singleUpload,
  }