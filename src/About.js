import Banner from './Banner.js'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
        AOS.refresh();
    }, [])

    return(
        <div className="about">
            <Banner title="About Inspire Music" desc="We strive for first-rate education and community." id="about-banner" noButton={true} />
            <section className="about-section left-image">
                <div className="about-thumb">
                    <img src="https://scontent-yyz1-1.xx.fbcdn.net/v/t1.6435-9/40365447_852526034939550_7270469648817061888_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=UHFq4qL9A0YAX81CTki&_nc_ht=scontent-yyz1-1.xx&oh=00_AT-bJ-N2tQiF_E7mJd1hqJuMYCjYHQL2u_-jBHmRMcoDrg&oe=632409F4"></img>
                </div>
                <div className="about-content">
                    <h1>Halfway through 2016,</h1>
                    <p>Two individuals, deeply passionate about music and talented in unique ways, crossed paths. In next to no time, they became best friends. The idea of founding a professional, top-notch music school ignited a spark of purpose in both. After a year of meticulous planning and preparation, the school opened in December of 2017.</p>
                    <p>Since then, we have reached far beyond our humble beginnings. Inspire Music Academy hosts a full range of talented music educators, a cohort of eager music students, and plenty of opportunities to become better.</p>
                </div>
            </section>
            <section className="about-section right-image">
                <div className="about-content">
                    <h1>As part of our mission,</h1>
                    <p>Alongside providing sincere instruction and community, we put emphasis on ensuring that our students become well-rounded. Our concerts, events, and camps, on top of regular lessons, enable our students to develop their planning abilities, public speaking skills, sense of teamwork, and ambition.</p>
                    <p>Quality music education is about handing over essential tools for lifelong music appreciation, demonstrating ways to carry oneself with grace in public, discovering ways to channel emotions, and showcasing the power of persistence. Our educators dedicate themselves to this mission.</p>
                </div>
                <div className="about-thumb">
                    <img src="https://scontent-yyz1-1.xx.fbcdn.net/v/t1.6435-9/43951867_872575202934633_4011884794634829824_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=MtluiI3FbLwAX-6DpSd&_nc_ht=scontent-yyz1-1.xx&oh=00_AT_OtjRF6o853GhIqx8vT68xythtjkiDNSTLShA7GHkSAQ&oe=63248D3F"></img>
                </div>
            </section>
            <section className="about-section left-image">
                <div className="about-thumb">
                    <img src="https://scontent-yyz1-1.xx.fbcdn.net/v/t1.6435-9/48362564_909467105912109_5294451162676723712_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=dLRA7DK8nMwAX9yXBoX&_nc_ht=scontent-yyz1-1.xx&oh=00_AT8GwIta81frLEwAauTjaEBM-echTDa2ijTnPcODGfZXqA&oe=6323E57C"></img>
                </div>
                <div className="about-content">
                    <h1>In our school,</h1>
                    <p>Closed practice and lesson rooms enable students to engage in private one-on-one learning. A large performance room, complete with a grand piano and numerous seats, serves as a setting for local performances and music theory lessons.</p>
                    <p>Students' experiences are not limited to our school location. We host seasonal concerts at large performance centres and churches across Markham, as well as volunteering-based recitals.</p>
                </div>
            </section>
            <section className="about-section gallery-image">
                <h1>Regardless of your current expertise,</h1>
                <p>We're hear to support you in the next step of your music journey!</p>
                <div className="gallery">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <img src="https://scontent-yyz1-1.xx.fbcdn.net/v/t1.6435-9/43669679_872570702935083_817212614344966144_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=3Hq3YJehohoAX-VhPQD&tn=BA-zpYYrH1cox7WW&_nc_ht=scontent-yyz1-1.xx&oh=00_AT-CGp1gywZkkiN3KdAiAiyqLkytMDhwkSjcp8QuCNm2vQ&oe=63244BF2"></img>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500">
                        <img src="https://scontent-yyz1-1.xx.fbcdn.net/v/t1.6435-9/60338440_992977187561100_4551262713405243392_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=ljegikjft2MAX9AmD2a&_nc_ht=scontent-yyz1-1.xx&oh=00_AT-I38CnJJHxvrSsglADFX7LRnz308pwy3FFPx1KLm4Clw&oe=6325958A"></img>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <img src="https://scontent-yyz1-1.xx.fbcdn.net/v/t1.6435-9/60325273_992977130894439_3648326653525884928_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=60AzhZr7IDQAX_OzRoj&_nc_ht=scontent-yyz1-1.xx&oh=00_AT_JMYLH8hPcbcX69eYA4om98iudcr-HsaS715bFpPxGHg&oe=63250743"></img>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <img src="https://scontent-yyz1-1.xx.fbcdn.net/v/t1.6435-9/59987037_992977177561101_2110347436613435392_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=jzgLXbfYA-oAX8M-68o&_nc_ht=scontent-yyz1-1.xx&oh=00_AT9j3USANx1vqB6wVNj8QjlvC-EXPK28_jXNE3Pp5o4P-g&oe=63249189"></img>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500">
                        <img src="https://scontent-yyz1-1.xx.fbcdn.net/v/t1.6435-9/45020371_880134145512072_7955011659691458560_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=oOuV0Ciq8v0AX96UlGo&_nc_ht=scontent-yyz1-1.xx&oh=00_AT_8YTUyaJIF8O3YgUW-V_AsPfztMBy1a6lkduj6WBTKDA&oe=6324CC09"></img>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <img src="https://scontent-yyz1-1.xx.fbcdn.net/v/t1.6435-9/44926429_880134132178740_7864140816111894528_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bcIkzMJdoLsAX9O1zV0&_nc_ht=scontent-yyz1-1.xx&oh=00_AT-SnM3UZxD0CuWQnC5COyLb6mU_1HWX_ELxqGI6TfjDgA&oe=6323BAC3"></img>
                    </div>
                </div>
                <Link to="/contact/book" className="free-trial">Book a free trial lesson today</Link>
            </section>
        </div>
    )
}

export default About;
