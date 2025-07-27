// import UserList from './components/UserList/UserList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout';

function App() {
  // const [Mode, setMode] = useState("white");

  // function changeMode() {
  //   if(Mode==="white"){
  //     setMode("black")
  //   }
  //   else{
  //     setMode("white")
  //   }
  // }

  // return (
  //   <div style={{ backgroundColor: Mode, minHeight: "100vh" }}>
  //     <header>
  //       <p className="title">Insta Board</p>
  //       <div>
  //         <button onClick={changeMode} id="modeButton">
  //           🌓 Mode
  //         </button>
  //       </div>
  //     </header>

  //     <div id="root">
  //       <UserList mode={Mode} />
  //     </div>

  //     <footer>
  //       Hussam Ibrahim
  //     </footer>
  //   </div>

  // return (
  //   <BrowserRouter>
  //     <div>
  //       <nav>
  //         <Link to="/" >Home</Link>
  //         <Link to="/about" >About</Link>
  //         <Link to="/team" >Team</Link>


  //         </nav>

  //       <Routes>
  //         <Route path='/' element={<Home />} />
  //         <Route path='/team' element={<Team />} />

  //       </Routes>

  //     </div>
  //   </BrowserRouter>
  // )
  return(
    <>
    <Layout/>
    </>
  )
}

export default App;
