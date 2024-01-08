const MyList = (props) => {
  return (
    <div>
        <h1>{props.header}</h1>
        <ol>
          {props.items.map((item)=> (
            <li key={item.id} id={item.id} onClick={()=>props.updateItem(item.id)}>{item.text}</li>
          ))}
        </ol>
    </div>
  )
}


export default MyList