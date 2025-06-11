import './App.css'

function Header(props){
  return(
    <header>
      <h1>{props.name}'s React App ✨</h1>
      <p>copyright {props.year}</p>
    </header>
  )
}

// we can reference these props in the Header function above

function App() {
  const items = ["apple", "mango", "orange"];

  return (
    <div>
      <Header name="Kushagra" year="2025" />
      <main>
        <h2>we will make amazing apps</h2>
      </main>
      <Main names={items} />
    </div>
  );
}

let items=["apple","mango","orange"];

function Main({ names }) {
  return (
    <ul>
      {names.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

export default App