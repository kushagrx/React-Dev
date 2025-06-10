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
  return (
    <div>
      <Header name="Kushagra" year="2025" />           
      <main>
        <h2>we will make amazing apps</h2>
        </main>
    </div>
  );
}

export default App