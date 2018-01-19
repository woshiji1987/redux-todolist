import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO}from './actionTypes.js';

export default (state = [], action) => {
  switch(action.type) {
    case ADD_TODO: {
      return [
        {
          id: action.id,
          text: action.text,
          completed: false
        },
        ...state
      ]
    }
    //es6的语法，新增todo到数组最前面，也可以加到最后面
    //不能用unshift和concat否则会直接修改当前state，reducer的作用是生成新的state，而不是修改
    case TOGGLE_TODO: {
      return state.map((todoItem) => {
        if (todoItem.id === action.id) {
           return {...todoItem, completed: !todoItem.completed};
           //也可以用Obejct.assign({}，todoItem,completed:!todoItem.completed),注意前面空的{},必须要，否则会修改当前state
        } else {
          return todoItem;
        }
      })
    }
    case REMOVE_TODO: {
      return state.filter((todoItem) => {
        return todoItem.id !== action.id;
      })
    }
    //根据传入的id，删除对应的任务
    default: {
      return state;
    }
  }
}
