import './App.css';
import { useState, useEffect } from 'react';
import Header from './Header';
import Homepage from './Homepage';
import Lessons from './Lessons';
import Footer from './Footer';
import Infoslot from './Infoslot';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [EnumState])

  const [currentPage, setCurrentPage] = useState("home");

  const EnumObject = {
    home: <Homepage currentPage={currentPage} setCurrentPage={setCurrentPage} />,
    lessons: <Lessons currentPage={currentPage} setCurrentPage={setCurrentPage} />,
    instrumental: [
      <section className="specific-lesson-desc">
        <h1>Instrumental Lessons</h1>
        <p>Regardless of level, students benefit from a teacher’s dedicated attention. Personalized lessons help your child take their study to the next level. Not sure which instrument to pick? Take an obligation-free assessment! You will also be able to switch instruments later on at no additional cost.</p>
      </section>,
      <Infoslot title="Piano" age="5+" duration="30min, 45min, 60min" desc="The piano is not just played with hands; students are taught to use all of their senses to explore their music. Various techniques are developed while the rich history and theory accompanying each piece are emphasized. Students truly understand and listen to the music, generating a fun and effective learning process." image="https://miro.medium.com/fit/c/294/294/1*i3higklIhXej3EgJlFoxGQ.jpeg?resize=300%2C300&ssl=1" />,
      <Infoslot title="Violin" age="5+" duration="30min, 45min, 60min" desc="Students from beginner to ARCT level can benefit from our renowned teacher, who adopts a fun, structural approach building a solid foundation for future studies. Once at the intermediate level, students are encouraged to join chamber groups or ensembles. Combined with regular performances, learning becomes fun and rewarding." image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2015/03/violion.jpg?resize=300%2C300&ssl=1" />,
      <Infoslot title="Voice" age="5+" duration="30min, 45min, 60min" desc="Students from beginner to ARCT level can benefit from our renowned teacher, who adopts a fun, structural approach building a solid foundation for future studies. Once at the intermediate level, students are encouraged to join chamber groups or ensembles. Combined with regular performances, learning becomes fun and rewarding." image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-20-at-3.15.55-PM.png?resize=300%2C300&ssl=1" />,
      <Infoslot title="Guitar" age="5+" duration="30min, 45min, 60min" desc="Guitar lessons at Inspire Music include a custom-designed combination of techniques and repertoire. Our teachers are well-equipped to prepare student for RCM exams, performing on stage, or just jamming out in their garage! Students also have the opportunity to join a band." image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2015/03/guitar.jpg?resize=300%2C300&ssl=1" />,
      <Infoslot title="Drums" age="5+" duration="30min, 45min, 60min" desc="Whether you are into Jazz, Rock or Funk, our teachers are eager to share their passion with you. Lessons will be designed based on your interest and level, ranging from basic hand-foot coordination to advanced poly-rhythms and ethnic beats." image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2015/03/drum.jpg?resize=300%2C300&ssl=1" />
    ],
    theory: [
      <section className="specific-lesson-desc">
        <h1>Music Theory Lessons</h1>
        <p>From beginners to advanced learners, students will participate in group theory lessons based their approximate level and age.</p>
      </section>,
      <Infoslot title="Elementary RCM Theory" age="7+" duration="60min" desc="Includes preparatory to level 4. Students will learn the rudiments of music theory, such as rhythm, notation, key signatures, etc. to supplement their playing." image="https://rcmusic-kentico-cdn.s3.amazonaws.com/rcm/media/main/landing%20pages/celebrate%20theory/rcm-theory-homepage.jpg" />,
      <Infoslot title="Intermediate RCM Theory" age="7+" duration="60min" desc="Includes level 5 to 8. Students will learn the rudiments of music theory in further detail, such as rhythm, notation, key signatures, etc. to supplement their playing." image="https://www.cdmdance.com/wp-content/uploads/2019/01/Music-Theory-CDM.png" />,
      <Infoslot title="Advanced RCM Harmony & Counterpoint" age="7+" duration="60min" desc="Includes level 9 and 10. Students will learn the sophisticated techniques that go into harmony analysis and composition." image="https://www.clearnote.net/assets/images/celebrate_theory_harmony_counterpoint_and_analysis_set.png" />,
      <Infoslot title="Advanced RCM Music History" age="7+" duration="60min" desc="Includes level 9 and 10. Students will be analyze era-specific pieces and learn about a variety of famous composers." image="https://cdn.shopify.com/s/files/1/0083/5538/1327/products/theory_coverspread_-_history_-_bookstore_500x.jpg?v=1573078064?" />
    ],
    other: [
      <section className="specific-lesson-desc">
        <h1>Other Lessons</h1>
        <p>Students looking for instruction outside of traditional private lessons will benefit from our unique group programs.</p>
      </section>,
      <Infoslot title="Little Music Explorers" age="3-5" duration="30min" desc="Includes preparatory introductions to singing, keyboard, and percussion. Designed for the curious little ones, this series of lessons cultivates a strong interest in music, encouraging children to explore different instruments and paving a path for later music studies." image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFnsw-ngnOIod-5t1jK5CxDkujA4nOJQxGgGdhhfdNENJ3YuU9DfeI2a0tV-UagKH0slc&usqp=CAU" />,
      <Infoslot title="Choir" age="6-18" duration="60min" desc="Includes beginner to advanced skill levels. Looking for a fun group activity to improve your child’s social skills, confidence, ability to work next to distractions, and vocabulary? Markham’s Youth Choir is the perfect activity!" image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2015/03/choir-kids.jpg?resize=300%2C300&ssl=1" />
    ]
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
