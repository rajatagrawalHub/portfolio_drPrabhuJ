import RowInfoComponent from "../Components/RowInfocomponent";
import RowInfoComponentv2 from "../Components/RowInfoComponentv2";
import RowInfoComponentv3 from "../Components/RowInfocomponentv3";

const certificateLink = [
    "https://www.coursera.org/account/accomplishments/verify/7CN229ZE57GW",
    "https://www.coursera.org/account/accomplishments/verify/9PZC28EL3W4F",
    "https://www.coursera.org/account/accomplishments/verify/87Q7RH3X8MTN",
    "https://www.coursera.org/account/accomplishments/verify/DT36LJ6XNXEH",
    "https://www.coursera.org/account/accomplishments/verify/G5YSR5MBCM97",
    "https://www.coursera.org/account/accomplishments/verify/JYQL6BEUEBHV",
    "https://www.coursera.org/account/accomplishments/verify/KPNUPJU3VZCA",
    "https://www.coursera.org/account/accomplishments/verify/KPNUPJU3VZCA",
    "https://www.coursera.org/account/accomplishments/verify/TL3CTKBMWC4S"
];

  
export default function AchievementPage(){
    return(
        <div className="subsection flex-Column" id="achievementSection">
            <div className="fixed">
                <div className="btnTitle">
                    <p>Achievements</p>
                </div>
            </div>
            <p className="SectionTitle">Funded Project</p>
            <RowInfoComponent title={"SAR 30000"} subtitle={"Institutional Financial Track - 2020"} addressline1={"Ministry Of Education"} addressline2={"king Faisal University"} addressline3={"Saudi Arabia"} />
            
            <p className="content">
                Received a research grant on <strong>“Weather-based maize yield forecast in Saudi Arabia using statistical analysis and machine learning.”</strong> This project has been accepted and funded by the Kingdom of Saudi Arabia, Ministry of Education, and King Faisal University under the Institutional Financing track-2020. The grant, worth SAR 30,000, will support the development of advanced forecasting models that leverage weather data to predict maize yields, aiming to enhance agricultural productivity and sustainability in the region.
            </p>
            <p className="SectionTitle">Patents</p>
            <RowInfoComponent title={"Indian Patent"} subtitle={"IoT Based Smart Infant Monitoring System"} addressline1={"Application No.: 202041048246A"} addressline2={"Published: November 2020"} addressline3={""}/>
            <RowInfoComponent title={"Indian Design Patent"} subtitle={"Server Rack"} addressline1={"Design No.: 354503-001"} addressline2={"Published: December 2021"} addressline3={""} />

            <p className="SectionTitle">Certifications</p>
            <RowInfoComponentv2 title={"Introduction to Artificial Intelligence"} subtitle1={"IBM"} subtitle2={"2023"} link={certificateLink[0]} />
            <RowInfoComponentv2 title={"Agile Software Development"} subtitle1={"University of Minnesota"} subtitle2={"2022"} link={certificateLink[1]} />
            <RowInfoComponentv2 title={"Software Processes and Agile Practices"} subtitle1={"University of Alberta"} subtitle2={"2020"} link={certificateLink[2]}/>
            <RowInfoComponentv2 title={"Neural Networks and Deep Learning"} subtitle1={"DeepLearning.AI"} subtitle2={"2020"} link={certificateLink[3]} />
            <RowInfoComponentv2 title={"Machine Learning"} subtitle1={"Stanford online"} subtitle2={"2020"} link={certificateLink[4]} />
            <RowInfoComponentv2 title={"MOOC: How to make a MOOC?"} subtitle1={"Novosibirsk State University (NSU)"} subtitle2={"2020"} link={certificateLink[5]} />
            <RowInfoComponentv2 title={"COVID-19 Contact Tracing"} subtitle1={"Johns Hopkins University"} subtitle2={"2020"} link={certificateLink[6]} />
            <RowInfoComponentv2 title={"Object-Oriented Design"} subtitle1={"University of Alberta"} subtitle2={"2019"} link={certificateLink[7]} />
            <RowInfoComponentv2 title={"Programming for Everybody (Getting Started with Python)"} subtitle1={"University of Michigan"} subtitle2={"2017"} link={certificateLink[8]} />


            <p className="SectionTitle">Professional Memberships</p>
            <RowInfoComponentv3 title={"Annual Member"} subtitle1={"The Indian Science Congress Association"} subtitle2={"Kolkata, India"} addressline1={"Membership No: A3445"} />
            <RowInfoComponentv3 title={"Member"} subtitle1={"International Association of Computer Science and Information Technology (IACSIT)"} subtitle2={"2010"} addressline1={"Membership No: 80336920"} />
            <RowInfoComponentv3 title={"Member"} subtitle1={"International Association of Engineers (IAENG)"} subtitle2={"14th April 2020"} addressline1={"Membership No: 148523"} />
            <RowInfoComponentv3 title={"Member"} subtitle1={"All India Council for Technical Skill Development"} subtitle2={"January 2023"} addressline1={"Membership No: 75528"} />
            <RowInfoComponentv3 title={"Member"} subtitle1={"Computer Science Teachers Association"} subtitle2={"January 2023"} addressline1={"Membership No: 5099"} />

        </div>
    );
}