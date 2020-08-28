import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Contacts from "./containers/Contacts/Contacts";
import Add from "./containers/Add/Add";
import ReadMore from "./containers/ReadMore/ReadMore";
import EditPost from "./containers/EditPost/EditPost";

const App = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/posts" component={Add}/>
          <Route path="/post/:id" exact component={ReadMore}/>
          <Route path="/post/:id/edit" component={EditPost} />
        <Route render={() => <h1>404 Not Found</h1>}/>
      </Switch>
    </BrowserRouter>
);

export default App;