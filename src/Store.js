import {createStore, combineReducers} from 'redux';

import {reducer as todoReducer} from './todos';
import {reducer as filterReducer} from './filter';



//合并reducer 创建store
const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});

//赋予初始状态
const initialState = {
  todos: [
    {
      id: 0,
      text: '吃饭',
      completed: true
    },
    {
      id: 1,
      text: '睡觉',
      completed: true
    },
    {
      id: 2,
      text: '学习',
      completed: true
    }
  ]
}

export default createStore(reducer, initialState);
