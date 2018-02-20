function decypherPhrase (obj, str) {
var newObj = {};
   for (var prop in obj) {
       if(obj.hasOwnProperty(prop)) {
           newObj[obj[prop]] = prop;
       }
   }
   return cypherPhrase (newObj, str);
}