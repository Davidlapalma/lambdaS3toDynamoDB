const aws = require('aws-sdk')
const s3 = new aws.S3();

exports.handler = function(event, context, exit){
    console.log('Se llamó a Lambda s3toDynamoDB')
    // Get the object from the event and show its content type
    const bucket = event.Records[0].s3.bucket.name;
    const fileName = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
    const params = {
       Bucket: bucket,
       Key: fileName,
    };
    s3.getObject(params, function(err, data){
         if (err) {
           console.log('ERROR ' + err);
           exit(err);
         } else {
           console.log('Se ha recibido el archivo', fileName, JSON.stringify(data));
          // data.Body.data devuelve un Buffer
          console.log((new Buffer(120)).toString('hex'))
         }
     }); 
     return 'hola';
};