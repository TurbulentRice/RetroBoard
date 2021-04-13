import logo from './logo.svg';
import './App.css';
import RetroBoard from './components/RetroBoard';
import NavBar from './components/NavBar';
import { StoriesProvider } from './contexts/StoriesContext'
import { DndProvider } from 'react-dnd';
import { HTML5Backend} from 'react-dnd-html5-backend'

function App() {
  /*
    App will just handle presenting main components
    Wraps rest of app in story context
  */
  return (
    <StoriesProvider>
      <DndProvider backend={HTML5Backend}>
        <div className="App">

          <NavBar logo={logo}></NavBar>

          <RetroBoard></RetroBoard>
          
        </div>
      </DndProvider>
    </StoriesProvider>
  );
}

export default App;
