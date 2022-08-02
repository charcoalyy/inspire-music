import './App.css';
import { useState } from 'react';
import Header from './Header';
import Homepage from './Homepage';
import Lessons from './Lessons';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import TabTitle from './TabTitle';

function App() {

    const [currentPage, setCurrentPage] = useState("home");

    return (
      <Router>
        <ScrollToTop />
        <TabTitle />
        <div className="App">
          <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <div className="page-content">
            <Routes>
              <Route exact path="/" element={<Homepage currentPage={currentPage} setCurrentPage={setCurrentPage} />}/>
              <Route path="/lessons/*" element={<Lessons currentPage={currentPage} setCurrentPage={setCurrentPage} />}/>
            </Routes>
          </div>
          <Footer />
          <a href="#" className="to-top">&#x25B2;</a>
        </div>
      </Router>
    );
}

export default App;
