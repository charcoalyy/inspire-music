import InfoCard from './Infocard.js';
import Banner from './Banner.js';
import { BsMusicNoteList } from 'react-icons/bs'
import { FaChild } from 'react-icons/fa'
import Testimonial from './Testimonial.js'

const Homepage = () => {

    return(
        <div className="homepage">
            <Banner title="Find the music in you." id="home-banner" desc="We are a Markham-based music school specializing in comprehensive music programs to nurture the next generation's talent."/>
            <BsMusicNoteList className="section-icon" size={40} />
            <h1 className="home-offers-title">Why Choose Inspire Music Academy?</h1>
            <section className="home-offers">
                <InfoCard iden="lessons" title="Tailored Lessons" desc="At Inspire Music, we understand that no two students are the same. A custom lesson plan is made for each student; a periodic review is conducted to track progress against set goals. We offer a full variety of individual and group lessons, as well as 'Little Explorer's Series' for young children!" image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2015/03/logotype.jpg?w=900&ssl=1" />
                <InfoCard iden="teachers" title="Trained Teachers Who Care" desc="All of our teachers are professionally trained with university degrees. In addition to being skilled performers, our teachers are passionate educators who take pride in helping our students achieve their musical dream." image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2015/01/1-25.jpg?w=2000&ssl=1" />
                <InfoCard iden="events" title="Performance Experience" desc="Students get to perform in recitals and concerts of various sizes hosted throughout the year. Our musicians love the challenge and sense of accomplishment of finishing an awesome performance!" image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2017/08/IMG_0064-1.jpg?w=2000&ssl=1" />
                <InfoCard iden="about" title="Facilities and Location" desc="We are a Markham Music School, located at the upscale Shoppes on Angus Glen Plaza. Our school is equipped with spacious classrooms, comfortable waiting areas, and a large performance room for student showcases." image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2018/08/Exterior.jpg?w=1440&ssl=1" />
            </section>
            
            <div className="divider"></div>

            <FaChild className="section-icon" size={40} />
            <h1 className="home-offers-title">Student Testimonials</h1>
            <section className="student-testimonials">
                <Testimonial name="Jayden Huang" instrument="Piano, Level 5" image="https://previews.123rf.com/images/akeeris/akeeris1505/akeeris150500116/40064901-piano-lesson-asian-boy-kid-activity-playing-piano-with-notes-smiling.jpg" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                <Testimonial name="Anna Lee" instrument="Flute, Level 8" image="https://i.ytimg.com/vi/CmwXjj1B4UE/maxresdefault.jpg" desc="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            </section>
        </div>
    )
}

export default Homepage;