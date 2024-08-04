import Page_Light from "./Pages/Page_Light";
import HeroPage from "./Pages/HeroPage";
import { useState } from "react";
import AboutPage from "./Pages/AboutPage";
import AchievementPage from "./Pages/AchievementPage";
import PublicationPage from "./Pages/PublicationPage";
import Page_Dark from "./Pages/Page_Dark";

export default function App(){

  const [page,setPage] = useState("Home");
  const [themeLight, setLightTheme] = useState(true);

  function changePage(clickedPage){
    console.log(clickedPage);
    setPage(clickedPage);    
  }

  function changeTheme(){
    if(themeLight){
      setLightTheme(false);
    }else{
      setLightTheme(true);
    }
  }

  const navValues = ["Home", "About", "Achievements", "Publications"]
  const pageElements = [<HeroPage />, <AboutPage />, <AchievementPage />, <PublicationPage />]

  if(themeLight){
    return(
      <Page_Light DisplayPage={pageElements[navValues.indexOf(page)]} ChangePageFn={changePage} changeThemeFn={changeTheme} />
    )
  }else{
    return(
      <Page_Dark DisplayPage={pageElements[navValues.indexOf(page)]} ChangePageFn={changePage} changeThemeFn={changeTheme} />
    )
  }
}