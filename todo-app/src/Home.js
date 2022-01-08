import React from "react";
import Todo from './Todo';
import FormTodo from './FormTodo';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [todos, setTodos] = React.useState([
    {
      text: "Complete todo code by tonight.",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text:text, isDone:false }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className = "container">
      <h1 className = "text-center mb-4">Todo App</h1>
      <FormTodo addTodo = {addTodo} />
      <br></br>
      <h3>Tasks</h3>
      <div>
        {todos.map((todo, index) => (
          <div>
            <Card>
              <Card.Body>
                <Todo
                key = {index}
                index = {index}
                todo = {todo}
                markTodo = {markTodo}
                removeTodo = {removeTodo}
                />
              </Card.Body>
            </Card>
            <p></p>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Home;