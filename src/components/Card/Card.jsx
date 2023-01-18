import styles from "./Card.module.scss";

const Card = ({ data, onClick }) => {
  return (
    <div className={styles.container} onClick={() => onClick(data.link)}>
      <div className={styles.card}>{data.icon({ height: 80, width: 80 })}</div>
      <div className={styles.label}>{data.label}</div>
    </div>
  );
};

export default Card;
