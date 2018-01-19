import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes.js';

let nextTodoId = 3; //因为创建Store的时候已经默认三个任务，所以这里从3开始
//每次调用addTodo就会自动赋予一个新的id
export const addTodo = (text) => ({
  type: ADD_TODO,
  completed: false,
  id: nextTodoId ++,
  text: text
});

//组件传递id，根据id生成一个新的action供reducer匹配对应的case生成新的state
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id: id
});
//根据传递的id,删除对应的任务
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id: id
});

