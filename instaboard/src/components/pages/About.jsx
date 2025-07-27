
export default function About() {
    const bio = {
        name: "Hussam Ibrahim",
        role: "Full Stack Developer",
        location: "Amman, Jordan",
        intro: "Passionate about building high-quality web applications. Skilled in React, Node.js, Express, MongoDB, and modern front-end techniques.",
    };
    const card = {
        name: "Hussam ibrahim",

    };

    return (

        <div className="about">
            <div className="oner-card">
                <p>Owner by:</p>
                <h3>{card.name}</h3>
                <img src="/photo.jpg" alt="User" />
            </div>
            <p>{bio.role}</p>
            <p>{bio.location}</p>
            <p>{bio.intro}</p>

        </div>
    )
}