import './App.css';
import Header from './Header';
import Homepage from './Homepage';
import Lessons from './Lessons';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import TabTitle from './TabTitle';
import BookTrial from './BookTrial';

function App() {

    return (
      <Router>
        <ScrollToTop />
        <TabTitle />
        <div className="App">
          <Header />
          <div className="page-content">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route path="/lessons/*" element={<Lessons />}/>
              <Route path="/teachers" />
              <Route path="/events" />
              <Route path="/contact" />
              <Route path="/about" />
              <Route path="/contact/test" element={<BookTrial />} />
            </Routes>
          </div>
          <Footer />
          <a href="#" className="to-top">&#x25B2;</a>
        </div>
      </Router>
    );
}

export default App;
