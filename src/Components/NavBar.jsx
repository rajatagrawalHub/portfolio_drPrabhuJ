import { useState, useEffect } from 'react';

export default function NavBar({ ChangePageFn }) {
    const [selectedItem, setSelectedItem] = useState('Home');

    const messages = [
        "Hello",
        "नमस्ते"
    ];

    const [text, setText] = useState("");
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
        }, 1000);

        return () => clearInterval(interval);
    }, [charIndex, messageIndex]);

    function onMenuItemClicked(value) {
        setSelectedItem(value);
        ChangePageFn(value);
    }

    return (
        <div id="NavBar" className="flex-Column">
            <p className="titleText montserrat_font" id="navHello">{text}</p>
            <div id="menuBox" className="flex-Column">
                <p 
                    className={`menuItem ${selectedItem === 'Home' ? 'selected' : ''}`} 
                    onClick={() => onMenuItemClicked('Home')}
                >
                    <i className="fa-solid fa-house"></i><span className="menuText">Home</span>
                </p>

                <p 
                    className={`menuItem ${selectedItem === 'About' ? 'selected' : ''}`} 
                    onClick={() => onMenuItemClicked('About')}
                >
                    <i className="fa-solid fa-circle-info"></i><span className="menuText">About</span>
                </p>
                <p 
                    className={`menuItem ${selectedItem === 'Publications' ? 'selected' : ''}`} 
                    onClick={() => onMenuItemClicked('Publications')}
                >
                    <i className="fa-solid fa-book-open"></i><span className="menuText">Publications</span>
                </p>
                <p 
                    className={`menuItem ${selectedItem === 'Achievements' ? 'selected' : ''}`} 
                    onClick={() => onMenuItemClicked('Achievements')}
                >
                    <i className="fa-solid fa-trophy"></i><span className="menuText">Achievements</span>
                </p>
            </div>
            <p className="copyrightText"><i className="fa-regular fa-copyright"></i>Copyright 2024</p>
        </div>
    );
}
