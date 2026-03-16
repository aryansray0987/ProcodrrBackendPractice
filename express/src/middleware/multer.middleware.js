import multer from 'multer';
import path from 'path'

const storage = multer.diskStorage({
  // 1. Define the folder where files will be stored
  destination: function (req, file, cb) {
    cb(null, '../../public/temp'); 
  },
  // 2. Define the filename (adding a timestamp to prevent overwriting)
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});
//path.link || path.extname
export const upload = multer({ 
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 },// 5MB limit
    fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") { // only pdf files are allowed
      cb(null, true);
    } else {
      cb(new Error("Only PDF files are allowed!"), false);
    }
  },
});




