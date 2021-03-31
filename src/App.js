import logo from './logo.svg';
import './App.css';
import RetroBoard from './components/RetroBoard';
import NavBar from './components/NavBar';
import { StoriesProvider } from './contexts/StoriesContext'

/* 
  This is the top of retroboard app
  Requirements:
  1) What went well
  2) To imporove
  3) Actions items

  Components:
  1) Navbar?
  2) RetroBoard
  3) StoryCard

*/

function App() {
  /*
    App will just handle presenting main components
    RetroBoard and StoryColumns will store the stor
  */
  return (
    <StoriesProvider>
      <div className="App">

        <NavBar logo={logo}></NavBar>

        <RetroBoard></RetroBoard>
        
      </div>
    </StoriesProvider>
  );
}

export default App;
