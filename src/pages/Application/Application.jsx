import { useLoaderData } from "react-router-dom";
import styles from "./Application.module.scss";

const Application = () => {
  const params = useLoaderData();

  return (
    <div className={styles.container}>
      <iframe src={"/" + params["*"]} />
    </div>
  );
};

export default Application;
