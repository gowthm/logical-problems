let Book = function(t,a){
let title = t;
let author = a;
 return {
      summary : function() { 
        console.log(`${title} written by ${author}.`);
      } 
   }
}
const book1 = new Book('Hippie', 'Paulo Coelho');
book1.summary();

