import { useState, useEffect } from "react"
export default function UserLikes() {
    const [showLikesCard, setShowLikesCard] = useState([]);

    useEffect(() => {
        const store = localStorage.getItem("likedUser") || "[]"
        const value=JSON.parse(store)
    if(Array.isArray(value)){
        setShowLikesCard(value)
    }else{
        setShowLikesCard([])
    }
        

    }, [])
console.log(typeof(showLikesCard));


    function deleteItem(indexToRemove) {
        const Users = showLikesCard.filter((_,index) => index !== indexToRemove);
        setShowLikesCard(Users);
        localStorage.setItem("likedUser", JSON.stringify(Users))

    }

    console.log(showLikesCard);


    return (
        <div className="team-container">
            <div className="card-grid">
                {showLikesCard && showLikesCard.map((user, index) => (
                    <div key={index} className="user-card">
                        <h1>{user.name}</h1>
                        <img src={user.image} alt={user.name} />
                        <p>{user.email}</p>
                        <p>{user.age}</p>
                        <p>{user.phone}</p>
                        <button onClick={() => {
                            deleteItem(index)
                        }}>💔UnLike</button>
                    </div>
                ))}
            </div>
        </div>
    )
}