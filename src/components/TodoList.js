import React from 'react'
import { useState } from 'react'

function TodoList() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem(){

    if (!newItem){
      alert("Enter an item")
      return;
    }
      const item = {
        id: Math.floor(Math.random() * 1000),
        value: newItem
      };

      setItems(oldList => [...oldList, item]);
      setNewItem("");

      console.log(item.value)

    }
    function deleteItem(id){
      const newArray = items.filter(item => item.id !== id);
      setItems(newArray)
    }
  return (
    <div className='todo'>
      
      <h1>TodoList</h1>
   <input 
   type='text' 
   placeholder='add new item'
   value={newItem}
   onChange={e => setNewItem(e.target.value)}
   />
   <button onClick={() => addItem()}>add</button>

   <ul>
    {items.map(item =>{
      return(
        <li key={item.id}>{item.value}<button onClick={() => deleteItem(item.id)}>X</button></li>
      )
      })}
   </ul>

    </div>
  )
}

export default TodoList