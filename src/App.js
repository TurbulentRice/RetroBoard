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
    App will handle the "user" name and ID?
    May not keep anything in state, since it will be the RetroBoard itself that will
    store the Tasks in state.
  */
  return (
    <StoriesProvider>
      <div className="App">
        <header>
          
          <NavBar logo={logo}></NavBar>
          
        </header>

        <RetroBoard></RetroBoard>
        
      </div>
    </StoriesProvider>
  );
}

export default App;
