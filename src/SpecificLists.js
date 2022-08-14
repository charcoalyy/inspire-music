import Infoslot from './Infoslot';

export const scrollToDesired = () => {
    let desired = document.getElementsByClassName('scroll-to');
    desired[0].scrollIntoView(true);
}

export const specificLessons = {
    instrumental: [
    <section className="specific-lesson-desc scroll-to">
        <h1>Instrumental Lessons</h1>
        <p>Regardless of level, students benefit from a teacher’s dedicated attention. Personalized lessons help your child take their study to the next level. Not sure which instrument to pick? Take an obligation-free assessment! You will also be able to switch instruments later on at no additional cost.</p>
    </section>,
    <Infoslot title="Piano" age="5+" duration="30min, 45min, 60min" price="50" desc="The piano is not just played with hands; students are taught to use all of their senses to explore their music. Various techniques are developed while the rich history and theory accompanying each piece are emphasized. Students truly understand and listen to the music, generating a fun and effective learning process." image="https://miro.medium.com/fit/c/294/294/1*i3higklIhXej3EgJlFoxGQ.jpeg?resize=300%2C300&ssl=1" />,
    <Infoslot title="Violin" age="5+" duration="30min, 45min, 60min" price="50" desc="Students from beginner to ARCT level can benefit from our renowned teacher, who adopts a fun, structural approach building a solid foundation for future studies. Once at the intermediate level, students are encouraged to join chamber groups or ensembles. Combined with regular performances, learning becomes fun and rewarding." image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2015/03/violion.jpg?resize=300%2C300&ssl=1" />,
    <Infoslot title="Voice" age="5+" duration="30min, 45min, 60min" price="50" desc="Students from beginner to ARCT level can benefit from our renowned teacher, who adopts a fun, structural approach building a solid foundation for future studies. Once at the intermediate level, students are encouraged to join chamber groups or ensembles. Combined with regular performances, learning becomes fun and rewarding." image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-20-at-3.15.55-PM.png?resize=300%2C300&ssl=1" />,
    <Infoslot title="Guitar" age="5+" duration="30min, 45min, 60min" price="50" desc="Guitar lessons at Inspire Music include a custom-designed combination of techniques and repertoire. Our teachers are well-equipped to prepare student for RCM exams, performing on stage, or just jamming out in their garage! Students also have the opportunity to join a band." image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2015/03/guitar.jpg?resize=300%2C300&ssl=1" />,
    <Infoslot title="Drums" age="5+" duration="30min, 45min, 60min" price="50" desc="Whether you are into Jazz, Rock or Funk, our teachers are eager to share their passion with you. Lessons will be designed based on your interest and level, ranging from basic hand-foot coordination to advanced poly-rhythms and ethnic beats." image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2015/03/drum.jpg?resize=300%2C300&ssl=1" />
    ],
    theory: [
    <section className="specific-lesson-desc scroll-to">
        <h1>Music Theory Lessons</h1>
        <p>From beginners to advanced learners, students will participate in group theory lessons based their approximate level and age.</p>
    </section>,
    <Infoslot title="Elementary RCM Theory" age="7+" duration="60min" price="40" desc="Includes preparatory to level 4. Students will learn the rudiments of music theory, such as rhythm, notation, key signatures, etc. to supplement their playing." image="https://rcmusic-kentico-cdn.s3.amazonaws.com/rcm/media/main/landing%20pages/celebrate%20theory/rcm-theory-homepage.jpg" />,
    <Infoslot title="Intermediate RCM Theory" age="7+" duration="60min" price="40" desc="Includes level 5 to 8. Students will learn the rudiments of music theory in further detail, such as rhythm, notation, key signatures, etc. to supplement their playing." image="https://www.cdmdance.com/wp-content/uploads/2019/01/Music-Theory-CDM.png" />,
    <Infoslot title="Advanced RCM Harmony" age="7+" duration="60min" price="40" desc="Includes level 9 and 10. Students will learn the sophisticated techniques that go into harmony analysis and composition." image="https://www.clearnote.net/assets/images/celebrate_theory_harmony_counterpoint_and_analysis_set.png" />,
    <Infoslot title="Advanced RCM Music History" age="7+" duration="60min" price="40" desc="Includes level 9 and 10. Students will be analyze era-specific pieces and learn about a variety of famous composers." image="https://cdn.shopify.com/s/files/1/0083/5538/1327/products/theory_coverspread_-_history_-_bookstore_500x.jpg?v=1573078064?" />
    ],
    other: [
    <section className="specific-lesson-desc scroll-to">
        <h1>Other Lessons</h1>
        <p>Students looking for instruction outside of traditional private lessons will benefit from our unique group programs.</p>
    </section>,
    <Infoslot title="Little Music Explorers" age="3-5" duration="30min" price="40" desc="Includes preparatory introductions to singing, keyboard, and percussion. Designed for the curious little ones, this series of lessons cultivates a strong interest in music, encouraging children to explore different instruments and paving a path for later music studies." image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFnsw-ngnOIod-5t1jK5CxDkujA4nOJQxGgGdhhfdNENJ3YuU9DfeI2a0tV-UagKH0slc&usqp=CAU" />,
    <Infoslot title="Choir" age="6-18" duration="60min" price="40" desc="Includes beginner to advanced skill levels. Looking for a fun group activity to improve your child’s social skills, confidence, ability to work next to distractions, and vocabulary? Markham’s Youth Choir is the perfect activity!" image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2015/03/choir-kids.jpg?resize=300%2C300&ssl=1" />
    ]
}


export const specificTeachers = {
    piano: [
        <h1 className="specific-teachers scroll-to">Piano</h1>,
        <Infoslot slotName="specific-teacher" title="Dr. Daniel" image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2018/01/Piano-Daniel3.jpg?w=599&ssl=1" 
            desc="Dr. Daniel is a Canadian composer and pianist, who holds the Doctor of Musical Arts degree at the University of Toronto. His productions are a clear reflection of his intimate, vast, and diverse knowledge of music." 
            desc2="Daniel has been involved in both national and international festival series. He has numerous international commissions and premieres, which include Canada, United States, Italy, Serbia, Switzerland, Belgium, The Netherlands and Chile. Daniel has also appeared as guest composer on CBC Radio and has received numerous reviews, some of which gained him international exposure as it did on Dutch Radio 4. His recent collaborations include Tufaan (Storm) with Orchestre de la Francophonie—Jean-Philippe Tremblay and Simon Rivard, as well as Asrāre Azal with world renowned theremin player, Thorwald Jørgensen, the creation of a piece based on a poem by Persian poet Omar Khayyam set for harp, theremin and string orchestra – Duo Jørgensen – De Leuw – premiered in both Europe and North America."
            desc3="As a teacher, Daniel continuously attempts to bring out the creativity in his students, both in piano performance and music composition. He is also an excellent educator in music theory, preparing students for their RCM examinations. Furthermore, Daniel is a specialist in the performance and interpretation of baroque music, specifically that of J. S. Bach’s keyboard works, particularly the Art of Fugue. Both as a pianist and organist, Daniel strives to re-surface the once hidden gems of such great masters." />,
        <Infoslot slotName="specific-teacher" title="Deepani" image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2019/10/Deepani_Piano.jpg?resize=600%2C605&ssl=1" desc="Deepani studied Piano Performance in Sir Lanka, Italy, UK and Canada. She completed her undergraduate and post-graduate studies at the Royal Conservatoire of Scotland, UK and recently, she was awarded the Canadian National Gold medal for LRCM Performance.
        While studying in Scotland for five years, she was the winner of two Bach prizes and recipient of the prestigious TG More scholarship for her Postgraduate studies.  Deepani made her debut in Scotland with the Glasgow Chamber Orchestra playing Schumann’s Piano Concerto.  She has had Public Master Classes with Pascal Rogè, Fou T’song, Roger Vignoles, Jeffrey Parsons, John Lill, Madame Shishkow, Ekatarina Murina and Dominique Merlet.
        Deepani received the National Gold medal by getting the highest mark in North America for LRCM Piano Performance.  She has been teaching the RCM syllabus since 1997 while pursuing her own musical dreams and growth.  Her students have gone on to become Music Majors in Performance, Pedagogy and Music Therapy, some are currently high school music teachers." />,
        <Infoslot slotName="specific-teacher" title="Leah" image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2018/06/leah-2-1.jpg?resize=600%2C723&ssl=1" desc="Leah is a performing pianist and a music educator. She has performed as a concert soloist, chamber musician, and as an accompanist both internationally and across North America. Leah holds a Master of Music degree in Piano Performance from the University of Missouri and was a full scholarship recipient. During which, she has studied with world-renowned concert pianist Dr. Peter Miyamoto, who holds prize from the National Chopin Competition, pianist Victor Rosenbaum, Frederic Chiu, just to name a few. Leah has her bachelor of music degree from Sichuan Conservatory of Music, also in piano performance.
        Leah has performed in numerous solo concerts in the US and Canada for the past 10 years, she has accompanied the University of Woman Choral, the Show-Me Opera productions including the world-renowned opera La Cenerentola and Cosi Fan Tutte. In 2013 she was featured an Emerging Artist Competition winner at the Missouri Theatre. In the same year, Leah received Honorable Mention in the Missouri Music Teachers Association’s (MMTA) Collegiate Honors auditions and she is also a member of the Music Teacher National Association (MTNA).
        Leah has dedicated to teaching, she is known for her passionate and effective teaching styles. Her students have maintained consistent high scores in RCM exams. Many of her students accomplished numerous achievements, including performing at the Carnegie Hall as well as winning top prizes in competitions such as Little Mozart, CMC, North York Music Festival, and Markham Music Festival." />,
        <Infoslot slotName="specific-teacher" title="Grace" image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2021/03/Piano-Grace1.jpeg?w=640&ssl=1" desc="Grace is a Korean-Canadian pianist based in Toronto, Canada. She began her musical studies at the of 4 with her mother and showed promising musical talent from a young age. She has won numerous awards throughout her career including first prizes at the Kiwanis Music Festival, Peel Music Festival, and the Canadian Music Competition, and is a recipient of multiple scholarships including the Orford Summer Music Academy Scholarship and the Mary-Margaret Webb Piano Performance Award from the University of Toronto. She has performed in Canada, Italy, and South Korea and debuted as a featured soloist with the Korean Canadian Symphony Orchestra at the age of 16. Recently, she participated in the Toronto Summer Music Festival under the Brayton Polka Fellowship and had the privilege to perform alongside world-renowned artists including Jonathan Crow, Camden Shaw, and Charles-Richard Hamelin.  As a multi-talented musician, Grace also plays the clarinet and was the concertmaster of the Earl Haig Symphonic Band during her time in the Claude Watson Program for the Arts at the Earl Haig Secondary School. She is also an avid teacher and a church musician. Grace holds a Master’s degree in Piano Performance at the University of Toronto under the tutelage of Jamie Parker, the pianist of the Gryphon Trio." />,
        <Infoslot slotName="specific-teacher" title="Amy" image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2019/10/amy_piano.jpg?w=2000&ssl=1" desc="Amy graduated from the school of the Arts, Media, Performance and Design in York University with a major in Piano Performance. She received a number of prizes from festivals, including the International Kawai Competitions. Amy studied with world-renowned pianist Christina Petrowska Quilico, who is hailed by the New York Times for her “promethean talent” at her professional debut at age 14 and was honored with the 2007 Friends of Canadian Music Award from the Canadian Music Centre and Canadian League of Composers.
        Amy has been teaching piano for many years and has helped numerous students to attend music competitions, festivals as well as the RCM exams, many of whom achieved with top prizes/scores. Amy teaches piano and music theory, using teaching methods tailored to each individual student. Her teaching style is patient, yet enthusiastic and encouraging. She enjoys giving praises for things that a student does well during the lessons time or during their practice sessions throughout the week. Amy’s known for her ability to recognize a student’s strength and continues to build on it; her students find it very encouraging and fun to study with Amy." />,
        <Infoslot slotName="specific-teacher" title="Sammi" image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2019/10/Sammi_piano1.jpg?w=1423&ssl=1" desc="Sammi was born into a family of artists, discovering the joy of piano at  the age 5 and loving any form of arts since. She is a multi-talented artist who performs in all kinds of stages. She is a pianist, classical singer, dancer, actress, member of a choir and a rock band. Sammi has a passion for sharing her music, not only with performances, but also through teaching and encouraging her students.
        Sammi Lee has acquired MMT, Master of Music Therapy and BFA, Bachelor of Fine Arts with Honours; specialization in Classical Piano at York University. She has been trained in Guitar, Voice and Orff Instruments.
        Sammi has experience teaching music at private schools and in-home lessons worldwide. She utilizes repertoire of all types of music literature, including traditional and contemporary that are appropriate for all ages and skill levels to provide creative and professional music lessons. Sammi’s teaching methods are adaptive to varying aptitudes in each student and instill the joy of learning and making music." />,
        <Infoslot slotName="specific-teacher" title="Elisa" image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2020/10/IMG_9828-scaled.jpg?resize=600%2C900&ssl=1" desc="Elisa is a classical pianist who graduated with a Bachelor of Music with Honours in Music Education from Western University in London, ON, and she has also received her ARCT certificate in Piano Performance. She currently teaches piano and theory to students of various ages and levels. She is thankful to have had countless opportunities and experiences in various musical groups, choirs, and bands as a conductor and performer.
        Not only has she sung and played piano, bass and guitar at EFC New Life Gospel Church in Scarborough for more than 10 years, but she has led music teams overseas with CTI Music Ministries – a travelling music organization – to countries like Singapore, Hong Kong, Taiwan and Colombia to perform at nursing homes, homeless shelters, coffee shops, schools etc. Her years of traveling abroad and witnessing the impact music have on people of all ages and cultures have motivated her and grown her passion to teach music. She enjoys the challenge of working with children from various backgrounds, musical experience, and personalities. Her enthusiasm, patience, dedication and warm personality have inspired students to discover the joys and benefits of learning music." />,
        <Infoslot slotName="specific-teacher" title="Euphemia" image="https://www.heritagemusicacademy.ca/wp-content/uploads/euphemia-ho.jpeg" desc="Euphemia has taught piano and music theory for a number ofyears.  She started learning piano at the age of seven and since then has participated in numerous festivals, including the Kiwanis and others.  Having actively served for over ten years at Malvern Baptist Church as the worship team pianist, Euphemia has also composed several original compositions mainly for piano and piano and violin, including Prelude in E flat Major, which has been featured in the CD Gathas: The Message of Zarathushtra.  She has received her ARCT piano performance certificate in 2010, having studied under Sofia Elrichman of Majesty Music School.  At York University she has studied harmony and counterpoint under Art Levine and composition under the guidance of David Mott and Casey Sokol.  She has performed several recitals and was the accompanist for Ariel Mao for a special television broadcast on Fairchild TV.  Having prior experience in music arrangement and improvisation, Euphemia aims to spark a lifelong passion and appreciation for music and music performance in kids, adolescents and adults alike." />
    ],
    strings: [
        <h1 className="specific-teachers scroll-to">Strings</h1>, 
        <Infoslot slotName="specific-teacher" title="Boris (Violin)" image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2018/01/Violin-Boris.png?resize=743%2C1024&ssl=1" desc="Violinist Boris grew up in Toronto, Canada where he began his studies on the violin at the Royal Conservatory of Music. He has been a top prizewinner in the Canadian Music Competition in both 1996 and 1998. Boris holds a Bachelor’s degree and Performer Diploma from the Indiana University Jacobs School of Music, where he pursued intensive studies with Nelli Shkolnikova and Mauricio Fuks as a scholarship recipient as well as an Artist Diploma from the Sweelinck Academy at the Conservatorium van Amsterdam with Valentin Zhuk. In 2006 he was appointed Assistant Concertmaster of the Orquestra De La Comunitat Valenciana in Valencia, Spain by music director Lorin Maazel. In this capacity he had the opportunity to work with a wide array of artists from Placido Domingo, Leonidas Kavakos, Daniel Barenboim, Anna Netrebko, Jesus Lopez Cobos as well as performing in the Festival of The Mediterranean under the directorship of Zubin Mehta where he undertook in live DVD recordings of Wagner’s Ring Cycle, as well as Puccini’s Turandot with stage direction by Chen Kaige. Since returning to Canada in 2009, he has worked with such ensembles as the Toronto Symphony Orchestra, Canadian Opera Company and The National Ballet of Canada." />, 
        <Infoslot slotName="specific-teacher" title="Dr. Serena (Cello)" image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2021/08/Cello-Serena.png?resize=600%2C819&ssl=1" desc="Dr. Serena is a teaching artist, appearing as a soloist, chamber musician, orchestra musician, and educator. She holds the Doctor of Musical Arts degree from Michigan State University, a Master’s of Music degree from the Mannes College the New School for Music and Bachelor degree in Cello Performance from Taipei National University of the Arts." desc2="The 2nd prize winner of the American Fine Arts Festival― Golden Era of Romantic Music International Competition, Dr. Serena was given her solo debut at the Carnegie Weill Recital Hall in the winners’ concert in 2016. She was invited as a jury panellist in the 18th and 19th Capital Taipei International Music Competition and music-gifted program in Taiwan. Ms. Serena’s performances have taken her to Asia, Europe, and North America, including renowned venues in New York City, such as Alice Tully Hall in the Lincoln Center, Steinway Hall, The Symphony Space, etc." desc3="Dr. Serena’s teaching philosophy is patient, caring and learner-centred to teach according to students’ aptitudes and help them reach the best of their ability through dialogue pedagogy to cultivating students’ independent thinking ability, appropriate learning attitude, and growth mindset. In addition to considering students’ technical skills and helping them understand how to interpret each piece’s standards and aesthetics for play, she especially prioritizes students’ mental and physical wellness, teaching them knowledge of injury prevention, healthy and efficient practice skills, and strategies to manage stage fright. Overall, her teaching goal is to help enrich students’ lives through music, as having happiness and positive music-playing experiences is an invaluable treasure in their lives." />, 
        <Infoslot slotName="specific-teacher" title="Xinya (Cello)" image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2021/08/Cello-Xinya.jpg?w=540&ssl=1" desc="Born in Chengdu, China, Xinya began studying cello at age 4, She attended high school at The Sichuan Conservatory of Music. Later Xinya earned a bachelor’s degree in cello performance from the Shanghai Conservatory of Music and after graduation, joined the cello section of the Hangzhou Philharmonic Orchestra, one of the most professional orchestras in China. One year after, she was offered a full scholarship and an assistantship to Bowling Green State University in Ohio, USA for graduate cello studies. At BGSU, she studied with Dr. Alan Smith and became a member of the Graduate String Quartet. During her graduate studies at BGSU. She became principal cello of the Bowling Green State University Philharmonia and joined the Perrysburg Symphony Orchestra (OH) as principal cello. Ms. Zhou completed her doctoral degree in cello performance at the University of Cincinnati and moved to Toronto with her family." desc2="Xinya’s philosophy of teaching involves treating every student, no matter their age or level of development, on an individual basis. She believes that every student has unique qualities and that her responsibility as a teacher is to bring out those qualities without any comparison to others. Her students are all over the US and China. In China, many of her students have received offers from the Shanghai Conservatory of Music, and one of her students recently joined the Hangzhou Philharmonic Orchestra. After coming to the U.S., she opened her own cello studio. Her students in the U.S. have won many rewards in different competitions.  So far, all her students passed the Royal Conservatory Music (RCM) exam with high scores. In order to increase her students the experience of ensemble music, she created chamber music groups." />, 
    ], 
    woodwinds: [
        <h1 className="specific-teachers scroll-to">Woodwinds</h1>,
        <Infoslot slotName="specific-teacher" title="Tracey" image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2021/08/Flute-Tracey.jpg?resize=600%2C900&ssl=1" desc="Growing up in a musical family sparked Tracey‘s interest in music at a young age.  Tracey holds a Bachelor’s Degree in Music Education and a Master’s Degree in Music Performance and Literature from Western University. During her undergraduate degree she began teaching woodwind instruments and piano to all ages of students.  She strives to deliver to her students memorable music lessons and to share her love of music in an engaging and interactive way." desc2="Throughout her music career, Tracey has performed in orchestras and chamber groups throughout the GTA and the London area.  For two years she was principal flute in Western University and she won the Winds, Brass, Percussion Concerto Competition where she performed Chaminade’s Concertino for Flute and Wind Ensemble.  She hopes to one day perform outside of Canada and strives to continue pushing herself as a musician by learning from and meeting other established musicians." />,
        <Infoslot slotName="specific-teacher" title="Karin" image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2019/10/Karin-2-Sax.jpg?resize=600%2C813&ssl=1" desc="Karin is a saxophonist/clarinettist and composer born in South Africa. Since the age of 6 when she started her music career with piano, she has received multiple awards and prizes at eisteddfods and music competitions. Some highlights include being the runner-up in the woodwind category of the ABSA National Youth Music Competition, being invited to participate in the Unisa South African Music Scholarship Competition and was one of ten finalists, and during the same year she was chosen as one of nine soloists to perform with the Cape Town Philharmonic Orchestra at the annual Artscape Youth Music Festival, where she premiered Allan Stephenson’s Youth Concertino on Tenor Saxophone." desc2="She received her BAFA (Honours) degree from the Michaelis School of Fine Arts at the University of Cape Town, and she also holds a Performance Diploma (DipABRSM) and Licentiate (LRSM) from the Associated Board of the Royal Schools of Music, both with distinction. She has played in many orchestras and ensembles – including being principal clarinettist of the 2011 South African Sasol National Symphony Orchestra, principal tenor saxophonist of the UCT Wind Band, and baritone saxophonist for the South African National Youth Wind Ensemble. She is also comfortable playing in jazz/folk bands and was a member of groups such as Georgetown, Stolen Horses and Red Rhapsody Jazz Band, also recording on all their respective music albums." />
    ], 
    voice: [
        <h1 className="specific-teachers scroll-to">Voice</h1>,
        <Infoslot slotName="specific-teacher" title="Rebecca" image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2018/10/Rebecca-Headshot.png?resize=600%2C800&ssl=1" desc="Rebecca graduated from the Masters of Music program at University of Toronto where she studied under the esteemed soprano Lorna MacDonald. During her undergraduate degree, Rebecca performed as a soprano soloist in Beethoven’s Choral Fantasy with the University of Toronto Symphony Orchestra under the baton of Uri Mayer. In addition, she has had the pleasure of performing at the Toronto Arts and Letters Club, The Alliance Francaise Toronto and with the Toronto Welsh Male Voice Choir. Her operatic roles have included Fiordiligi in Mozart’s Così fan tutte, Rose Maurrant in Kurt Weill’s Street Scene, Diana in Offenbach’s Orpheus in the Underworld (Halifax Summer Opera Festival), both the Sandmännchen and Taumännchen in Humperdinck’s Hänsel und Gretel (Toronto Opera Initiative) and Erste Dame in Mozart’s Die Zauberflöte (LMD Studio). Rebecca has appeared in masterclasses with manydistinguished artists including Warren Jones, Martin Katz, and Joan Dornemann. Recently, Rebecca was a Young Artist at Against the Grain’s Inaugural Summer Intensive." desc2="While pursuing performance opportunities, Rebecca has been teaching voice to young students for several years. She believes in developing all aspects of singing and music skills through a variety of techniques including breathing and posture, ear training, sight reading, diction, etc. Always cognizant of students’ strengths and needs while promoting a love of singing, she is committed to optimizing each singer’s unique voice and their confidence in various performing contexts and genres." />,
        <Infoslot slotName="specific-teacher" title="Angela" image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2022/02/Angela-Gibbon-headshot.jpg?resize=600%2C900&ssl=1" desc="Angela is a full lyric soprano who completed her Master’s of Vocal Literature and Performance at Western University and a BFA in Vocal Performance (Honours) at York University. Angela is active as a soloist in both opera and concert settings. Angela has performed the opera roles of Sandrina in Mozart’s La finta giardiniera, Fiordiligi in Così fan tutte, Micaëla in Carmen and Donna Anna in Don Giovanni. Recent concert engagements include the soprano solos in Mozart’s Vesperae solennes de confessore with the York University Concert and Chamber Choirs and Vivaldi’s Gloria with Chorus York. Angela recently won second prize at the Clifford Poole Vocal Competition, performing with the Cathedral Bluffs Symphony Orchestra. Angela was also a finalist at the 2020 Toronto Mozart Vocal Competition. In October of 2020, Angela sang the roles of Sandman and the Dewman in Vera Causa Opera’s movie production of Humperdinck’s Hansel and Gretel. Angela is very happy to be teaching Voice with Inspire Music Academy and can offer lessons in classical voice, pop or musical theatre." />
    ],
    guitar: [
        <h1 className="specific-teachers scroll-to">Guitar</h1>,
        <Infoslot slotName="specific-teacher" title="Anton" image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2018/01/Guitar-Anton.jpg?resize=684%2C1024&ssl=1" desc="Composer, performer, and teacher, Anton has been playing professionally for over twenty years in a variety of musical contexts. He is a member of SOCAN and has composed original works for guitar, as well as world music compositions that fuse elements of Bulgarian folk music, flamenco, Latin music, and jazz. Anton began playing tambura and guitar in Bulgaria at the age of six. After studying classical guitar, he performed as a soloist with the orchestra Pirinski Zvutzi in Blagoevrad. Later he became a member of the Valeri Dimchev Trio where his many performances and recordings blended traditional Bulgarian folk music with modern and classical music styles. In 1995, Anton settled in Atlantic City, New Jersey where he taught guitar, performed regularly as a solo guitarist, and became a member of the American Federation of Musicians. Since 1998, Anton has composed and performed in Toronto, his new home. There he also teaches classical, folk, rock, and jazz guitar and his students have won top prizes at the Kiwanis Music Festival. Anton was recently awarded two Canada Council grants for both writing and recording original compositions that draw from his Bulgarian roots and other forms of world music." />,
        <Infoslot slotName="specific-teacher" title="Brandon" image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2020/10/Guitar-Brandon-scaled.jpg?resize=600%2C899&ssl=1" desc="Brandon is Toronto-based Jazz Guitarist, Composer and Educator. He has been studying music since the age of 10 and is confident with Jazz, Blues, Rock, and Classical music. Brandon graduated from the music program at York University in 2017, and has performance experience from venues all over Toronto. His compositions have been featured at venues like The Emmet Ray, Alchemy, The City of Toronto’s YYZ Live series at Pearson International Airport, the 2019 Toronto Undergraduate Festival, Jazz FM’s “Jazzology” series, among others." desc2="Brandon has been teaching music since 2016. He has experience teaching all ages, and many musical styles. He focuses on accommodating lessons to students’ interests to inspire them to have a rewarding future in music. Many of Brandon’s students have received Royal Conservatory of Music Certifications, and he strives to ensure his students are prepared for University auditions when the time comes. Brandon always tries to improve as a musician and a teacher, thus he plans to continue his studies by achieving a Bachelor’s Degree in Education." />
    ],
    drums: [
        <h1 className="specific-teachers scroll-to">Drums</h1>,
        <Infoslot slotName="specific-teacher" title="Tim" image="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2018/03/Tim.jpg?resize=600%2C800&ssl=1" desc="Toronto based musician, Tim has had the good fortune of performing and/or recording with many acclaimed Canadian artists from many genres, including Rich Underhill, Ron Davis, Quique Escamilla, Amelie and Les Singes Bleus, Chris Gale, etc. Tim’s own band, the Worst Pop Band Ever, has also played to packed clubs and festivals across North America, reached #1 on college radio charts and been featured on All About Jazz, CBC, Canadian Musician, etc. PPF House, a multimedia production house he co-runs, has has provided music and sound design for the CBC, Disney, OMNI, Teletoon and even the Governor General’s office. Their 2016 project for the NFB, “BAM”, premiered at TIFF and was nominated for a Canadian Screen Award." desc2="Along with two decades of private instruction experience, Tim created the Jazz For Juniors workshop which teaches elementary and secondary students about Jazz and improvisation. He has worked extensively with the TDSB, JazzFM 91.1 Educational Outreach, and the Jazz Performance and Education Centre, as well as private schools like Upper Canada College, Stirling Hall and PACE.  He’s also done numerous master classes across Canada at the post-secondary level including master classes at Carleton University, Upper Canada College, Guelph University, Grant MacEwan College and Western University." />
    ]
}

export const lessonMenuItems = [
    {
        title: "Instrumental",
        path: "instrumental",
        className: "dropdown-item"
    }, 
    {
        title: "Music Theory",
        path: "theory",
        className: "dropdown-item"
    }, 
    {
        title: "Other",
        path: "other",
        className: "dropdown-item"
    }
] 

export const teacherMenuItems = [
    {
        title: "Piano",
        path: "piano",
        className: "dropdown-item"
    }, 
    {
        title: "Strings",
        path: "strings",
        className: "dropdown-item"
    }, 
    {
        title: "Woodwinds",
        path: "woodwinds",
        className: "dropdown-item"
    }, 
    {
        title: "Voice",
        path: "voice",
        className: "dropdown-item"
    }, 
    {
        title: "Guitar",
        path: "guitar",
        className: "dropdown-item"
    }, 
    {
        title: "Drums",
        path: "drums",
        className: "dropdown-item"
    }, 
]