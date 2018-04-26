var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('usertxt_responseS3.json', 'utf8'));
var contentFile = new Buffer(obj.Body.data).toString('utf8');
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
            obj[line[0]] = line[1];
      })
    console.log(JSON.stringify(obj));
}
else {
    console.log('no esta')
}
