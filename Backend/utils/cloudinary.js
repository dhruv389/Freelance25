const cloudinary=require('cloudinary').v2


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadMediaToCloudinary =  (file) => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            resource_type: "auto",
          },
          (error, result) => {
            if (error) {
              console.error("Error while uploading media to cloudinary", error);
              reject(error);
            } else {
              resolve(result);
            }
          }
        );
    
        uploadStream.end(file.buffer);
      });
}
const deleteMediaFromCloudinary = async (publicId) => {
    try {
      const result = await cloudinary.uploader.destroy(publicId);
      console.info("Media deleted successfuly from cloud stroage", publicId);
      return result;
    } catch (error) {
      console.error("Error deleting media from cloudinary", error);
      throw error;
    }
  };

module.exports = {uploadMediaToCloudinary,deleteMediaFromCloudinary}