import { useState } from 'react'
import './App.css'
import Ban from './components/Ban';
import Discover from './components/Discover';
function App() {
  const [count, setCount] = useState(0)
  const [currImage, setcurrImage] = useState("");

  const [prevImage,setPrevImage] = useState("");

  async function logDogs() {
    const response = await fetch('https://api.thedogapi.com/v1/images/search?api_key=live_r9NLArZJDONralOzJEzDXVR3Bv5acf4HF7lWMDxnPAb5BwCn2kR9xTJbUXqjVIq9');
    const dog = await response.json();
   
    console.log(dog[0]);
    return dog
  }

  const onSubmit = ()=>{
    let result = logDogs();
    console.log(result["breeds"])
    console.log(count)
  }

  return (
    <div className='App'>

      <Discover 
      logFunction={logDogs} 
      setimage={setcurrImage}
      image={currImage}
      prevImage={prevImage}
      setpreviousImage={setPrevImage}
      onSubmit={onSubmit}> </Discover>
      <Ban></Ban>

    </div>
  )
}

export default App
