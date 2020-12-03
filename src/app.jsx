import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        return { ...habit, count: habit.count + 1};
      }
      return item;
    });
    this.setState({habits}); // {habits: habits}와 같음 // 첫habits는 재정의habits, 두번째habits는 로컬변수(즉 배열) habits이다 
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map(item=> {
      if(item.id === habit.id){
        const count = habit.count -1; 
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    }); 
    this.setState({habits});
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
  };

  hadleAdd = (name) => {
    //항상 복사를 해와야 한다.
    const habits = [this.state.habits, {id: Date.now(), name: name, count: 0}];
    this.setState({habits});
  };

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if(habit.count !== 0){
        return { ...habit, count: 0}
      }
      return habit;
    });
    this.setState({habits});
  }

  render() {
    return (
      <>
        <Navbar totalCount = {this.state.habits.filter(item => item.count > 0).length}/>
        <Habits 
          habits = {this.state.habits}
          onIncrement = {this.handleIncrement} 
          onDecrement = {this.handleDecrement}
          onDelete = {this.handleDelete}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;