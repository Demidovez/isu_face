import { useState } from "react";
import CardsLayout from "../../components/CardsLayout/CardsLayout";
import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard.svg";

const Settings = () => {
  const [sites] = useState([
    {
      label: "Управление проектами\n(боты, ису-модули)",
      icon: (props) => <DashboardIcon {...props} />,
      link: "/projects",
    },
    {
      label: "Оригинальная ИСУ",
      icon: (props) => <DashboardIcon {...props} />,
      link: "http://172.27.70.10/MES",
      isExternal: true,
    },
  ]);

  return (
    <div>
      <h1>Дополнительные приложения</h1>
      <CardsLayout items={sites} />
    </div>
  );
};

export default Settings;
