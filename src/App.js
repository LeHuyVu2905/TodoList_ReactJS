import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {

    constructor(props) {
        super(props);
        
        this.TodoList = [
            'Đi làm',
            'Tắm rửa',
            'Học React',
            'Đi ngủ'
        ];
    }
    
    render() {
        return (
            <div className="App">
                {
                    this.TodoList.map((value, index) => <TodoItem key={ index } title={ value } />)
                }
            </div>
        );
    }
}

export default App;
