import Banner from './Banner';
import InfoCard from './Infocard';

const Lessons = () => {
    return(
        <div className="lessons">
            <Banner title="Lessons" id="lessons-banner" desc="We offer a full variety of individual and group lessons, as well as 'Little Explorer's Series' for young children!" />
            <section className="lesson-categories">
                <InfoCard id="lesson-card-1" title="Instruments" desc="Includes piano, violin, voice, guitar, and drum. Recommended for ages 5+. Students regardless of their level can benefit from the teacher’s dedicated attention. Personalized lessons help your child take their study to the next level." image="https://media.wired.co.uk/photos/606db5661dcb46afc3a1e030/4:3/w_1704,h_1278,c_limit/instrument1.jpg"/>
                <InfoCard id="lesson-card-2" title="Theory" desc="Recommended for ages 7+. Whether your child is going for RCM exam or is simply aspiring to be the next rock star, knowing how music works is a vital part of that journey." image="https://becomeabassist.com/wp-content/uploads/2013/05/sheet_music.jpg"/>
                <InfoCard id="lesson-card-3" title="Other" desc="Includes the Little Music Explorer's Series and Markham Youth Choir." image="https://images.unsplash.com/photo-1482627750753-afdba16659ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hvaXJ8ZW58MHx8MHx8&w=1000&q=80"/>
            </section>
        </div>
    )
}

export default Lessons;