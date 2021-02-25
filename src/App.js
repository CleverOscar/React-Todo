import React, {useState}  from 'react';
import TodoList from './views/TodoList.js';


const list = [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }, {
          task: 'Take Out The Trash',
          id: 1528817084258,
          completed: false
        }, {
          task: 'Feed The Cats',
          id: 1528815384358,
          completed: false
        }]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(props){
    super(props);
    this.state = {
      list 
    }
  }

  checkBoxHandler = (id) => {
    console.log(this.state.list.map(item => item.id === id))
  }


  render() {
    return (
      <div>
        <TodoList todoList={this.state.list} checked={this.checkBoxHandler}/>
      </div>
    );
  }
}

export default App;

