import logo from './logo.svg';
import './App.css';
import {Hello} from './Components/Hello'
import {Answer} from './Components/Answer'
function App() {
  let data = [
    {name: "nani", place : "anantapur"},
    {name : "mahi", place : "rani nagar"}
  ];
  return (
    <div className="App">
      <Hello/>
      {data.map((user)=>(
        <Answer {...user}/>
      ))}
    </div>
  );
}

export default App;
