import React, { useState } from 'react';
import './App.css';
import { Route, Switch, NavLink, Redirect, Prompt } from "react-router-dom";

const Home = () => {
  const [ input, setInput ] = useState("");
  return (
    <>
      <Prompt when={!!input} message={(location) => `are you sure you want to go to: ${location.pathname}`} />
      <div>Home</div>
      <input value={input} onChange={(e) => setInput(e.target.value)} type="text"/>
    </>
  );
}
const App: React.FC = () => {
  const activeNavStyle = {backgroundColor: "green"};
  
  return (
    <div className="App">
      <NavLink activeStyle={activeNavStyle} to="/home" exact>Home</NavLink>
      <NavLink activeStyle={activeNavStyle} to="/about" exact>About</NavLink>
      <NavLink activeStyle={activeNavStyle} to="/blog" exact>Blog</NavLink>
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/home">
          <Redirect to="/home" />
        </Route>
        <Route path="/about" exact>
          <div>About</div>
        </Route>
        <Route path="/about">
          <Redirect to="/about" />
        </Route>
        <Route path="/blog" exact>
          <div>Blog</div>
        </Route>
        <Route path="/blog">
          <Redirect to="/blog" />
        </Route>
        <Route>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
