import InfoCard from './Infocard.js';
import Banner from './Banner.js';

const Homepage = ({setCurrentPage}) => {

    const handleClick = (e) => {
        setCurrentPage(e.currentTarget.id);
    }

    return(
        <div className="homepage">
            <Banner title="Find the music in you." id="home-banner" desc="We are a Markham-based music school specializing in comprehensive music programs to nurture the next generation's talent."/>
            <h1 className="home-offers-title">Why Choose Inspire Music Academy?</h1>
            <section className="home-offers">
                <InfoCard onClick={handleClick} iden="lessons" title="Tailored Lessons" desc="At Inspire Music, we understand that no two students are the same. A custom lesson plan is made for each student; a periodic review is conducted to track progress against set goals. We offer a full variety of individual and group lessons, as well as 'Little Explorer's Series' for young children!" image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2015/03/logotype.jpg?w=900&ssl=1" />
                <InfoCard onClick={handleClick} iden="teachers" title="Trained Teachers Who Care" desc="All of our teachers are professionally trained with university degrees. In addition to being skilled performers, our teachers are passionate educators who take pride in helping our students achieve their musical dream." image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2015/01/1-25.jpg?w=2000&ssl=1" />
                <InfoCard onClick={handleClick} iden="events" title="Performance Experience" desc="Students get to perform in recitals and concerts of various sizes hosted throughout the year. Our musicians love the challenge and sense of accomplishment of finishing an awesome performance!" image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2017/08/IMG_0064-1.jpg?w=2000&ssl=1" />
                <InfoCard onClick={handleClick} iden="about" title="Facilities and Location" desc="We are a Markham Music School, located at the upscale Shoppes on Angus Glen Plaza. Our school is equipped with spacious classrooms, comfortable waiting areas, and a large performance room for student showcases." image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2018/08/Exterior.jpg?w=1440&ssl=1" />
            </section>
            <section className="testimonials">

            </section>
        </div>
    )
}

export default Homepage;