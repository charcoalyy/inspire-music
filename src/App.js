import './App.css';
import { useState } from 'react';
import Header from './Header';
import Homepage from './Homepage';
import Lessons from './Lessons';
import Footer from './Footer';

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const EnumObject = {
    home: <Homepage />,
    lessons: <Lessons />
  }

  function EnumState({ state }) {
    return <div>{EnumObject[state]}</div>;
  }

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="page-content">
        <EnumState state={currentPage}></EnumState>
      </div>
      <Footer />
      <a href="#" className="to-top">&#x25B2;</a>
    </div>
  );
}

export default App;
