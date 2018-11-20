import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {

    constructor(props) {
        super(props);
        
        this.TodoList = [
            { title: 'Đi làm', isComplete: true },
            { title: 'Tắm rửa', isComplete: false },
            { title: 'Học React', isComplete: true},
            { title: 'Đi ngủ', isComplete: false }
        ];
    }
    
    render() {
        return (
            <div className="App">
                {
                    this.TodoList.map((item, index) => <TodoItem key={ index } item={ item } />)
                }
            </div>
        );
    }
}

export default App;
