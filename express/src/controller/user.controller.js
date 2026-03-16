


async function userData(req, res,next ) {
    
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      const error = new Error("Username and password are required");
      throw error;
    }
  res.status(200).json({
      message: "data received successfully",
    });
  } catch (error) {
        next(error);
  }
}


async function fileUpload(req, res) {
 
    // req.file contains information about the uploaded file
    // req.body contains the text fields (username, description, etc.)
    
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }

    console.log(req.file);
    res.status(200).json({
        message: "File uploaded successfully",
        fileUrl: req.file.path // Path to the file on your server
    });
}

export {userData , fileUpload}
