import Banner from './Banner';
import InfoCard from './Infocard';
import { Route, Routes } from 'react-router-dom';
import { specificLessons } from './SpecificLessons';

const Lessons = ({setCurrentPage}) => {
    
    const handleClick = (e) => {
        setCurrentPage(e.target.id);
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