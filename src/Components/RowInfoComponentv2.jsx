import { Link } from "react-router-dom";
export default function RowInfoComponentv2({title, subtitle1, subtitle2,link}){
    return(
        <div id="RowInfoComponentBoxv2" className="flex-row">
            <div className="flex-Column keyDetails">
                <div className="flex-row center_items">
                    <p className="nameTextRIC">{title}</p>
                    <Link to={link}><i className="fa-solid fa-circle-chevron-right rightbox"></i></Link>
                </div>
                <p className="designationTextRIC">{subtitle1}</p>
                <p className="designationTextRIC">{subtitle2}</p>
            </div>
        </div>
    );
}