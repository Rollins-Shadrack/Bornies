import React from 'react';
import Home from './Pages/Navbar'
import Body from './Pages/Body'
import Contact from './Pages/contact';
import Footer from './Pages/footer'
import {Router,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <div >
      <Home/>
      <Switch>
        <Route exact path="/home">
        <Body/>
        </Route>
        <Route exact path = "/contact">
        <Contact/>
        </Route>
      </Switch>
      <Footer/>
   
    </div>
  );
}

export default App;
