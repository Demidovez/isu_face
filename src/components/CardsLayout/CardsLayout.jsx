import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import styles from "./CardsLayout.module.scss";

const CardsLayout = ({ items }) => {
  const navigate = useNavigate();

  const goToApp = (isExternal, link) => {
    if (isExternal) {
      window.open(link, "_blank");
    } else {
      navigate("/app" + link);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {items.map((site, index) => (
          <Card key={index} data={site} onClick={goToApp} />
        ))}
      </div>
    </div>
  );
};

export default CardsLayout;
