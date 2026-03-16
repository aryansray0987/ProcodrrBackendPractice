import 'dotenv/config'
import multer from 'multer'
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

cloudinary.config({ 
  cloud_name:'AryanCloud', 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.process.env.CLOUDINARY_API_SECRET
});

const uploadFileCloudinary = async (localFilePath) => {
    try {
        if (!filepath) {
        const error = new Error('File path is missing')
        throw error
    }
   const response =  await cloudinary.uploader.upload(localFilePath, {
       resource_type: 'auto',
   })
        console.log('File is uploaded on cloudinary' + response.url)
        return response;
    }
    catch (error) {
        console.log(error.message)
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload get failed
    }
    
}

cloudinary.uploader
  .upload("my_image.jpg")
    .then(result => console.log(result))
    .catch(err => console.log(err.message))
    
