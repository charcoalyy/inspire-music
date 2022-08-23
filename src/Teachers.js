import Banner from "./Banner";
import InfoCard from './Infocard';
import { Route, Routes } from 'react-router-dom';
import { specificTeachers } from "./SpecificLists";

const Teachers = () => {

    const categories = [
        <h1 className="teacher-categories-title">By Instrument</h1>,
        <section className="teacher-categories">
            <InfoCard iden="teachers/piano" alt="person playing piano" title="Piano" image="https://londonmusicacademy.com/wp-content/uploads/2018/06/advanced-piano-lessons.jpg"/>
            <InfoCard iden="teachers/strings" title="Strings" alt="person playing violin" image="https://e7zc76865y2.exactdn.com/wp-content/uploads/2021/06/Tropika-club_Best-Violin-Lesson-Teachers-and-Schools-in-Singapore.png?strip=all&lossy=1&ssl=1"/>
            <InfoCard iden="teachers/woodwinds" title="Woodwinds" alt="saxophone, clarinet, and flute" image="https://media.istockphoto.com/photos/clarinet-flute-and-alto-sax-collage-picture-id157310947?k=20&m=157310947&s=612x612&w=0&h=Bs9JV06FORDNPRA66Q068RwLZr9wnJq6xhg2I8E73pQ="/>
            <InfoCard iden="teachers/voice" title="Voice" alt="woman singing into microphone" image="https://images.unsplash.com/photo-1549349807-4575e87c7e6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"/>
            <InfoCard iden="teachers/guitar" title="Guitar" alt="person playing guitar" image="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3VpdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
            <InfoCard iden="teachers/drums" title="Drums" alt="sticks lying on drumkit" image="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJ1bXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
        </section>
      ]

    return(
        <div className="teachers">
            <Banner clickable="true" title="Our Teachers" id="teachers-banner" desc="With university music degrees, performance experience, and passion for pedagogy, our teachers are equipped to foster musical talent." />
            <Routes>
                <Route path="/" element={categories}  />
                <Route path="/piano" element={specificTeachers.piano} />
                <Route path="/strings" element={specificTeachers.strings} />
                <Route path="/woodwinds" element={specificTeachers.woodwinds} />
                <Route path="/voice" element={specificTeachers.voice} />
                <Route path="/guitar" element={specificTeachers.guitar} />
                <Route path="/drums" element={specificTeachers.drums} />

            </Routes>
        </div>
    )
}

export default Teachers;