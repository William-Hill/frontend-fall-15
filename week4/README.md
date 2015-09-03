
#Week 4 Lecture Summary
##Monday Class
###Prework
1. Read [W3School: Javascript Function Definition](http://www.w3schools.com/js/js_function_definition.asp)
2. Read [W3School: Javascript Function Parameters](http://www.w3schools.com/js/js_function_parameters.asp). 
3. Read [W3School: Javascript Function Invocation](http://www.w3schools.com/js/js_function_invocation.asp). 

###Lecture Slides
- [Anonymous Function and Callback](https://docs.google.com/presentation/d/1feA7jJOw1SksW_HurlwAWXRzjfdATlpCOOvxhVnZVBk/edit#slide=id.p4)  
 

###After Class Reading
- [Anonymous Function](http://helephant.com/2008/08/23/javascript-anonymous-functions/)
- [Callback](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)

###Checkpoint 
https://docs.google.com/forms/d/18ngQQFh7yuhCNzRFPN0vfeRETOjdgkdj-y3iCYoMzLU


##Wednesday Class
### Notes
During today's code appetizer, some of you discovered a funky quirk of new browser. If you have an id, then javascript will create a global variable that you can use.  
<br>
For example:
```
<div id='myDiv'>Hello World</div>
<script>
  myDiv.innerText = 'Hello Universe';
</script>
```
In general, this is bad practice. It is best to always create a variable and access the element through the variable. So, instead of the above, do the below:
<br>
```
<div id='myDiv'>Hello World</div>
<script>
  var myDiv = document.getElementById('myDiv');
  myDiv.innerText = 'Hello Universe';
</script>
```
More information can be found [here](http://stackoverflow.com/questions/3434278/do-dom-tree-elements-with-ids-become-global-variables)


###Homework  
Add Javascript to your portfolio project. You can chose from one of the options below or come up with your own idea.   
_Some Options_  
- Enlarge portfolio pictures when you click on them.  
- Make a dropdown navigation menu.  
- Add a slider gallery for portfolio pictures.  
- Add email validation to your contact form.  

###Checkpoint 2  
[http://goo.gl/forms/IKJlX4bWvU](http://goo.gl/forms/IKJlX4bWvU)

