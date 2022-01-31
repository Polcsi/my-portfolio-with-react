import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// import pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Error from "./pages/Error";

// import components
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PullToRefresh from "./components/PullToRefresh";

function App() {
  return (
    <div className="app">
      <PullToRefresh />
      <Router>
        <ScrollToTop>
          <AnimatePresence>
            <Routes key="routes">
              <Route path="/" element={<Home />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
              <Route path="/projects/project/:id" element={<Project />}></Route>
              <Route path="/error" element={<Error />}></Route>
              <Route path="/*" element={<Error />}></Route>
            </Routes>
            <Footer />
          </AnimatePresence>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
