import "../App_Dark.css";
import NavBar from "../Components/NavBar";

export default function Page_Dark({DisplayPage, ChangePageFn, changeThemeFn}){
  return(
    <div id="darkContainer" className="flex-row">
      <NavBar ChangePageFn={ChangePageFn} />
      {DisplayPage}
      <div id="modeSwitch">
        <i className="fa-solid fa-sun" onClick={changeThemeFn}></i>
      </div>
    </div>
  );
}