
import "./Testimonies.css";
import student1 from '../../assets/student1.jpg' ;
import student2 from '../../assets/student2.jpg' ;
import student3 from '../../assets/student3.jpg';
import student4 from '../../assets/student4.jpg';
import student5 from '../../assets/student5.jpg';
import Carousel from 'react-elastic-carousel';

function TestimonyCard({studentAvator, studentName,title,text}){
    return(
      <div className="testimony-card">
        <div className="student-details">
            <img src={studentAvator} alt={studentName} />
            <h4 className="testimony-card-student-mame">{studentName}</h4>
            <h4 className="testimony-title">
                {title}
            </h4>
            <p className="testimony-text">{text}</p>
        </div>
      </div>  
    )
}

function Testimonies() {
    const testimonies =[
 
        {
         studentAvatar:student1,
         studentName : "alice wanjiru",
         title:"amazing journey with MUTC",
         text:"MUTC has greatly improved my tech skills and connected me with industry professionals.",
         },
 
 
         {
             studentAvatar:student2,
             studentName : "john doe",
             title:"Great Experience",
             text:"MUTC has greatly improved my tech skills and connected me with industry professionals.",
         },
         
             {
                 studentAvatar:student3,
                 studentName : "Lisper kiama",
                 title:"Learning and Fun",
                 text:"MUTC is a fantastic place for hands-on learning and collaborating with like-minded peers.",
                 },
 
 
 
                 {
                     studentAvatar:student4,
                     studentName : "Ephantus Hakim",
                     title:"Innovative Environment",
                     text:"I love how the club encourages innovation and entrepreneurship. Truly a supportive community.",
                     },
 
 
                     {
                         studentAvatar:student5,
                         studentName : "john mwangi",
                         title:"Tech Enthusiast's Dream",
                         text:"Being a part of MUTC has been both educational and inspiring. Highly recommend joining!",
                         },
 
             ];
    return(
       <section>
        <h2 className='testimoniesheader'>voices of innovation</h2>

        <div className="testimonies-container">
            <Carousel>
    {
        testimonies.map((testimony, i) => (
            <TestimonyCard
                key={i}
                studentAvatar={testimony.studentAvatar}
                studentName={testimony.studentName}
                title={testimony.title}
                text={testimony.text}
            />
        ))
    }
      </Carousel>  
</div>

        
       </section> 
    )
}

export default Testimonies;