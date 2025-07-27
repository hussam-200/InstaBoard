import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate=useNavigate();

  function handleTeamPage(){
    navigate("/team",

    )
  }
  return (
    <div className="home">
      <h1>Welcome to Our Website</h1>
      <button onClick={handleTeamPage}>Show Teams</button>
      <p>
        Explore our talented team members, learn about their skills and
        backgrounds, and don’t forget to like the profiles you admire!
      </p>
      <p>
        We believe in collaboration and celebrating great work — feel free to
        show appreciation by liking any team member you find inspiring.
      </p>
      <p>
        Use the navigation menu above to browse the full team list, and dive
        into profiles for more details.
      </p>
    </div>
  );
}
