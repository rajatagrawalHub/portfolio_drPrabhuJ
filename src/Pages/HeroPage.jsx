import ProfileImg from "../Assets/Profile_Img_Designed.svg";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

export default function HeroPage(){
    const messages = [
        "Professor",
        "Innovative Researcher",
        "AI & ML Enthusiast",
        "Scholar"
    ];

    const [text, setText] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);
    const [messageIndex, setMessageIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentMessage = messages[messageIndex];

        const interval = setInterval(() => {
            if (charIndex < currentMessage.length) {
                setText((prevText) => prevText + currentMessage[charIndex]);
                setCharIndex((prevCharIndex) => prevCharIndex + 1);
            } else {
                setTimeout(() => {
                    setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
                    setCharIndex(0);
                    setText('');
                }, 100);
            }
        }, 400);

        return () => clearInterval(interval);
    }, [charIndex, messageIndex]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursorVisible((prevVisible) => !prevVisible);
        }, 300);

        return () => clearInterval(cursorInterval);
    }, []);

    const links = [
        "https://scholar.google.com/citations?user=6-4F8SsAAAAJ&hl=en",
        "https://orcid.org/0000-0003-3335-6911",
        "https://www.linkedin.com/in/dr-prabhu-jayagopal-a58b88aa/",
        "https://www.facebook.com/jprabhuit?mibextid=ZbWKwL",
    ];
    

    return(
        <div id="heroPage" className="flex-row center_both">
            <img src={ProfileImg} id="ProfileImg"/>
            <div className="heroText flex-Column center_both">
                <p className="drTitle">Dr</p>
                <p className="titleText nameText">Prabhu Jayagopal</p>
                <p className="designation">{text} {cursorVisible && <span>|</span>}</p>
                <p className="titleDescription">A distinguished Professor whose innovative research has advanced the fields of Machine Learning, Artificial Intelligence and IoT.</p>
                <div id="SocialsBox" className="flex-row">
                    <Link to={links[0]}><i className="fa-brands fa-google-scholar" ></i></Link>
                    <Link to={links[1]}><i className="fa-brands fa-linkedin" ></i></Link>
                    <Link to={links[2]}><i className="fa-brands fa-orcid" ></i></Link>
                    <Link to={links[3]}><i className="fa-brands fa-facebook" ></i></Link>
                    {/* <img src={ScopusLogo} id="SCLogo" /> */}
                </div>
            </div>
        </div>
    );
}