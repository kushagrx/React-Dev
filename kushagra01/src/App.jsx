import Button from "./Button"
import Student from "./Student";
import Card from "./Card";

// Props: read only properties shared between components     eg in student.jsx
//        a parent component can send data to its child components
//         <component key=value>


function App() {
  return(
    <>
    <Card/>
    <Button/>
    </>
  );
}

export default App