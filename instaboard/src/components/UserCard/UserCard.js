import { useState } from "react";
import './UserCard.css'
export default function UserCard({ name, email, image , mode }) {
    const [likes, setLikes] = useState(0);
    const [Show, setShow] = useState(false);
   


    function DetailsShow() {
        if (Show === false) {
            setShow(true)
        }
        else {
            setShow(false)
        }
    }
    return (
        <div id="card" className={mode === "black" ? "dark" : ""}>

            <div id="infoCard">
            <p>{name}</p>
            {Show && <p>{email}</p>}
            <img src={image} alt={name} style={{width:"100px" , height:"100px"}}></img>
            <br></br>
            <button onClick={() => {
                setLikes(likes + 1)
            }} id="butto">❤️ {likes}</button>
            <hr></hr>
            <button onClick={DetailsShow} id="button" >{Show ? "hide email" : "show Email"}</button>
            </div>
           </div> 
        
    );


}

