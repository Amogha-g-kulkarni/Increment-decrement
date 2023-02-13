import './App.css';
import { Route } from 'react-router-dom';
import AllMeetUp from './pages/AllMeetUp';
import Favorites from './pages/Favorites';
import NewMeetUp from './pages/NewMeetUp';

function App() {
  return (
    <div >
     <Route path='/'>
      <AllMeetUp/>
     </Route>
     <Route path='/favorite'>
      <Favorites/>
     </Route>
     <Route path='new-meetup'>
      <NewMeetUp/>
     </Route>
    </div>
  );
}

export default App;
