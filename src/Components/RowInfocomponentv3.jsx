export default function RowInfoComponentv3({title, subtitle1, subtitle2, addressline1}){
    return(
        <div id="RowInfoComponentBoxv3" className="flex-row">
            <div className="flex-Column keyDetails">
                <p className="nameTextRIC">{title}</p>
                <p className="designationTextRIC">{subtitle1}</p>
                <p className="designationTextRIC">{subtitle2}</p>
            </div>
            <div className="flex-Column minorDetails">
                <p className="bold">{addressline1}</p>
            </div>
        </div>
    );
}