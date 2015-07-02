$(function() {
	// form to create new todo
	var $newToDo = $('#new-todo');

	// element to hold our list of todos
	var $toDoList = $('#todo-list');

	// todo template
	var toDoTemplate = _.template($('#todo-template').html());

	// `toDos` array is our model (holds our data)
	// contains test (or "seed") data
	var toDos = [];

	// append existing todos (from seed data) to `$toDoList`
	// `_.each` is an "iterator" function provided by Underscore.js
	// _.each(toDos, function (todo, index) {
	// 	var $todo = $(toDoTemplate(todo));
	// 	$todo.attr('data-index', index);
	// 	$toDoList.append($todo);
	// });

	// submit form to create new todo
	$newToDo.on('submit', function() {
		event.preventDefault();

		function ToDo(name, desc) {
			this.name = name;
			this.desc = desc;
		}

		ToDo.all = [];

		var toDoName = $('#todo-name').val();
		var toDoDesc = $('#todo-desc').val();
		// var toDoData = {name: toDoName, desc: toDoDesc};
		var toDo = new ToDo(toDoName, toDoDesc)

		ToDo.prototype.save = function(toDoName, toDoDesc) {
			ToDo.all.push(toDo);
		}

		ToDo.prototype.save.call();

		ToDo.prototype.render = function(toDoName, toDoDesc) {
			var index = toDos.indexOf(toDo);
			var $todo = $(toDoTemplate(toDo));
			$todo.attr('data-index', index);
			$toDoList.append($todo);
		}
		
		ToDo.prototype.render.call();
		// create new todo object from form data
		// var toDoName = $('#todo-name').val();
		// var toDoDesc = $('#todo-desc').val();
		// var toDoData = {name: toDoName, desc: toDoDesc};

 		// store our new todo
		// toDos.push(toDoData);

		// var index = toDos.indexOf(toDoData);

		// append our new todo to the page
		// var $todo = $(toDoTemplate(toDoData));
		// $todo.attr('data-index', index);
		// $toDoList.append($todo);
		console.log(ToDo.all);

		// reset the form
		$newToDo[0].reset();
		$('#todo-name').focus();
	});

	// add class to todo on click to mark it as done
	$toDoList.on('click', '.todo-text', function() {
		$(this).toggleClass('done');
	});

	// remove todo from model and view
	$toDoList.on("click", ".delete", function () {
		var $todo = $(this).closest(".todo");
		var index = $todo.attr('data-index');

		// remove todo from the `toDos` array (model)
		toDos.splice(index, 1);

		// remove todo from the DOM (view)
		$todo.remove();

		// reset indexes in DOM to match `toDos` array
		// $.each loops through DOM elements
		$('.todo').each(function(index) {
			$(this).attr('data-index', index);
		});
	});
});