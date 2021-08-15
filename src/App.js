import React, { useState } from 'react'
import './App.css';
import TodoList from './TodoList';

function App() {
  const [inputList, setInputList] = useState('');
  const [items, setItems] = useState([]);
  const itemEvent = (e) => {
    setInputList(e.target.value);
  }
  const addItem = () => {
    setItems((val) => {
      return [...val, inputList]
    })
    setInputList("");
  }

  const deleteItems = (id) => {
    console.log('delete');
    setItems((olditems) => {
      return olditems.filter((arr, index) => {
        return index !== id;
      })
    })
  }


  return (

    <div className="App">
      <header className="App-header">

        <div className="main_div">
          <div className="center_div">
            <br />
            <h1>Todo list</h1>
            <br />
            <input type="text" placeholder="add items" onChange={itemEvent} value={inputList} />
            <button onClick={addItem}>+</button>
            <ol>

              {
                items.map((val, index) => {

                  return (

                    <TodoList key={index} id={index} text={val}
                      onSelect={deleteItems}

                    />
                  )
                })
              }

            </ol>
          </div>

        </div>

      </header>
    </div>
  );
}

export default App;
