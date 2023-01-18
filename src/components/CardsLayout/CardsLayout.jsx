import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import styles from "./CardsLayout.module.scss";

const CardsLayout = ({ items }) => {
  const navigate = useNavigate();

  const goToApp = (link) => {
    navigate("/app" + link);
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
