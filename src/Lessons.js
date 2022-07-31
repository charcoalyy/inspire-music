import Banner from './Banner';
import InfoCard from './Infocard';
import { useEffect } from 'react';

const Lessons = ({setCurrentPage}) => {
    useEffect(() => {document.title = "Lessons | Inspire Music Academy - Professional Music School in Markham"})
    
    const handleClick = (e) => {
        setCurrentPage(e.currentTarget.id);
    }

    return(
        <div className="lessons">
            <Banner title="Lessons" id="lessons-banner" desc="We offer a full variety of individual and group lessons, as well as 'Little Explorer's Series' for young children!" />
            <h1 className="lesson-categories-title">Categories Offered</h1>
            <section className="lesson-categories">
                <InfoCard onClick={handleClick} iden="instrumental" title="Instruments" extraDesc="Recommended for ages 5+" desc="Includes piano, violin, voice, guitar, and drum. Regardless of level, students benefit from a teacher’s dedicated attention. Personalized lessons help your child take their study to the next level." image="https://media.wired.co.uk/photos/606db5661dcb46afc3a1e030/4:3/w_1704,h_1278,c_limit/instrument1.jpg"/>
                <InfoCard onClick={handleClick} iden="theory" title="Theory" extraDesc="Recommended for ages 7+" desc="Includes all RCM theory levels. From beginners to advanced learners, students will participate in group theory lessons based their approximate level and age." image="https://becomeabassist.com/wp-content/uploads/2013/05/sheet_music.jpg"/>
                <InfoCard onClick={handleClick} iden="other" title="Other" extraDesc="Recommended for ages 3-18" desc="Includes the Little Music Explorer's Series and Markham Youth Choir. Students looking for instruction outside of traditional private lessons will benefit from our unique group programs." image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2015/01/1-51.jpg?resize=200%2C300&ssl=1"/>
            </section>
        </div>
    )
}

export default Lessons;