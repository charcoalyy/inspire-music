import './App.css';
import { useState, useEffect } from 'react';
import Header from './Header';
import Homepage from './Homepage';
import Lessons from './Lessons';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

function App() {
    const [currentPage, setCurrentPage] = useState("home");

    useEffect(() => {
      let tabTitle = window.location.toString().split('/');
      tabTitle = tabTitle[tabTitle.length - 1];
      tabTitle = tabTitle.charAt(0).toUpperCase() + tabTitle.slice(1);
      if (tabTitle.length > 1) {
        if (tabTitle === 'Instrumental' | tabTitle === 'Other' | tabTitle === 'Theory') { 
          document.title = `${tabTitle} Lessons | Inspire Music Academy`
        } else {
          document.title = `${tabTitle} | Inspire Music Academy`
        }
      } else {
        document.title = `Inspire Music Academy`
      }
    }, [window.location.href])

    return (
      <Router>
        <ScrollToTop />
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
