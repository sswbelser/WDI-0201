$(function() {
	var wholeListArray=[
		// {name: "Clean", desc: "Vacuum the whole house"},
		// {name: "Lawn", desc: "Mow the lawn"},
		// {name: "Groceries", desc: "Go grocery shopping"}
		];
	var $toDo=$("#to-do");
	var $toDoList=$("#to-do-list");
	var $deleteDone=$("#delete-done");
	var toDoTemplate = _.template($("#to-do-template").html());

	_.each(wholeListArray, function(toDoAdd, index) {
		var $toDoAdd=$(toDoTemplate(toDoAdd));
		$toDoAdd.attr("data-index", index);
		$toDoList.append($toDoAdd)
	});
	$toDo.on("submit", function() {
		event.preventDefault();
		var $toDoName=$("#to-do-name").val();
		var $toDoDesc=$("#to-do-desc").val();
		var $toDoStuff={name: $toDoName, desc: $toDoDesc};
		wholeListArray.push($toDoStuff);
		$toDoList.append("<li class='toDoLi'>"+$toDoStuff.name+" - "+$toDoStuff.desc+"</li>");
	});
	$toDoList.on("click", ".toDoLi", function() {
		$(this).toggleClass("finished");
	});
	$deleteDone.on("click", function() {
		event.preventDefault();
		_.each(wholeListArray, function(toDo, index) {
			if ($("[data-index="+index+"]").hasClass("finished")) {
				wholeListArray[index]=null;
			}
		});
		wholeListArray=wholeListArray.filter(function(element) {
			return element!=null;
		});
		$(".finished").remove();
	});
	check=function() {
		console.log(wholeListArray);
	}
});