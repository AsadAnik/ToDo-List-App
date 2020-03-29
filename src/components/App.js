import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    newItem: '',
    list: []
  }

  addedClicked(todoItem) {
      const items = {
        id: Date.now(),
        item: todoItem
      };

      const list = [...this.state.list];
      list.push(items)

      this.setState({
        list,
        newItem: ''
      });
  }

  removeItem(id) {
    const list = [...this.state.list]
    const updatedList = list.filter(item => item.id !== id)
    this.setState({ list: updatedList })
  }

  changeHandler(event) {
    this.setState({ newItem: event })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-text">
            <h2>ToDo List</h2>
          </div>
          <div className="App-input">
            <input className="InputBar" placeholder="Add List"
              required
              value={this.state.newItem}
              onChange={(e) => { this.changeHandler(e.target.value) }} />

            <input className="Add-btn" type="button" value="ADD"
              disabled={!this.state.newItem.length}
              onClick={() => { this.addedClicked(this.state.newItem) }} />
              
          </div>
        </div>
        <hr />
        <br />

        <div className="App-control">
          <ul>
            {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  <div className="control-list">
                    <input className="Checkbox" type="checkbox" />
                      {item.item}
                    <input className="Delete-btn" type="button" value="DELETE" 
                    onClick={() => this.removeItem(item.id)} />
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default App;