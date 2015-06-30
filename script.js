$(function() {
	var wholeListArray=[
	{name: "Basement", desc: "Clean out the basement and unclock dryer lint"},
	{name: "Lawn", desc: "Mow the lawn around the house"},
	{name: "Dust", desc: "Dust the upstairs bathroom"}
	];
	var $toDo=$("#to-do");
	var $toDoList=$("#to-do-list");
	var $deleteAll=$("#delete-all");

	_.each(wholeListArray, function(todo, index) {
		$toDoList.append("<li class='item'>"+todo.name+" - "+todo.desc+"</li>");
		console.log(todo.name + " - " + todo.desc);
	});
	$toDo.on("submit", function() {
		event.preventDefault();
		var $toDoName=$("#to-do-name").val();
		var $toDoDesc=$("#to-do-desc").val();
		var $toDoStuff={name: $toDoName, desc: $toDoDesc};
		wholeListArray.push($toDoStuff);
		$toDoList.append("<li class='item'>"+$toDoStuff.name+" - "+$toDoStuff.desc+"</li>");
	});
	var $allLis=$("li");
	$allLis.on("click", function() {
		itemName=$(this).text();
		$(this).toggleClass("finished");
	});
	$deleteAll.on("click", function() {
		event.preventDefault();
		$toDoList.children("li").remove();
		wholeListArray=[];
	});
});