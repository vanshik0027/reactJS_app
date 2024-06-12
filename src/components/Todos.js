import React from 'react';
import TodoIteams from './TodoIteams';

const Todos = (props) => {
  let myStyle = {
    minHeight: '70vh',
    margin: '40px auto'
  };

  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length === 0 ? (
        "No Todos to display Today"
      ) : (
        props.todos.map((todo) => (
          <React.Fragment key={todo.sno}>
            <TodoIteams todo={todo} onDelete={props.onDelete} />
            <hr />
          </React.Fragment>
        ))
      )}
    </div>
  );
}

export default Todos;
