import React from 'react';
import { useSelector } from 'react-redux';
import LogIn from './components/LogIn';
import LogOut from './components/LogOut';
import { RootState } from './redux/store';

function App() {
  const user = useSelector((state:RootState)=> state.user.user)
  return (
    <div className="App">
      {user ? <LogOut/> : <LogIn/>}
    </div>
  );
}

export default App;
