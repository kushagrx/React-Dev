function List(){
    const fruits=["Apple","Banana","Strawberry","Mango"];
    const listItems = fruits.map(fruit=><li>{fruit}</li>);

    return(
        <ol>{listItems}</ol>
    );
}

export default List