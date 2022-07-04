import './App.css';
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Navbar from "./components/Navbar/Navbar";
import Movies from "./pages/Movies";
import Favorites from "./pages/Favorites";
import MoviesDetails from "./pages/MoviesDetails";
import NotFound from "./pages/NotFound"
function App() {


  return (
    <>
      <Router>
        <Navbar />
        <div className="container page my-5">

          <Switch>
            <Route path="/" exact component={Movies} />
            <Route path="/movies"  component={Movies} />
            <Route path="/movie-details/:id"  component={MoviesDetails} />
            <Route path="/Favorites" component={Favorites} />
            {/* <Route path="/movie/:id" exact component={Search} /> */}
            <Route path="*" component={NotFound} />
          </Switch>

        </div>

      </Router>

    </>
  )
}

export default App;
