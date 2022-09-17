import './App.css';

import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';

import {Route, Routes} from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </div>

  );

}

export default App;

