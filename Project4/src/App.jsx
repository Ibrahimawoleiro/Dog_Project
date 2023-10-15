import { useRef, useState } from 'react'
import './App.css'
import Ban from './components/Ban';
import Discover from './components/Discover';
function App() {
  const [count, setCount] = useState(0)
  const [currState, setCurrState] = useState("");
  const [prevState, setPrevState] = useState([]);
  const [inputt, setInput] = useState({})
  const unique = useRef({
    ans: new Set()
  });

  const uniqueAttribute = useRef({
    ans: new Set()
  });

  async function logDogs() {
    let response = await fetch('https://api.thedogapi.com/v1/images/search?api_key=live_r9NLArZJDONralOzJEzDXVR3Bv5acf4HF7lWMDxnPAb5BwCn2kR9xTJbUXqjVIq9');
    let dog = await response.json();
    console.log(dog[0].breeds)
    while (dog[0].breeds.length == 0 || unique.current.ans.has(dog[0].breeds[0].name) || uniqueAttribute.current.ans.has(dog[0].breeds[0].name) || uniqueAttribute.current.ans.has(dog[0].breeds[0].breed_group) || uniqueAttribute.current.ans.has(dog[0].breeds[0].life_span)) {
      setTimeout(7000);
      response = await fetch('https://api.thedogapi.com/v1/images/search?api_key=live_r9NLArZJDONralOzJEzDXVR3Bv5acf4HF7lWMDxnPAb5BwCn2kR9xTJbUXqjVIq9');
      dog = await response.json();
    }

    return dog[0]
  }



  const onSubmit = () => {
    let result = logDogs().then(obj => {
      if (obj.breeds.length) {
        reset(obj)
      }
    });
  }

  const reset = (input) => {
    if (unique.current.ans.has(input.breeds[0].name)) {
      console.log("suiiiiiii")
      return
    }
    if (currState.name) {
      setPrevState(currState)

      let leftDiscover = document.getElementsByClassName("leftDiscover")[0];
      let child2 = document.getElementsByClassName("pastChildrenHolder")[0];

      let child1 = document.createElement("p");
      child1.setAttribute("class", "names")
      child1.innerHTML = `A ${prevState.name}`;
      let image = document.createElement("img")
      image.setAttribute("src", prevState.url)
      image.setAttribute("class", "prevImages")
      child2.appendChild(image);
      child2.appendChild(child1);

    }

    if (currState == "") {
      let left = document.createElement("button");
      left.innerHTML = input.breeds[0].life_span
      left.setAttribute("class", "buttonz")
      let mid = document.createElement("button");
      mid.innerHTML = input.breeds[0].name
      mid.setAttribute("class", "buttonz")
      let right = document.createElement("button");
      right.innerHTML = input.breeds[0].breed_group
      right.setAttribute("class", "buttonz")
      let container = document.getElementsByClassName("buttonContainer")[0];
      container.replaceChildren(left, mid, right)

      left.addEventListener("click", function () {
        let pastholder = document.getElementsByClassName("pastHolder")[0];
        let pastChild = document.createElement("button")
        pastChild.setAttribute("class", "buttonz")
        let removedAttribute = left.innerHTML;
        pastChild.innerHTML = removedAttribute;
        uniqueAttribute.current.ans.add(removedAttribute);
        pastholder.appendChild(pastChild);
      })

      mid.addEventListener("click", function () {
        let pastholder = document.getElementsByClassName("pastHolder")[0];
        let pastChild = document.createElement("button")
        pastChild.setAttribute("class", "buttonz")
        let removedAttribute = mid.innerHTML;
        pastChild.innerHTML = removedAttribute;
        uniqueAttribute.current.ans.add(removedAttribute);
        pastholder.appendChild(pastChild);
      })

      right.addEventListener("click", function () {
        let pastholder = document.getElementsByClassName("pastHolder")[0];
        let pastChild = document.createElement("button")
        pastChild.setAttribute("class", "buttonz")
        let removedAttribute = right.innerHTML;
        pastChild.innerHTML = removedAttribute;
        uniqueAttribute.current.ans.add(removedAttribute);
        pastholder.appendChild(pastChild);
      })
    }

    setCurrState({
      life_span: input.breeds[0].life_span,
      name: input.breeds[0].name,
      breed_group: input.breeds[0].breed_group,
      weight: input.breeds[0].weight.imperial,
      height: input.breeds[0].height.imperial,
      url: input.url
    })
    let buttons = document.getElementsByClassName("buttonz");
    let left = buttons[0];
    left.innerHTML = input.breeds[0].life_span
    let mid = buttons[1];
    mid.innerHTML = input.breeds[0].name
    let right = buttons[2];
    right.innerHTML = input.breeds[0].breed_group
    

    unique.current.ans.add(input.breeds[0].name);
    let curr = document.getElementsByClassName("curr")[0];
    let innerChild = document.createElement("img")
    innerChild.setAttribute("class", "prevImages")
    innerChild.setAttribute("src", input.url)
    let innerChildp = document.createElement("p")
    innerChildp.setAttribute("class", "names")
    innerChildp.innerHTML = `A ${input.breeds[0].name}`;
    curr.replaceChildren(innerChild, innerChildp)
  }



  return (
    <div className='App'>

      <Discover
        logFunction={logDogs}
        setState={setCurrState}
        currState={currState}
        prevState={prevState}
        setPreviousState={setPrevState}
        onSubmit={onSubmit}> </Discover>
      <Ban></Ban>

    </div>
  )
}

export default App
