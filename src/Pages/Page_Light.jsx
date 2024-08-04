import "../App_Light.css";
import NavBar from "../Components/NavBar";

export default function Page_Light({DisplayPage, ChangePageFn, changeThemeFn}){
  return(
    <div id="lightContainer" className="flex-row">
      <NavBar ChangePageFn={ChangePageFn} />
      {DisplayPage}
      <div id="modeSwitch">
        <i className="fa-solid fa-moon" onClick={changeThemeFn}></i>
      </div>
    </div>
  );
}