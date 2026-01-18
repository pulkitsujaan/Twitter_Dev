import multer from 'multer';
import multerS3 from 'multer-s3';
import * as aws from 'aws-sdk/client-s3';
import dotenv from 'dotenv';

dotenv.config();

aws.config.update({
    region: process.env.AWS_REGION,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId:process.env.ACCESS_KEY_ID
})

const s3 = new aws.S3Client();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'some-bucket',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

export default upload;