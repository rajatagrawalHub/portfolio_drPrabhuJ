import { Link } from "react-router-dom";

export default function NavBar({ChangePageFn}){
    
    function onMenuItemClicked(e,value){
        let menuItems = document.querySelectorAll(".menuItem");
        menuItems.forEach((menuItem)=>{
            if(menuItem.classList.contains("selected")){
                menuItem.classList.remove("selected");
            }
        });
        e.target.classList.add("selected");
        ChangePageFn(value);
    }

    

    return(
        <div id="NavBar" className="flex-Column">
            <p className="titleText montserrat_font">Hello</p>
            <div id="menuBox" className="flex-Column">
                
                <p className="menuItem selected" onClick={(e)=>onMenuItemClicked(e,"Home")}>
                    <i className="fa-solid fa-house"></i>Home
                </p>

                <p className="menuItem" onClick={(e)=>onMenuItemClicked(e,"About")}>
                    <i className="fa-solid fa-circle-info"></i>About
                </p>
                <p className="menuItem" onClick={(e)=>onMenuItemClicked(e,"Publications")}>
                    <i className="fa-solid fa-book-open"></i>Publications
                </p>
                <p className="menuItem" onClick={(e)=>onMenuItemClicked(e,"Achievements")}>
                    <i className="fa-solid fa-trophy"></i>Achievements
                </p>
            </div>
            <p className="copyrightText"><i className="fa-regular fa-copyright"></i>Copyright 2024</p>
        </div>
    );
}