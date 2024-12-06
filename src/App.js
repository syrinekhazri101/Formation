import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Signup from './components/Singup';
import{BrowserRouter,Route,Routes} from 'react-router-dom';
import Addmatchs from './components/Addmatchs';
import TableMatches from './components/TableMatches';
import Editmatches from './components/Editmatches';
import Match from './components/Match';
import Matches from './components/Matches';
import AddPlayer from './components/AddPlayer';
import Players from './components/Players';
import Blog from './components/Blog';
import Contact from './components/Contact';
import AddTeam from './components/AddTeam';
import DisplayTeam from './components/DisplayTeam';
import DisplayPlayer from './components/DisplayPlayer';
import EditTeam from './components/EditTeam';
import Login from './components/Login';
function App() {
  return (
    <BrowserRouter >
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tablematches' element={<TableMatches/>}/>
      <Route path='/singup' element={<Signup/>}/>
      <Route path='/Addmatch' element={<Addmatchs/>}/>
      <Route path='/Editmatches/:id' element={<Editmatches/>}/>
      <Route Path='/Matches' element={<Matches/>}/>
      <Route Path='/AddPlayer' element={<AddPlayer/>}/>
      <Route path='/Players' element={<Players/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/AddTeam' element={<AddTeam/>}/>
      <Route path='/DisplayTeam' element={<DisplayTeam/>}/>
      <Route path='/DisplayPlayer' element={<DisplayPlayer/>}/>
      <Route path='/EditTeam/:id' element={<EditTeam/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  
  );
}

export default App;
