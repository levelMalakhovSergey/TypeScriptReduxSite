import React from 'react';
import UserList from "./components/UserList";
import TodoList from "./components/todoList";


function App() {
    return (
        <div className="App">
            <UserList/>
            <hr/>
            <TodoList/>
        </div>
    );
}

export default App;
