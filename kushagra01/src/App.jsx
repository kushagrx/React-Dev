import Button from "./Button";
import Student from "./Student";
import Card from "./Card";
import UserGreeting from "./userGreeting"; 
import List from "./List";
import Component from "./Component";
import Change from "./Change";

// Props: read only properties shared between components     eg in student.jsx
//        a parent component can send data to its child components
//         <component key=value>


function App() {
  return (
    <>
      <Change/>
    </>
  );
}

export default App;