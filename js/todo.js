function ToDoCtrl($scope) {
    $scope.todos = [
        {
            text: 'Learn Angular', done: true
        },
        {
            text: 'Understand Directives', done: false
        }
    ]

    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.todos, function(todo){
            count += todo.done ? 0 : 1;
        });
        return count;
    }

    $scope.archive = function() {
        var oldToDos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldToDos, function(todo) {
            if(!todo.done) $scope.todos.push(todo);
            console.log(todo.done);
        });
    }

    $scope.addToDo = function() {
        var todo = {text: $scope.todoText, done: false};
        $scope.todos.push(todo);
        $scope.todoText = "";
    }
}