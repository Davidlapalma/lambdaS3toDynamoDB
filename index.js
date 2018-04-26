const aws = require('aws-sdk')
const s3 = new aws.S3();
var documentClient = new aws.DynamoDB.DocumentClient();

exports.handler = function(event, context, exit){
    console.log('Se llamó a Lambda s3toDynamoDB')
    // Get the object from the event and show its content type
    const bucket = event.Records[0].s3.bucket.name;
    const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
    const params = {
       Bucket: bucket,
       Key: key,
    };
    s3.getObject(params, function(err, data){
         if (err) {
           console.log('ERROR ' + err);
           exit(err);
         } else {
           console.log('Se ha recibido el archivo', key, JSON.stringify(data));
          // data.Body.data devuelve un Buffer
         }
     }); 
     var params2 = {
TableName: "Usuarios",
Item: {
    "Id_Fichero":"x",
    "dni":"453"
}

};
console.log('Llamando Put item')
documentClient.put(params2, function(err, data) {
  if (err) console.log(err);
  else console.log(data);
});
     return 'hola';
};