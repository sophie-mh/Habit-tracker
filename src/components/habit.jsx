import React, { PureComponent } from "react";

class Habit extends PureComponent {
  // 부모 컴포넌트(Habits)로부터 전달받은 props로 전달받은 습관의 데이터를 보여주기만 하는 컴포넌트이기 때문에
  // 이 컴포넌트 안에 자체적으로 state를 가지고 있을 필요가 없음! => state 삭제

  // 그래서 클릭이 발생하게 되면 주어진 콜백함수들을 단순히 호출만 해주는 컴포넌트로 만듬

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
