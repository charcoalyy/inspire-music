import './App.css';
import Header from './Header';
import Homepage from './Homepage';
import Lessons from './Lessons';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import TabTitle from './TabTitle';
import BookTrial from './BookTrial';
import Teachers from './Teachers';
import NotFound from './NotFound';
import Contact from './Contact';
import About from './About';
import Events from './Events';

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
              <Route path="/teachers/*" element={<Teachers />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact/book" element={<BookTrial />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
          <a onClick={() => window.scrollTo(0, 0)} className="to-top">&#x25B2;</a>
        </div>
      </Router>
    );
}

export default App;
