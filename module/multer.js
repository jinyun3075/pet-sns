const multer = require("multer");
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
aws.config.loadFromPath(__dirname +"/../config/s3Info.json"); //s3config 추가

const s3 = new aws.S3();
const upload = multer({
    storage: multerS3({
        s3:s3,
        bucket: "pet-sns-yunjae",
        acl: 'public-read-write',
        key: (req,file,cd) => {
            cd(null, Date.now()+'.'+file.originalname.split(".").pop())
        },
    })
})

module.exports = upload;