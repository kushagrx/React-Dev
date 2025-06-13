function Button(){

    const handleClick=(event)=>event.target.textContent = "hello";

    return(<button onClick={(event)=>handleClick(event)} className="button">Click me</button>);
}
export default Button