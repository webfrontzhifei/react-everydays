import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import Todo from './Todo';

@inject('store')
@observer
class TodoList extends React.Component {
    @observable newTodoTitle = '';

    @action
    handleInputChange = e => {
        this.newTodoTitle = e.target.value;
    }

    @action
    handleFormSubmit = e => {
        this.props.store.addTodo({title: this.newTodoTitle, uiStore: {height: '80px'}});
        this.newTodoTitle = '';
        e.preventDefault();
    }

    render() {
        return <div>
            <form onSubmit={this.handleFormSubmit}>
                New Todo:
                <input type="text" value={this.newTodoTitle} onChange={this.handleInputChange}/>
                <button type="submit">Add</button>
            </form>
            <hr/>
            <ul>
                {this.props.store.todos.map(todo => (
                    <Todo todo={todo} key={todo.id} />
                ))}
            </ul>
            Tasks left: {this.props.store.unfinishedTodoCount}
        </div>
    }
}

export default TodoList;