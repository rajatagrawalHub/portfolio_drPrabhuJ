export default function RowInfoComponent({title, subtitle, addressline1, addressline2, addressline3, addressline4 =""}){
    return(
        <div id="RowInfoComponentBox" className="flex-row">
            <div className="flex-Column keyDetails">
                <p className="nameTextRIC">{title}</p>
                <p className="designationTextRIC">{subtitle}</p>
            </div>
            <div className="flex-Column minorDetails">
                <p className="minorDetailItem">{addressline1}</p>
                <p className="minorDetailItem">{addressline2}</p>
                <p className="minorDetailItem">{addressline3}</p>
                <p className="minorDetailItem">{addressline4}</p>
            </div>
        </div>
    );
}