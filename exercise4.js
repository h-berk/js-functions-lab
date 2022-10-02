fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todos => {
     const countCompleted = todos.reduce( (acc, todo) => 
          todo.completed ? acc+1 : acc
     ,0
     )
     console.log(countCompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });
