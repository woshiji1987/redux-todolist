import * as actions from './actions.js';
import reducer from './reducer.js';
import view from './views/todos.js';

export {actions, reducer, view};
//todos模块的的入口文件， 外层导入的时候默认导入文件夹下的index.js