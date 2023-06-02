// Write your Color component here
import { useState } from 'react'
const Color = (props) => {
  return (
  <div 
    className={props.color}
    onClick={() => props.setSelectedColor(props.color)}
    ></div>
  )
}
const App = () => {
  const [selectedColor, setSelectedColor] = useState("")
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">{<div id="colors-list">
  <Color color="black" setSelectedColor={setSelectedColor}/>
  <Color color="red" setSelectedColor={setSelectedColor}/>
  <Color color="yellow" setSelectedColor={setSelectedColor}/>
</div>}
</div>
    </div>
  );
};



export default App;
