import React from "react";
import "./style.css";
import heroAPropos from "../../../assets/hero_a_propos.png";
import Tab from "../../Tab";
function APropos({ title, tabText, width }) {
  return (
    <div className='APropos'>
      <img src={heroAPropos} alt='hero' />
      <div className='tabs'>
        <Tab
          title='Fiabilité'
          tabText='La bienveillances fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
          width={1023}
        />
        <Tab
          title='Respect'
          tabText='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
          width={1023}
        />
        <Tab
          title='Service'
          tabText='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
          width={1023}
        />
        <Tab
          title='Responsabilité'
          tabText='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
          width={1023}
        />
      </div>
    </div>
  );
}
export default APropos;
