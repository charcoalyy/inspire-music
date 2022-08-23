import { useState } from "react";
import Banner from "./Banner";
import Calendar from "./Calendar";
import Confirm from "./Confirm";

const BookTrial = () => {
    const [ studentName, setStudentName ] = useState('');
    const [ studentAge, setStudentAge ] = useState('');
    const [ studentLevel, setStudentLevel ] = useState('');

    const [ phoneContact, setPhoneContact ] = useState('');
    const [ emailContact, setEmailContact ] = useState('');

    const [ lessonCategory, setLessonCategory ] = useState('');
    const [ lessonType, setLessonType ] = useState('');
    const [ lessonTime, setLessonTime ] = useState('');

    const [ exit, setExit ] = useState(false);

    let numberedOptions = [];
    for (let i = 1; i < 11; i++) {
        numberedOptions.push(<option key={i}>RCM Level {i}</option>)
    }

    const handleClick = (e) => {
        setLessonCategory(e.currentTarget.id);
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.classList.remove('active-selection'))
        e.currentTarget.classList.add('active-selection');
    }

    const handleBooking = (e) => {
        e.preventDefault();
        validateField('categories', 4, 'Category required')
        validateField('time', 6, 'Time required')

        let allInformation = [studentName, studentAge, studentLevel, phoneContact, lessonCategory, lessonType, lessonTime]

        if (allInformation.includes('')) {
            console.log('error!!')
        } else {
            console.log(lessonTime);
            setExit(true);
            setLessonCategory('Select a category')
        }
    }

    const [ error, setError ] = useState(['', '', '', '', '', '', '']);

    const validateField = (value, i, message) => {
        if (value === 'categories' && lessonCategory === '') {
            const err = [...error];
            err[i] = message;
            setError(err);
        } else if (value === 'time' && lessonTime === '') {
            const err = [...error];
            err[i] = message;
            setError(err);
        } else if (!value) {
            const err = [...error];
            err[i] = message;
            setError(err);
        } else {
            const err = [...error];
            err[i] = '';
            setError(err);
        }
    }

    const changeTypeClearTime = (e) => {
        setLessonType(e.target.value);
        setLessonTime('');
    }
    
    return(
        <section className="book-trial">
            <Banner title="Book Your Free Trial Lesson" desc="Free of charge, this lesson will let you test the waters and start your music journey with Inspire Music!" noButton="none" id="booking-banner" />
            <form onSubmit={handleBooking}>
                <h3>Student Information</h3>
                <p>Fill these fields in according to the student attending the lesson.</p>
                <div>
                    <label>Full name</label>
                    <input required type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} onBlur={(e) => {validateField(e.currentTarget.value, 0, 'Name required')}}></input>
                    { error[0] && <section className="error">{error[0]}</section>}
                </div>
                <div>
                    <label>Age</label>
                    <input required type="number" value={studentAge} onChange={(e) => setStudentAge(e.target.value)} onBlur={(e) => {validateField(e.currentTarget.value, 1, 'Age required')}}></input>
                    { error[1] && <section className="error">{error[1]}</section>}
                </div>
                <div>
                    <label>Level</label>
                    <select required value={studentLevel} onChange={(e) => setStudentLevel(e.target.value)} onBlur={(e) => {validateField(e.currentTarget.value, 2, 'Level required (even if unknown)')}}>
                        <option></option>
                        <option key="unknown">Don't know</option>
                        <option key="preparatory">Preparatory (no experience)</option>
                        { numberedOptions }
                        <option key="ARCT">RCM Level ARCT</option>
                    </select>
                    { error[2] && <section className="error">{error[2]}</section>}
                </div>

                <h3>Contact Information</h3>
                <p>Fill these fields in according to who is most convenient to contact regarding the lesson.</p>
                <div>
                    <label>Phone number</label>
                    <input required type="text" value={phoneContact} onChange={(e) => setPhoneContact(e.target.value)} onBlur={(e) => {validateField(e.currentTarget.value, 3, 'Phone number required')}}/>
                    { error[3] && <section className="error">{error[3]}</section>}
                </div>
                <div>
                    <label>Email (optional)</label>
                    <input type="text" value={emailContact} onChange={(e) => setEmailContact(e.target.value)}/>
                </div>

                <h3>Lesson Information</h3>
                <p>Let us know what you want your lesson to be! If you change your mind later, call us.</p>
                <label>Lesson category</label>
                <div className="lesson-form-section" id="lesson-category-buttons">
                    <div className="button" id="instrumental" onClick={handleClick}>Instrumental</div>
                    <div className="button" id="theory" onClick={handleClick}>Music Theory</div>
                    <div className="button" id="other" onClick={handleClick}>Other</div>
                </div>
                { error[4] && <section className="error">{error[4]}</section>}
                <div className="lesson-form-section">
                    <label>Lesson type</label>
                    { lessonCategory === '' && <div className="placeholder">Select a category above</div>}
                    { lessonCategory === 'instrumental' && (<select required value={lessonType} onChange={changeTypeClearTime} onBlur={(e) => {validateField(e.currentTarget.value, 5, 'Lesson type required')}}>
                        <option></option>
                        <option>Piano</option>
                        <option>Woodwinds</option>
                        <option>Violin</option>
                        <option>Voice</option>
                        <option>Guitar</option>
                        <option>Drums</option>
                    </select>)}
                    { lessonCategory === 'theory' && (<select required value={lessonType} onChange={changeTypeClearTime} onBlur={(e) => {validateField(e.currentTarget.value, 5, 'Lesson type required')}}>
                        <option></option>
                        <option>Beginner (Preparatory – Level 4)</option>
                        <option>Intermmediate (Level 5 – 8)</option>
                        <option>Advanced (Level 9 – 10)</option>
                    </select>)}
                    { lessonCategory === 'other' && (<select required value={lessonType} onChange={changeTypeClearTime} onBlur={(e) => {validateField(e.currentTarget.value, 5, 'Lesson type required')}}>
                        <option></option>
                        <option>Little Music Explorers</option>
                        <option>Markham Youth Choir</option>
                    </select>)}
                    { error[5] && <section className="error">{error[5]}</section>}
                </div>
                <div className="lesson-form-section">
                    <label>Lesson time</label>
                    { lessonType === '' && <div className="placeholder">Select a type above</div>}
                    { lessonType !== '' && <Calendar setLessonTime={setLessonTime} lessonType={lessonType} />}
                </div>
                { error[6] && <section className="error">{error[6]}</section>}
                <button className="button">Book lesson</button>
            </form>
            {exit && <Confirm message={`Your ${lessonType.toLowerCase()} lesson has been booked!`} setExit={setExit} />}
        </section>
    )
}

export default BookTrial;