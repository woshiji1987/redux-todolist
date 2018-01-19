import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TodoItem from './todoItem.js';
import {FilterTypes} from '../../constants.js';

const TodoList = ({todos}) => {
  return (//循环遍历需要渲染的todos，传入对应的props
    <ul className="todo-list">
    {
      todos.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          completed={item.completed}
        />
        ))
    }
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};
//根据传入的filter返回 全部  已完成 未完成三种需要被todolist渲染的state
const selectVisibleTodos = (todos, filter) => {
  switch (filter) {
    case FilterTypes.ALL:
      return todos;
    case FilterTypes.COMPLETED:
      return todos.filter(item => item.completed);
    case FilterTypes.UNCOMPLETED:
      return todos.filter(item => !item.completed);
    default:
      throw new Error('unsupported filter');
  }
}

const mapStateToProps = (state) => {
  return {//将当前状态的filter传入selectVisibleTodos函数，case出需要渲染的todo
    todos: selectVisibleTodos(state.todos, state.filter)
  };
}

export default connect(mapStateToProps)(TodoList);
