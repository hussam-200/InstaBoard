import { useLocation, useNavigate } from 'react-router-dom'

export default function TeamDetails() {
    const navigate = useNavigate();
    const location = useLocation();
    const { name , email , image , age , date , phone } = location.state || {}
    function goBack() {
        navigate("/team", {})
    }
    return (
        <>
            <button onClick={goBack}>Go Back</button>

          <div id="infoCard">
            <p>Name :{name}</p>
            <p>Email :{email}</p>
            <p>Phone :{phone}</p>
            <p>Age :{age}</p>
            <p>Date:{date}</p>
            <img src={image} alt={name} style={{width:"100px" , height:"100px"}}></img>
            <br></br>
                
            </div>
           
        </>
    );
}