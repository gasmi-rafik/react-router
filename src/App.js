
import './App.css';

import React from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
   
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/5">About</Link>
            </li>
            <li>
              <Link to={{
                pathname :"/users" ,
                state : {users :{ name:"jhon" ,
                lastname : "doe"}}}}>
                  Users
                  </Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about/:id" component={About } />
        
          <Route path="/users" render={(props)=>(<> <Users {...props} /> </>) }/>
            
        

        </Switch>
      </div>

  );
}

function Home() {
  return <h2>Home</h2>;
}

function About(props) {
  let x = props.history
  console.log(props.match.params.id)
  return<> 
        <h2>About</h2>
        <button onClick={()=>x.goBack()}>goback</button>
        <button onClick={()=>x.push('./')}> push</button>
        </>
}

function Users(props) {
  console.log(props.location.state.users.name)
  return <h2>Users</h2>;
}