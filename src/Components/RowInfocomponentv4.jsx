import { Link } from "react-router-dom";

export default function RowInfoComponentv4({title, description, year, visibility ="show", link}){
    return(
            <div id="RowInfoComponentBoxv4" className={`flex-Column ${visibility}`} >
                <Link to={link}><p className="journalName bold">{title}</p></Link>
                <p className="journalDescription">{description}</p>
                <div className="journalYear flex-row center_items">
                    <p className="bold">{year}</p>
                    <div className="circleYear"></div>
                </div>
            </div>
    );
}