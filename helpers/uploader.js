const fs = require('fs');
const multer = require('multer');

module.exports = {
  uploader(destination, fileNamePrefix) {
    const defaultPath = './public';
    const storage = multer.diskStorage({
      destination: (req, file, callback) => {
        const dir = defaultPath + destination;
        // check dir
        if (fs.existsSync(dir)) {
          // console.log(dir, 'exists')
          callback(null, dir);
        } else {
          fs.mkdir(dir, { recursive: true }, (err) => callback(err, dir));
          console.log(dir, 'make');
        }
      },
      filename: (req, file, callback) => {
        const originalName = file.originalname;
        const ext = originalName.split('.');
        const filename = `${fileNamePrefix + ext[0] + Date.now()}.${ext[ext.length - 1]}`;
        callback(null, filename);
      },
    });
    const imageFilter = (req, file, callback) => {
      const ext = /\.(jpg|jpeg|png|gif|pdf|doc|docx|xlsx)$/;
      if (!file.originalname.match(ext)) {
        return callback(new Error('Tipe file Anda tidak didukung'), false);
      }
      callback(null, true);
    };

    return multer({
      storage,
      fileFilter: imageFilter,
    });
  },
};
