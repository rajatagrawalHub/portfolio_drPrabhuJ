import AboutBg from "../Assets/AboutBg_Image.jpg";
import RowInfoComponent from "../Components/RowInfocomponent";

export default function AboutPage(){
    return(
        <div className="subsection flex-Column">
            <div className="fixed">
                <div className="btnTitle">
                    <p>About</p>
                </div>
                <p className="SectionTitle">Meet Me</p>
            </div>
            <img src={AboutBg} id="AboutImg" />
            <RowInfoComponent className="sticky" title={"Dr Prabhu Jayagopal"} subtitle={"Professor"} addressline1={"Department of Software & Systems Engineering"} addressline2={"SCORE, VIT Vellore"} addressline3={"Tamil Nadu, India"} />
            <p className="content">
            Dr. Prabhu Jayagopal is a distinguished Professor in the department of Software & Systems Engineering in School of Computer Science Engineering and Information Systems in Vellore Institute of Technology, Vellore, Tamil Nadu, India whose innovative research has advanced the fields of Machine Learning, Artificial Intelligence and IoT related with healthcare. Dr. Prabhu Jayagopal belong to beautiful city Kanchipuram in Tamilnadu, India, Dr. Prabhu Jayagopal pursued his undergraduate studies at the Vellore Institute of Technology, where he earned his B.tech degree in Information Technology in the year 2004. Inspired by his professors' research in computer science engineering, Dr. Prabhu Jayagopal went on to complete his Master's in 2007 and Ph.D. in Computer Science Engineering at the Sathyabama university, Tamilnadu, India, specializing in software systems in the year 2015. 
            <br></br>
            <br></br>
            Dr. Prabhu's academic career has been characterized by a relentless pursuit of research in computer science engineering. Dr. Prabhu Jayagopal's research has made significant contributions to both academia and industry with interests in innovative methods of thinking and different type styles of teaching and learning of total 16 years of experience as 1 year from industry and 15 years from Teaching. His work on COVID-19 detection based on lung CT scan using deep learning techniques has been instrumental in improving performance and scalability. Additionally, his investigations into Emphasizing privacy and security of edge intelligence with machine learning for healthcare is significant one.
            </p>

            <div className="contactDetailSection flex-Column">
                <div className="contactRow flex-row">
                    <div className="contactItem flex-row">
                        <p className="contactTitle">Email:</p>
                        <p className="contactDetail">j.prabhu@vit.ac.in</p>
                    </div>
                    <div className="contactItem flex-row">
                        <p className="contactTitle">Phone:</p>
                        <p className="contactDetail">+91-9842241883</p>
                    </div>
                </div>
                <div className="contactRow flex-row">
                    <div className="contactItem flex-row">
                        <p className="contactTitle">Address:</p>
                        <p className="contactDetail">Vellore,Tamil Nadu,India</p>
                    </div>
                    <div className="contactItem flex-row">
                        <p className="contactTitle">Organisation:</p>
                        <p className="contactDetail">VIT Vellore</p>
                    </div>
                </div>
            </div>
            <button className="btn btnBlack" >Downlaod CV</button>
        </div>
    );
}