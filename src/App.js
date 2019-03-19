import React, { Component } from 'react';
import './App.css';
import { generateTask } from './helpers';
import TaskComponent from './components/TaskComponent';

class App extends Component {

  state = {
    listItems: [generateTask()],
  }

  handleClick = () => {
    this.setState({
      listItems: [...this.state.listItems, generateTask()]
    })
  }

  handleDelete = (id) => {
    console.log(id);
    this.setState({
      listItems: this.state.listItems.filter(item => item.id !== id)
    })
  }

  handleComplete = (id) => {
    console.log('done', id);
    const listItems = this.state.listItems.map(item => {
      if(item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    })
    this.setState({
      listItems
    })
  }

  render() {
    const {listItems} = this.state;

    return (
      <div className="App">
        <h1>Todos</h1>
        <div className="container">
          <ul>
            {listItems.map((todo, index) => {
              return <TaskComponent 
                      key={todo.id}
                      todo={todo} 
                      onDelete={this.handleDelete}
                      onComplete={this.handleComplete}
                    />
            })}
          </ul>
          <button onClick={this.handleClick}>Add todo</button>
        </div>
      </div>
    );
  }
}

export default App;
