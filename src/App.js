import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/homepage';
import Shoppage from './Pages/Shoppage/Shoppage';

function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={Shoppage}/>
    </div>
  )
}

export default App;
