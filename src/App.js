import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Video from './components/videoplayer';
import { Provider } from 'mobx-react';
import TodoListModel from './models/TodoListModel';
import TodoList from './components/TodoList';
class App extends Component {
  constructor(opts) {
    super(opts);
    this.store = new TodoListModel();
  }
  render() {
    return (
      <Provider store={this.store}>
        <div className="App">
          <TodoList></TodoList>
        </div>
      </Provider>
    );
  }
}

export default App;
