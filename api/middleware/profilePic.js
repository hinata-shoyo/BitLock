const multer = require("multer");
const path = require("path")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${file.fieldname}_${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFile = [ "image/jpeg", "image/png", "image/jpg"]
  if(allowedFile.includes(file.mimetype)){
    cb(null, true)
  }else{
    cb(null, false)
  }
}

const upload = multer({ storage, fileFilter });



module.exports = upload;
