import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              // 밑의 함수들을 호출할 때 그냥 호출하는 것이 아니라
              // 각각의 컴포넌트에 들어있는 habit 이라는 오브젝트를 콜백함수 인자로 전달해줌
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>

        {/* 리셋 버튼은 habits 안에 포함된 아이로 재사용될 가능성이 거의 없음
            그래서 그냥 태그를 이용해서 만듬
            그러나 버튼이 반복적으로 사용될 때는 다시 컴포넌트로 따로 빼서 만들어도 됨 */}
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
