var fs = require('fs');
var obj = fs.readFileSync('usertxt_responseS3.json', 'utf8');
var buf = Buffer.from(obj.Body.data);
var contentFile= buf.toString('utf8');
console.log(buf);
var contentFile = buf.toString('utf8');
console.log(contentFile);
if (contentFile.includes('Datos Personales')) {
    console.log('Archivo de datos personales encontrado')
    var obj = {};
    // https://solidfoundationwebdev.com/blog/posts/remove-empty-elements-from-an-array-with-javascript
    var splitted = contentFile.split("\n").filter(element => {
        return (element !== (undefined || null || ''));
      });
      splitted.forEach((line) =>{
            if (line.match('Datos Personales')){return;}
            var line = line.split(":");
            obj[line[0].trim()] = line[1].trim();
      })
    console.log(JSON.stringify(obj));
    console.log(obj.Dni);
}
else {
    console.log('no esta')
}
