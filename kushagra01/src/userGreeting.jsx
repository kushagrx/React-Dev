function userGreeting(props){
    return(props.isLoggedIn ? <h1 className="greet">Greetings from the server! Welcome {props.user}</h1> :
        <h1 className="error">Please log in first to continue</h1>
    );
}

export default userGreeting