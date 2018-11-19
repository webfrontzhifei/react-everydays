import React, { Component } from 'react';
import { observer } from 'mobx-react';

const Todo = observer(({ todo }) => (
    <li>
      <input
        type="checkbox"
        checked={todo.finished}
        onClick={() => (todo.finished = !todo.finished)}
      />
      {todo.title} {todo.uiStore.height}
    </li>
  ));

export default Todo;