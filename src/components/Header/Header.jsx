import { useState } from "react";
import styles from "./Header.module.scss";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const MENU_ITEMS = [
  {
    label: "Настройки",
    link: "/settings",
  },
];

const Header = () => {
  const [systemName] = useState("ИСУ");
  const [companyName] = useState("ОАО «Светлогорский ЦКК»");

  // TODO: При клике на ружу надо тоже закрыть
  const [isOpen, setIsOpen] = useState(false);
  const [isCanClose, setIsCanClose] = useState(false);

  const toogleOpen = () => setIsOpen((state) => !state);

  const onMouseLeave = () => {
    isCanClose && setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>{systemName}</span>
        <div className={styles.delimiter} />
        <span className={styles.company}>{companyName}</span>
      </div>
      <div className={styles.settings}>
        <IoSettingsOutline color="white" size="1.2rem" onClick={toogleOpen} />
        {isOpen && (
          <div
            className={styles.items}
            onClick={toogleOpen}
            onMouseEnter={() => setIsCanClose(true)}
            onMouseLeave={onMouseLeave}
          >
            {MENU_ITEMS.map((item) => (
              <Link key={item.link} to={item.link}>
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
