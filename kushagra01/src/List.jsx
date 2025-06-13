function List(Props){
    // const fruits=["Apple","Banana","Strawberry","Mango"];
    // now making each fruit an object of its own

    const fruits=[{id:1,name:"Apple", cals:150},
                {id:2,name:"Banana", cals:100},
                {id:3,name:"Strawberry", cals:75},
                {id:4,name:"Mango", cals:200}
    ];

    const lowCalFruits=fruits.filter(fruit=> fruit.cals<150);
    //to display this, replace fruits with lowCalFruits in listItems and same for fruit element

    const listItems = fruits.map(fruit=> <li key={fruit.id}> {fruit.name}: {fruit.cals}</li>);
    //react prefers a unique key item for each element

    return(
        <ul>{listItems}</ul>
    );
}

export default List