import React from 'react';
import './App.css';

class App extends React.Component{

  render(){
    return(
      <div className="App">
         <div className="App-header">
            <div className="App-text">
                  <h2>ToDo List</h2>
            </div>
            <div className="App-input">
                  <input className="InputBar" placeholder="Add List" />
                  <input className="Add-btn" type="button" value="ADD" />
            </div>
         </div>
         <hr />
         <br />

         <div className="App-control">
              <ul>
                <li>
                    <div className="control-list">
                        <input className="Checkbox" type="checkbox" />
                        remainder list
                        <input className="Delete-btn" type="button" value="DELETE" />
                    </div>
                </li>
              </ul>
         </div>
      </div>
    )
  }
}

export default App;