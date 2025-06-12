import profilePic from './assets/kushagramain.png.jpg'

function Card(){
    return(
        <div className='card'>
            <h1>Student Card</h1>
            <img src={profilePic} height={200}></img>
            <main>I am a 3rd year student pursuing Btech.</main>
        </div>
    );
}
export default Card