var elements = ["element1", "element2","element3"]; 

for(var i=0; i < elements.length; i++){

	(function(index){
		setTimeout(function(){
    	console.log(elements[index]); 
    },2000)})(i);    

   
}