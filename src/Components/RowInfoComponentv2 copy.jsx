export default function RowInfoComponentv2({title, subtitle1, subtitle2,icon}){
    return(
        <div id="RowInfoComponentBoxv2" className="flex-row">
            <div className="flex-Column keyDetails">
                <div className="flex-row">
                <p className="nameTextRIC">{title}</p>
                </div>
                <p className="designationTextRIC">{subtitle1}</p>
                <p className="designationTextRIC">{subtitle2}</p>
            </div>
        </div>
    );
}