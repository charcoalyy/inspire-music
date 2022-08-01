import Banner from './Banner';
import InfoCard from './Infocard';
import { Route, Routes } from 'react-router-dom';
import Infoslot from './Infoslot';

const Lessons = ({setCurrentPage}) => {
    
    const handleClick = (e) => {
        setCurrentPage(e.target.id);
        let desired = document.getElementsByClassName('scroll-to');
        desired[0].scrollIntoView(true);
    }

    const specificLessons = {
        instrumental: [
          <section className="specific-lesson-desc scroll-to">
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
          <section className="specific-lesson-desc scroll-to">
            <h1>Music Theory Lessons</h1>
            <p>From beginners to advanced learners, students will participate in group theory lessons based their approximate level and age.</p>
          </section>,
          <Infoslot title="Elementary RCM Theory" age="7+" duration="60min" desc="Includes preparatory to level 4. Students will learn the rudiments of music theory, such as rhythm, notation, key signatures, etc. to supplement their playing." image="https://rcmusic-kentico-cdn.s3.amazonaws.com/rcm/media/main/landing%20pages/celebrate%20theory/rcm-theory-homepage.jpg" />,
          <Infoslot title="Intermediate RCM Theory" age="7+" duration="60min" desc="Includes level 5 to 8. Students will learn the rudiments of music theory in further detail, such as rhythm, notation, key signatures, etc. to supplement their playing." image="https://www.cdmdance.com/wp-content/uploads/2019/01/Music-Theory-CDM.png" />,
          <Infoslot title="Advanced RCM Harmony" age="7+" duration="60min" desc="Includes level 9 and 10. Students will learn the sophisticated techniques that go into harmony analysis and composition." image="https://www.clearnote.net/assets/images/celebrate_theory_harmony_counterpoint_and_analysis_set.png" />,
          <Infoslot title="Advanced RCM Music History" age="7+" duration="60min" desc="Includes level 9 and 10. Students will be analyze era-specific pieces and learn about a variety of famous composers." image="https://cdn.shopify.com/s/files/1/0083/5538/1327/products/theory_coverspread_-_history_-_bookstore_500x.jpg?v=1573078064?" />
        ],
        other: [
          <section className="specific-lesson-desc scroll-to">
            <h1>Other Lessons</h1>
            <p>Students looking for instruction outside of traditional private lessons will benefit from our unique group programs.</p>
          </section>,
          <Infoslot title="Little Music Explorers" age="3-5" duration="30min" desc="Includes preparatory introductions to singing, keyboard, and percussion. Designed for the curious little ones, this series of lessons cultivates a strong interest in music, encouraging children to explore different instruments and paving a path for later music studies." image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFnsw-ngnOIod-5t1jK5CxDkujA4nOJQxGgGdhhfdNENJ3YuU9DfeI2a0tV-UagKH0slc&usqp=CAU" />,
          <Infoslot title="Choir" age="6-18" duration="60min" desc="Includes beginner to advanced skill levels. Looking for a fun group activity to improve your child’s social skills, confidence, ability to work next to distractions, and vocabulary? Markham’s Youth Choir is the perfect activity!" image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2015/03/choir-kids.jpg?resize=300%2C300&ssl=1" />
        ]
      }

      const categories = [
        <h1 className="lesson-categories-title scroll-to">Categories Offered</h1>,
        <section className="lesson-categories">
            <InfoCard onClick={handleClick} iden="lessons/instrumental" title="Instrumental" extraDesc="Recommended for ages 5+" desc="Includes piano, violin, voice, guitar, and drum. Regardless of level, students benefit from a teacher’s dedicated attention. Personalized lessons help your child take their study to the next level." image="https://media.wired.co.uk/photos/606db5661dcb46afc3a1e030/4:3/w_1704,h_1278,c_limit/instrument1.jpg"/>
            <InfoCard onClick={handleClick} iden="lessons/theory" title="Music Theory" extraDesc="Recommended for ages 7+" desc="Includes all RCM theory levels. From beginners to advanced learners, students will participate in group theory lessons based their approximate level and age." image="https://becomeabassist.com/wp-content/uploads/2013/05/sheet_music.jpg"/>
            <InfoCard onClick={handleClick} iden="lessons/other" title="Other" extraDesc="Recommended for ages 3-18" desc="Includes the Little Music Explorer's Series and Markham Youth Choir. Students looking for instruction outside of traditional private lessons will benefit from our unique group programs." image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2015/01/1-51.jpg?resize=200%2C300&ssl=1"/>
        </section>
      ]

    return(
        <div className="lessons">
            <Banner clickable="true" title="Lessons" id="lessons-banner" desc="We offer a full variety of individual and group lessons, as well as 'Little Explorer's Series' for young children!" />
            <Routes>
                <Route path="/" element={categories} tab="Lessons" />
                <Route path="/instrumental" element={specificLessons.instrumental} tab="Instrumental Lessons" />
                <Route path="/theory" element={specificLessons.theory} tab="Music Theory Lessons" />
                <Route path="/other" element={specificLessons.other} tab="Other Lessons" />
            </Routes>
        </div>
    )
}

export default Lessons;