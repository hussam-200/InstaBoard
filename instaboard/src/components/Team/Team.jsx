import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import './Team.css';
import axios from "axios"
export default function Team() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [likes, setLikes] = useState({});
    const [numOfCard, setNumOfCard] = useState(null);

    console.log(numOfCard);

    useEffect(() => {
        axios(`https://randomuser.me/api/?results=12`)
            .then(respons => {
                console.log(respons.data.results);
                setData(respons.data.results)
            }).catch(err => {
                console.log(err);

            })
    }, [])

    function handleCard() {
        const count = numOfCard > 0 ? numOfCard : 12;
        axios(`https://randomuser.me/api/?results=${count}`)
            .then((res) => setData(res.data.results)
            )
            .catch((err) => console.log(err));
    }



    function add(number) {
        axios(`https://randomuser.me/api/?results=${number || 12}`)
            .then(respons => {
                console.log(respons.data.results);
                const newCard = respons.data.results
                setData(prev => [...prev, ...newCard])

            })
    }

    function sendDetailsTeam({ name, email, image, age, date, phone }) {
        navigate("/TeamDetails", {
            state: {
                name: name,
                email: email,
                image: image,
                age: age,
                date: date,
                phone: phone
            }
        })
    }
    console.log(likes);

    function handleLike(index, user) {
        const updateLikes = {
            ...likes,
            [index]: (likes[index] || 0) + 1
        };
        setLikes(updateLikes)
        const likedUser = {
            name: `${user.name.first} ${user.name.last}`,
            image: user.picture.medium,
            email: user.email,
            age: user.registered.age,
            date: user.registered.date,
            phone: user.phone
        };
        const store = JSON.parse(localStorage.getItem("likedUser") || "[]");
        const exists = store.some(e => e.email === likedUser.email)
        if (!exists) {
            store.push(likedUser);
            localStorage.setItem("likedUser", JSON.stringify(store))
        }

    }

    return (
        <div className="team-container">
            <div className="card-controls"><input type="number" placeholder="Enter number of cards"
                value={numOfCard} onChange={e => {
                    setNumOfCard(e.target.value)
                }} />
                <button type="submit" onClick={
                    (number) => { handleCard(number) }
                }>push num</button>
            </div>

            <div className="card-grid">
                {data.map((user, index) => (
                    <div key={index} className="user-card">
                        <h3>{user.name.first} {user.name.last}</h3>
                        <img src={user.picture.medium} alt={`${user.name.first}`} />
                        <button className="details-btn" onClick={() => {
                            sendDetailsTeam({
                                name: user.name.first
                                , email: user.email
                                , image: user.picture.medium
                                , age: user.registered.age
                                , date: user.registered.date
                                , phone: user.phone
                            })
                        }}>Show Details</button>

                        <button className="like-btn" onClick={() => { handleLike(index, user) }} id="butto">❤️ {likes[index]}</button>
                    </div>


                ))}
                <button onClick={() => {
                    add(numOfCard)
                }} className="load-more-btn">Load More</button>

            </div>

        </div>
    );
}