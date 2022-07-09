import './App.css';
import React from "react";
import { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Navbar from "./components/Navbar/Navbar";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import MoviesDetails from "./pages/MoviesDetails";
import NotFound from "./pages/NotFound";
import LanguageContext from "./context/language";

function App() {
  const [contextLang, setContextLang] = useState("en");

  return (
    <>
      <Router>
      <LanguageContext.Provider value={{ contextLang, setContextLang }}>
          
        <Navbar />
        <div className="container page my-5">

          <Switch>
            <Route path="/" exact component={Movies} />
            <Route path="/movies"  component={Movies}  />
            <Route path="/lang"  component={Home} />
            <Route path="/movie-details/:id"  component={MoviesDetails} />
            <Route path="/favorites" component={Favorites} />
            {/* <Route path="/movie/:id" exact component={Search} /> */}
            <Route path="*" component={NotFound} />
          </Switch>
          

        </div>
        </LanguageContext.Provider>

      </Router>

    </>
  )
}

export default App;
