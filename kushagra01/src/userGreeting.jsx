import PropTypes from 'prop-types';

function userGreeting(props){
    const greetMsg = <h1 className="greet">Greetings from the server! Welcome {props.user}</h1>
    const errorPrompt = <h1 className="error">Please log in first to continue</h1>

    return(props.isLoggedIn ? greetMsg : errorPrompt 
    );
}

userGreeting.PropTypes={
    isLoggedIn : PropTypes.bool,
    user : PropTypes.string
}
export default userGreeting