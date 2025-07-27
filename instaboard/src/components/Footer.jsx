import '../App.css';
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
    const avatar={
        inst:"https://cdn.pixabay.com/photo/2018/11/13/22/01/avatar-3814081_640.png",
        fac:"https://i.pinimg.com/736x/16/00/12/16001250058513950a6f333622a7ce35.jpg",
        Wapp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_j6zKHu8BEYzvw9sK3O5kVj2jE5xA0NNdYw&s",
        linked:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png",
    }
  return (
    <footer className="modern-footer">
        <div>
          
            <img src={avatar.inst} />
            <img src={avatar.fac}/>
            <img src={avatar.Wapp}/>
            <img src={avatar.linked}/>

        </div>
      <p>
        Made with <FaHeart style={{ color: '#ff4d6d', verticalAlign: 'middle' }} /> by <strong>Hussam Ibrahim</strong> &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
