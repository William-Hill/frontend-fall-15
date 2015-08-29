//Method 1: Use Anonymous Function to create closure

var elements = ["element1", "element2","element3"]; 

for(var i=0; i < elements.length; i++){

	(function(index){
		setTimeout(function(){
    	console.log(elements[index]); 
    },2000)})(i);    

   
}

//Method 2: Javascript ForEach method

var elements = ["element1", "element2","element3"]; 

elements.forEach(function(element){
	//The asynchronous action simulator
	setTimeout(function(){
		console.log(element); 

	},2000);
});


