import axios from 'axios';
import { useEffect, useState } from "react";
import './UserList.css'
import UserCard from '../UserCard/UserCard';

export default function UserList({mode}) {
    const [users, setUsers] = useState([]);
    const [usersMore, setUsersMore] = useState([]);


    useEffect(() => {
        axios("https://randomuser.me/api/?results=12")
            .then((res) => {
                setUsers(res.data.results)

            })
            .catch(err => {
                console.log(err);
            })

    }, [])
    useEffect(() => {
        axios("https://randomuser.me/api/?results=3")
            .then((res) => {
                setUsersMore(res.data.results)

            })
            .catch(err => {
                console.log(err);
            })

    }, [])
    const loadMore = () => {
        setUsers(previousUsers => [...previousUsers, ...usersMore])
    }



    return (
       <div id="editCard" className={mode === "black" ? "dark" : ""}>
            {users.map((user) => (
                <UserCard key={user.email} name={`${user.name.first} ${user.name.last}`} email={user.email} image={user.picture.medium} mode={mode} />
            ))}

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <button onClick={loadMore} id="buttonload" >load more</button>
            </div>

        </div>
    )
}
