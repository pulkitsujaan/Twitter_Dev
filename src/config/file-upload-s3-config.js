import multer from 'multer';
import multerS3 from 'multer-s3';
import { S3Client } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

dotenv.config();

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
      const uniqueId = uuidv4();
      const extension = path.extname(file.originalname);
      cb(null, uniqueId + extension)
    }
  })
})

export default upload;