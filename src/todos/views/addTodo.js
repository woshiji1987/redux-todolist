import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {addTodo} from '../actions.js';

class AddTodo extends Component {

  constructor(props, context) {
    super(props, context);

    this.onSubmit = this.onSubmit.bind(this);
    this.refInput = this.refInput.bind(this);
  }

  onSubmit(ev) {
    ev.preventDefault(); //阻止form提交后的刷新

    const input = this.input; //获取真实的dom内容
    if (!input.value.trim()) {
      return;
    }

    this.props.onAdd(input.value);//将信息传入onAdd函数
    input.value = ''; //清空输入框
  }

  refInput(node) {
    this.input = node;
  }

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input className="new-todo" ref={this.refInput} /> 
          <button className="add-btn" type="submit">
            添加
          </button>
        </form>
      </div>
    )
  }
}
/*
新的教程都不推荐使用ref属性，改成受控组件的话 把代码更改如下：
增加this.state，用户在输入框输入信息，调用onChange函数将输入信息实时写入state中
之后再点击form的提交  调用onSubmit函数，将当前state中的value传入onAdd函数生成新的action
class AddTodo extends Component {

  constructor(props, context) {
    super(props, context);

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      value: ''    
    };
  }

  onSubmit(ev) {
    ev.preventDefault();

    const inputValue = this.state.value;
    if (!inputValue.trim()) {
     return;
    }

    this.props.onAdd(inputValue);
    this.setState({value: ''});
  }

  onInputChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input className="new-todo" onChange={this.onInputChange} value={this.state.value} />
          <button className="add-btn" type="submit">
            添加
          </button>
        </form>
      </div>
    )
  }
}
*/

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired
};


const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => {
      dispatch(addTodo(text));
    }
  }
};
//点击添加按钮，调用onAdd函数，先由addTodo生成新的todo，然后再dispatch到reducer计算出新的state
export default connect(null, mapDispatchToProps)(AddTodo);

