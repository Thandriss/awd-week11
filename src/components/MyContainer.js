import { useState } from "react"
import MyList from "./MyList.js"

const MyContainer = props => {

  const [items, setItems] = useState([
        { id:"1", text: "This is an item", clicked: false},
        { id:"2", text: "Also this", clicked: false}
      ]);
  const [oneText, setText] = useState("");
  const updateItem = (id) => {
    for(let i=0; i< items.length; i++) {
      if(items[i].id === id) {
        items[i].clicked = !items[i].clicked;
        if(items[i].clicked) {
          document.getElementById(id).style.textDecoration = 'line-through'
        } else {
          document.getElementById(id).style.textDecoration = ''
        }
      }
    }
    console.log(items)
  }
  
  const sendData = (e) => {
    e.preventDefault();
    const item = oneText;
    const id = Math.floor(Math.random()*1000000 + 1000)
    const newItem = {"id":id.toString(),  "text": item, "clicked": false}
    setItems([...items, newItem])
  }
  
  return (
    <div>
        <MyList 
        updateItem={updateItem}
        header="Really epic list! component"
        items={items} />
        <textarea onChange={(e) => setText(e.target.value)}></textarea>
        <button onClick={(e) => sendData(e)}>Submit</button>
    </div>
  )
}

export default MyContainer