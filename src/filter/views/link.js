import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setFilter} from '../actions.js';

const Link = ({active, children, onClick}) => {
  if (active) {  //如果是当前状态，就返回不带href的文字信息
    return <b className="filter selected">{children}</b>;
  } else {
    return (  //其它的状态都带有链接属性，点击后调用onClick属性来生成有新filter的action
      <a href="#" className="filter not-selected" onClick={(ev) => {
        ev.preventDefault();
        onClick();
      }}>
        {children}
      </a>
    );
  }
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.filter === ownProps.filter    //将state中的filter和当前Link下的filter进行比对，返回布尔值。
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setFilter(ownProps.filter));   //如果点击，就将当前传入的filter属性生成对用的action发送到reducer
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
