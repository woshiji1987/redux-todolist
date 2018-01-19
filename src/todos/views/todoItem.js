import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {toggleTodo, removeTodo} from '../actions.js';

class TodoItem extends React.Component {

  render() {
    const {onToggle, onRemove, completed, text } = this.props;
    return (
      <li className="todo-item"
        style={{
          textDecoration: completed ? 'line-through' : 'none'  
        }}
      >
        <input className="toggle" type="checkbox" checked={completed ? "checked" : ""} readOnly onClick={onToggle} />
        <label className="text">{text}</label>
        <button className="remove" onClick={onRemove}>×</button>
      </li>
    );
  };
}
//一般把事件处理函数放在最底层，而不是放在父组件传导进来，这样可以减少渲染浪费的时间（shouldComponentUpdate进行的是浅比较，如果比较的为对象一定会返回true）

TodoItem.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
//传入事件对应函数，调用action生成后再dispatch给reducer计算新的state
const mapDispatchToProps = (dispatch, ownProps) => {
  const {id} = ownProps;
  return {
    onToggle: () => dispatch(toggleTodo(id)),
    onRemove: () => dispatch(removeTodo(id))
  }
};

export default connect(null, mapDispatchToProps)(TodoItem);
