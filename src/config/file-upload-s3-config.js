import multer from 'multer';
import multerS3 from 'multer-s3';
import { S3Client } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';

dotenv.config();

console.log("-----------------------------------------");
console.log("Current Directory:", process.cwd());
console.log("Access Key ID:", process.env.ACCESS_KEY_ID ? "Loaded" : "UNDEFINED");
console.log("Secret Access Key:", process.env.AWS_SECRET_ACCESS_KEY ? "Loaded" : "UNDEFINED");
console.log("-----------------------------------------");

const s3 = new S3Client({
    region:process.env.AWS_REGION,
    credentials:{
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        accessKeyId:process.env.ACCESS_KEY_ID
    }
});

const upload = multer({
  storage: multerS3({
    acl:'public-read',
    s3: s3,
    bucket: 'twitterbucketnewpulkit',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

export default upload;