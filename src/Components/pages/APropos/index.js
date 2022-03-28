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
          tabText='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
          width={1023}
        />
        <Tab
          title='Respect'
          tabText='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
          width={1023}
        />
        <Tab
          title='Service'
          tabText="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          width={1023}
        />
        <Tab
          title='Responsabilité'
          tabText="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          width={1023}
        />
      </div>
    </div>
  );
}
export default APropos;
