fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(todos => {
   const completed = todos.filter((todo) => todo.completed
   )
   console.log(completed)
})
.catch(function(err) { 
  console.log(err);
});
