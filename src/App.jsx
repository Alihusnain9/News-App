import React from "react";
import dotenv from "dotenv";
import News from "./components/news";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [progres, setProgres] = useState(0);

  let apikey = import.meta.env.VITE_REACT_APP_NEWS_API;
  console.log(import.meta.env.VITE_REACT_APP_NEWS_API);

  return (
    <Router>
      <Navbar />
      <LoadingBar color="#f11946" progress={progres} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              setProgress={setProgres}
              apikey={apikey}
              key="home"
              size="10"
              country="us"
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="/general"
          element={
            <News
              setProgress={setProgres}
              apikey={apikey}
              key="home"
              size="10"
              country="us"
              category="general"
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <News
              setProgress={setProgres}
              apikey={apikey}
              key="business"
              size="10"
              country="us"
              category="business"
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              setProgress={setProgres}
              apikey={apikey}
              key="entertainment"
              size="10"
              country="us"
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News
              setProgress={setProgres}
              apikey={apikey}
              key="health"
              size="10"
              country="us"
              category="health"
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              setProgress={setProgres}
              apikey={apikey}
              key="science"
              size="10"
              country="us"
              category="science"
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News
              setProgress={setProgres}
              apikey={apikey}
              key="sports"
              size="10"
              country="us"
              category="sports"
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News
              setProgress={setProgres}
              apikey={apikey}
              key="technology"
              size="10"
              country="us"
              category="technology"
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
