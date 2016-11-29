//var $list = $('#cats');
	//var item = document.createElement('li');
//	var $item = $list.html("whiskers");
	//item.text = "whiskers";
//	var $newItem = $list.append($item);

//$('#myDiv').html("Goodbye world!");

 //newLi.appendTo('#cats');
/*
var ajax = $.get('https://ga-cat-rescue.herokuapp.com/api/cats/1')
    .done(function(data){

    var cat1 = ajax.responseText;

 	var catOne = jQuery.parseJSON(cat1);
 	
 	var newLi = $('#cats').append("<li>" + catOne.name + "</li>");
 	

 	//console.log(catOne.note);

 	//ul.createElement('li').textContent(catOne.name);

 	//ul.appendChild(item);
    });
*/
var ajax2 = $.ajax({
    url: 'https://ga-cat-rescue.herokuapp.com/api/cats',
    method: 'POST',
    dataType: 'json',
    //data: {id: 765, name: "Whiskers", note: "Because I'm curious like a cat!"},
   data: JSON.stringify({id: 765, name: "Whiskers", note: "Because I'm curious like a cat!"}),
}).done(function(data){
    console.log(data);
  });  


var ajax1 = $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
    .done(function(data){
    	var cats = ajax1.responseText;
    	var catz = jQuery.parseJSON(cats);
    	for (var i = 0; i < catz.length; i++) {
    		//console.log(catz[i]);
    		var newItems = $('#cats').append("<li>" + catz[i].name + " - " + catz[i].note + "</li>");
 		}
 	});


 

