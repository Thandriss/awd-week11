import React, { useState, useEffect } from 'react'

function About() {
    const [items, setItems] = useState([]);
    const [mounted, setMouned] = useState(true);
    useEffect(() => {
        async function doFetch() {
            const a = await fetch('https://jsonplaceholder.typicode.com/posts')
            const b = await a.json()
            if(mounted) {
                setItems(b)
            }
        }
        doFetch()
        console.log(mounted)
        console.log(items)
        return () => {
            setMouned(false)
            console.log(mounted) 
            console.log(items)
        }
        
    }, [])
  return (
    <div>About
        <ol>
          {items.map((item)=> (
            <li key={item.id}>{item.title}</li>
          ))}
        </ol>
    </div>
    
  )
}

export default About