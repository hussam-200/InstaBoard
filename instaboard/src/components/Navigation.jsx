import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Team from './Team/Team';
import TeamDetails from './TeamDetails/TeamDetails';
import NotFound from './pages/NotFound';
import UserLikes from './UserLikes';



export default function Navigation() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <nav>
           <ul className="nav-links">
    <li>
      <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : "normal-link"}>Home</NavLink>
    </li>
    <li>
      <NavLink to="/team" className={({ isActive }) => isActive ? "active-link" : "normal-link"}>Team</NavLink>
    </li>
     <li>
      <NavLink to="/CardLikes" className={({ isActive }) => isActive ? "active-link" : "normal-link"}>CardLikes</NavLink>
    </li>
    <li>
      <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : "normal-link"}>About</NavLink>
    </li>
   
  </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<Team />} />
          <Route path='/about' element={<About />} />
          <Route path='/TeamDetails' element={<TeamDetails />} />
          <Route path='/CardLikes' element={<UserLikes />} />
          <Route path='*' element={<NotFound />} />


        </Routes>

      </div>
    </BrowserRouter>
  )
}

